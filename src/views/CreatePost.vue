<template>
  <div class="modal-wrapper" @click.self="closeDialog()">
    <div class="_100-vh center" @click.self="closeDialog()">
      <div class="addpost-modal">
        <div class="card add">
          <div class="signifier" :class="getClass"></div>
          <div class="_30px-bottom-margin">
            <div class="form-block-4 w-form">
              <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                <input type="text" class="text-field-2 w-input" v-model="title" maxlength="256" name="title" data-name="title" placeholder="Write a title…" id="title">

              </form>
              <div v-for="(cont, index) in content" :key="index">
            <img class="delete" src="../assets/delete.svg" height="12" @click="removeItem(index)" :class="{back: cont.type==='image' || cont.type==='video'}" />
                <quill-editor v-if="cont.type==='text'" v-model="cont.body" :options="config" ref="myQuillEditor">
                </quill-editor>
            <!-- <img src="../assets/delete.svg" height="12" /> -->
             <div class="media-container" v-if="cont.type==='image'" >
                <img  :src="getImage(cont.media)" />
             </div>
             <div class="media-container" v-if="cont.type==='video'" >
                <video class="post-video"  controls :src="getImage(cont.media)"></video>
             </div>
              </div>
    <Loading :color="'#8446e8'" :active.sync="uploading" :is-full-page="false"></Loading>

              <!-- <quill-editor v-model="content" :options="config" ref="myQuillEditor">
                        </quill-editor> -->
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div class="_10px-botttom-margin">
            <h1 class="heading-37">ADD CONTENT</h1>
          </div>
          <div class="_40px-bottom-margin">
            <img src="../assets/Group-5511.svg" @click="addText" class="group-icon image-16" />
            <input type="file" name="postImage" accept="image/x-png,image/gif,image/jpeg" id="postImage" @change="addImage($event.target.name, $event.target.files);" class="input-file" hidden>

            <img src="../assets/Group-5508.svg" class="group-icon image-17" @click="choosePostImage()" />
            <input type="file" name="postVideo" accept="video/mp4,video/x-m4v,video/*" id="postVideo" @change="addVideo($event.target.name, $event.target.files);" class="input-file" hidden>

            <img src="../assets/Group-5514.svg" class="group-icon image-18" @click="choosePostVideo()" />
            <!-- <img src="../assets/Group-5517.svg" class="group-icon image-19" /> -->
          </div>
          <div class="div-block-92">
            <!-- <a class="link outline" :class="getClass">Choose Category</a> -->
             <select v-if="type !== 'Answer'" id="field-2" class="link outline select" :class="getClass" name="field-2" v-model="category" required="true" data-name="Field 2">
                        <option  value="">Choose Category</option>
                        <option v-for="catg in allCategories" :key="catg.id" :value="catg.name">
                          {{catg.name}}</option>
                        </select>
          <a class="link cursor-pointer" :class="submitClass" @click="submit()">Submit</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from "vuex";
import Loading from "vue-loading-overlay";
const { mapState, mapActions } = createNamespacedHelpers("categories");

export default {
  props: ["type", "parentPost"],
  components: {
    Loading
  },
  data() {
    return {
      uploading: false,
      title: "",
      category: "",
      content: [],
      config: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline"],
            [
              {
                list: "ordered"
              },
              {
                list: "bullet"
              }
            ],
            ["link"]
          ]
        }
      }
    };
  },
  created() {
    this.$store.dispatch("categories/getCategories");
    window.addEventListener("keyup", this.closePostModal);
  },
  methods: {
    getImage(mediaId) {
      return this.$apiBaseUrl + "/media/" + mediaId;
    },
    closePostModal(e) {
      /*  press escape to close modal */
      if (e.keyCode === 27) {
        this.closeDialog();
      }
    },
    closeDialog() {
      if (confirm(`Are you sure to exit create ${this.type}!`)) {
        this.closeForm();
      }
    },
    closeForm() {
      this.$store.dispatch("toggelPostForm", false);
      this.$store.dispatch("toggelAnswerForm", false);
      this.$store.dispatch("post/setSelectedQuestion", null);
    },
    addText() {
      this.content.push({
        type: "text",
        body: ""
      });
    },
    addImage(fieldName, fileList) {
      if (!fileList.length) return;
      let newImage = event.target.files[0];
      this.uploadMedia(newImage, "image");
    },
    uploadMedia(mediaFile, type) {
      let formData = new FormData();
      formData.append("prodeusFiles", mediaFile);
      this.uploading = true;
      this.$store.dispatch("classes/uploadFiles", formData).then(
        media => {
          this.uploading = false;
          this.content.push({
            type: type,
            media: media.data[0]
          });
          document.getElementById("postImage").value = "";
          document.getElementById("postVideo").value = "";
        },
        err => {
          console.error(err);
        }
      );
    },
    choosePostImage() {
      document.getElementById("postImage").click();
    },
    choosePostVideo() {
      document.getElementById("postVideo").click();
    },
    addVideo(fieldName, fileList) {
      if (!fileList.length) return;
      let newMedia = event.target.files[0];
      this.uploadMedia(newMedia, "video");
    },
    removeItem(index) {
      this.content.splice(index, 1);
    },
    submit() {
      if (this.title && this.title.length >= 5) {
        let payload = {
          title: this.title,
          content: this.content,
          category: this.category,
          postType:
            this.type.charAt(0).toUpperCase() + this.type.slice(1).toLowerCase()
        };
        if (this.parentPost) {
          payload.parent = this.parentPost._id;
        }
        this.$store.dispatch("post/addPost", payload).then(
          post => {
            this.closeForm();
            if (this.parentPost) {
              this.parentPost.replies.push(post.data);
            } else {
              let query ={};
              query[this.type] = post.data._id;
              this.$router.push({
                name: 'feed',
                query: query
              });
            }
          },
          err => {
            console.error(err);
          }
        );
      }
    }
  },
  computed: {
    getClass() {
      if (this.type === "project") {
        return {
          project: true
        };
      } else {
        return {
          question: true
        };
      }
    },
    submitClass() {
      if (this.title && this.title.length >= 5) {
        return this.getClass;
      } else {
        return {
          grey: true
        };
      }
    },
    ...mapState({
      allCategories: state => state.allCategories
    })
  }
};
</script>

<style lang="scss" scoped>
.group-icon {
  height: 40px;
}

.quill-editor {
  margin-top: 20px;
}
.delete {
  height: 25px;
  position: absolute;
  right: 25px;
  padding-top: 10px;
  &.back {
    background-color: #cccccc;
    padding: 0;
  }
}
.media-container {
  margin-top: 10px;
}
.post-video {
  width: 100%;
}
.project {
  background-color: #ebcb4d;
   &.select {
    border: 2px solid #ebcb4d;
    color: #ebcb4d;
  }
}
.question {
  background-color: #61cb96;
  &.select {
    border: 2px solid #61cb96;
    color: #61cb96;
  }
}

</style>
