<template>
  <div class="modal-wrapper" @click.self="closeDialog">
    <div class="_100-vh center" @click.self="closeDialog">
      <div class="addpost-modal" @click.self="closeDialog">
        <div class="card add" v-if="!assignmentSubmited">
          <!-- <div class="width-100 " > -->
            <div class="signifier"></div>
            <div class="_30px-bottom-margin">
              <div class="form-block-4 w-form">
                <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                  <input type="text" class="text-field-2 w-input" v-model="assignment.title" maxlength="256" name="title" data-name="title" placeholder="Write a title…" id="title">
                </form>
                <div v-for="(cont, index) in assignment.content" :key="index">
                  <img class="delete" src="../../assets/delete.svg" height="12" @click="removeItem(index)" :class="{back: cont.type==='image' || cont.type==='video'}" />
                  <quill-editor v-if="cont.type==='text'" v-model="cont.body" :options="config" ref="myQuillEditor">
                  </quill-editor>
                  <!-- <img src="../assets/delete.svg" height="12" /> -->
                  <div class="media-container" v-if="cont.type==='image'">
                    <img :src="getImage(cont.media)" />
                  </div>
                  <div class="media-container" v-if="cont.type==='video'">
                    <video class="post-video" controls :src="getImage(cont.media)"></video>
                  </div>

                </div>
                <div class="attached-item" v-for="(file,index) in attachedFiles" :key="file.name">
                  <img src="../../assets/attachment.svg" class="attachment" />
                  <span>{{file.name.length < 35 ? file.name : file.name.slice(0, 35)+'...'}}</span>
                  <img @click="removeAttachItem(index)" src="../../assets/Trash.svg" class="trash" />
                </div>
                <Loading :color="'#8446e8'" :active.sync="uploading" :is-full-page="false"></Loading>

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
              <img src="../../assets/Group-5511.svg" @click="addText" class="group-icon image-16" />
              <input type="file" name="postImage" accept="image/x-png,image/gif,image/jpeg" id="postImage" @change="addImage($event.target.name, $event.target.files);" class="input-file" hidden>

              <img src="../../assets/Group-5508.svg" class="group-icon image-17" @click="choosePostImage()" />
              <input type="file" name="postVideo" accept="video/mp4,video/x-m4v,video/*" id="postVideo" @change="addVideo($event.target.name, $event.target.files);" class="input-file" hidden>

              <img src="../../assets/Group-5514.svg" class="group-icon image-18" @click="choosePostVideo()" />
              <input type="file" multiple id="studentAssignmentFiles" @change="filesChange($event.target.name, $event.target.files);" hidden>

              <img src="../../assets/fileattach.svg" @click="chooseFiles()" height="40" alt="">
            </div>
            <div class="div-block-92">
              <div class="text-block-17">Assignment {{currentLesson.assignmentNumber}}</div>
              <div class="my-class-toggle">
                <a href="#" class="toggle  social" :class="{'active': isPublic}">Public</a>
                <div class="div-block-28">
                  <div class="div-block-27 cursor-pointer" @click="toggelAccess">
                    <div class="div-block-29 social" :class="{'private': isPrivate}"></div>
                  </div>
                </div><a href="#" class="toggle social" :class="{'active': isPrivate}">Private</a>
              </div><a href="#" class="link" :class="{'active-submit': isFormValid, 'grey': !isFormValid}" @click.stop="submit">Submit</a></div>
          <!-- </div> -->
        </div>
          <div class="div-block-129 _380" v-else>
            <img src="../../assets/Logo.svg" height="40" alt="" class="image-41">
            <div class="div-block-132">
              <h1 class="heading-44"> Assignment is successfully submitted!</h1>
              <div class="_20px-bottom-margin"></div>
              <div class="div-block-148 cursor-pointer" @click.self="closeForm">
                <img src="../../assets/left-arrow_1.svg" @click.self="closeForm" height="16" alt="" class="image-42"><a href="#" class="link-3 white">Back</a></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from "vue-loading-overlay";
  import {
    mapGetters,
    mapState
  } from "vuex";

  export default {
    props: ["type", "parentPost"],
    components: {
      Loading
    },
    data() {
      return {
        assignmentSubmited: false,
        uploading: false,
        attachedFiles: [],
        assignment: {
          title: "",
          access: "private",
          content: [],
          media: [],
          parentClass: {
            assignmentNumber: 0,
            classId: "",
            lessonId: ""
          }
        },
        config: {
          modules: {
            toolbar: [
              ["bold", "italic", "underline"],
              [{
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
      this.assignment.parentClass = this.currentLesson;
    },
    methods: {
      chooseFiles: function() {
        document.getElementById("studentAssignmentFiles").click();
      },
      toArray(fileList) {
        return Array.prototype.slice.call(fileList);
      },
      filesChange(fieldName, fileList) {
        if (!fileList.length) return;
        fileList = this.toArray(this.attachedFiles).concat(
          this.toArray(fileList)
        );
        this.attachedFiles = fileList;
      },
      toggelAccess() {
        if (this.assignment.access === "public") {
          this.assignment.access = "private";
        } else {
          this.assignment.access = "public";
        }
      },
      removeAttachItem(index) {
        this.attachedFiles = Array.from(this.attachedFiles, x => x);
        // for (let i = 0; i < this.files.length; i++) {
        this.attachedFiles.splice(index, 1);
        // }
      },
      upLoadFiles() {
        let assignment = new FormData();
        for (let i = 0; i < this.attachedFiles.length; i++) {
          assignment.append("prodeusFiles", this.attachedFiles[i]);
        }
        this.uploading = true;
        this.$store.dispatch("classes/uploadFiles", assignment).then(
          assigns => {
            if (assigns) {
              this.assignment.media = assigns.data;
              this.uploading = false;
              this.saveAssignment();
            }
          },
          err => {
            console.error(err);
          }
        );
      },
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
        if (this.assignmentSubmited) {
          this.closeForm();
        } else if (confirm(`Are you sure to exit submit assignment!`)) {
          this.closeForm();
        }
      },
      closeForm() {
        this.$store.dispatch("classes/setShowSubmitAssignment", false);
        this.$store.dispatch("classes/setCurretLesson", {
          classId: "",
          lessonId: ""
        });
      },
      addText() {
        this.assignment.content.push({
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
            this.assignment.content.push({
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
        this.assignment.content.splice(index, 1);
      },
      submit() {
        if (this.isFormValid) {
          if (this.attachedFiles.length) {
            this.upLoadFiles();
          } else {
            this.saveAssignment();
          }
        }
      },
      saveAssignment() {
        this.$store
          .dispatch("classes/submitAssignmentTolesson", this.assignment)
          .then(
            res => {
              //  this.closeForm();
              this.assignmentSubmited = true;
            },
            err => {
              console.error(err);
            }
          );
      }
    },
    computed: {
      isFormValid() {
        return this.assignment.title && this.assignment.title.length >= 5;
      },
      isPublic() {
        return this.assignment.access === "public";
      },
      isPrivate() {
        return this.assignment.access === "private";
      },
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
      ...mapGetters({
        currentClass: "classes/currentClass"
      }),
      ...mapState({
        currentLesson: state => state.classes.currentLesson
      })
    }
  };
</script>

<style lang="scss" scoped>
  .active-submit {
    background-color: #8446e8;
  }

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

  .private {
    left: 20px;
  }

  .trash {
    // height: 12px;
    // position: absolute;
    // right: 13px;
    height: 12px;
    position: absolute;
    right: 30px;
  }

  .attachment {
    height: 12px;
  }

  .attached-item {
    padding: 10px !important;
    height: 40px !important;
    margin-top: 12px !important;
    margin-bottom: 0px !important;
    -webkit-box-flex: 0 !important;
    -ms-flex: 0 auto !important;
    flex: 0 auto !important;
    border-style: none !important;
    border-bottom-width: 1px !important;
    border-bottom-color: #8446e8 !important;
    border-radius: 5px !important;
    background-color: #f4f4f5 !important;
    color: #bcbcbc !important;
    span {
      text-decoration: underline;
      margin-left: 5px;
    }
  }

  .width-100 {
    width: 100%;
  }
</style>
