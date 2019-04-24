<template>
  <div class="flex-space-between">
    <div class="_20-right">
      <div class="horiz-left-align-justify-atart">
        <user-thumbnail :user="currentUser" :myClass="'profile-picture _30'" />
        <!-- <div class="profile-picture _30"></div> -->
      </div>
    </div>
    <div class="align-right-justify-start">
      <div class="form-block-3 w-form">
        <form id="email-form" name="email-form" data-name="Email Form">
          <input type="file" name="commentMedia" accept="image/x-png,image/gif,image/jpeg,video/mp4" :id="discId" @change="addMedia($event.target.name, $event.target.files);" class="input-file" hidden>
          <div class="comment-block w-input pd-0 pdr-10">
            <img src="@/assets/attachment.svg" v-if="!discItem.selectedMedia.file" @click="chooseMedia()" class="attach" />
            <input type="text" :ref="discId" v-on:keydown.enter.prevent='submitComment' v-model="discItem.body" class="comment-block w-input pd-0" :class="{'pdl-15':isMedia }" maxlength="256" :name="discId" data-name="Comment" :placeholder="inputPlaceHolder" :id="discId">
            <div class="image-container" v-if="isMedia">
              <video class="thumbnail" :src="src" v-if="isVideo">
              </video>
              <img class="thumbnail" :src="src" v-else/>
              <div class="after">
                <img src="@/assets/x.svg" class="cross" @click="removeMedia" />
              </div>
            </div>
            <!-- <img src="../../assets/fortune.jpg" class="com-media" /> -->

          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    <loading :color="'#8446e8'" :active.sync="isUploading" :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "vue-loading-overlay";

export default {
  props: ["discId", "discItem", "onSubmit", "focus", 'placeholdertext'],
  components: {
    Loading
  },
  data() {
    return {
      isUploading: false,
      fullPage: false
    };
  },
  methods: {
    setFocus() {
      this.$nextTick(() => {
        this.$refs[this.discId].focus();
      });
    },
    addMedia(fieldName, fileList) {
      if (!fileList.length) return;
      let newMedia = event.target.files[0];
      this.discItem.selectedMedia.file = newMedia;
      this.discItem.selectedMedia.mediaType = newMedia.type.split("/")[0];
      // document.getElementById("commentMedia").value = "";
    },
    chooseMedia() {
      document.getElementById(this.discId).click();
    },
    removeMedia() {
      this.discItem.selectedMedia.mediaType = "";
      this.discItem.selectedMedia.file = null;
      document.getElementById(this.discId).value = "";
    },
    submitComment() {
      if (this.discItem.body) {
        if (this.isMedia) {
          this.uploadMedia();
        } else {
          delete this.discItem.media;
          this.onSubmit();
        }
      }
    },
    uploadMedia() {
      if(!this.discItem.media){
        this.discItem.media = {};
      }
      this.discItem.media.type = this.discItem.selectedMedia.mediaType;
      let formData = new FormData();
      formData.append("prodeusFiles", this.discItem.selectedMedia.file);
      this.isUploading = true;
      this.$store.dispatch("classes/uploadFiles", formData).then(
        media => {
          this.isUploading = false;
          this.discItem.media.mediaId = media.data[0];
          this.removeMedia();
          this.onSubmit();
        },
        err => {
          console.error(err);
        }
      );
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.authentication.user
    }),
    isVideo() {
      return this.discItem.selectedMedia.mediaType === "video";
    },
    isMedia() {
      return !!this.discItem.selectedMedia.file;
    },
    src() {
      return window.URL.createObjectURL(this.discItem.selectedMedia.file);
    },
    inputPlaceHolder(){
      return this.placeholdertext || 'Write comment here';
    }
  }
};
</script>

<style lang="scss" scoped>
.attach {
  height: 14px;
  // top: 36px;
  position: relative;
  left: 95%;
}

.pd-0 {
  padding: 0;
}

.com-media {
  height: 35px;
}

.pdr-10 {
  padding-right: 10px;
}

.thumbnail {
  // margin-left: 12px;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

.video-upload {
  display: inherit;
}

.image-container {
  position: relative;
  right: 0;
  width: 50px;
  height: 50px;
  margin-left: 12px;
}

.image-container .after {
  position: relative;
  top: -50px;
  left: -12px;
  width: 50px;
  height: 50px;
  display: none;
  color: #fff;
  margin-left: 12px;
  border-radius: 10px;
}

.image-container:hover .after {
  display: block;
  background: rgba(0, 0, 0, 0.4);
}

.cross {
  position: relative;
  height: 20px;
  left: 15px;
  top: 15px;
}

.pdl-15 {
  padding: 0 0 0 15px;
}
</style>
