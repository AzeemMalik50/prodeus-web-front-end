<template>
  <div class="_20px-pad-wrapper">
    <div class="_100-percent-justify-start">
      <div class="_30px-bottom-margin">
        <div class="flex-space-between">
          <h1 class="heading-4">{{lessonHeading}}</h1>
         <video v-show="isVideoSelected" id="video" controls height="150" width="180" hidden />
        <input type="file" accept="video/mp4,video/x-m4v,video/*" :id="lesson.lessonNumber" @change="fileSelect($event.target.name, $event.target.files);" class="input-file" hidden>
         <div class="video-upload" v-if="lesson.toUpload">
          <div class="button top-padding cursor-pointer" @click="chooseFiles()">
            <h1 class="form-button"> {{lesson.toUpload.video ? lesson.toUpload.video.name.substring(0,20) :'Upload Video'}}</h1>
          </div>
          <div class="image-container" v-if="lesson.toUpload.video" @click="removeSelectedFile()" >
          <img class="thumbnail"  :src="lesson.lessonThumbnail"/>
           <div class="after">
             <img src="@/assets/x.svg" class="cross" />
           </div>
          </div>
         </div>
        </div>
      </div>
      <div class="w-form">
        <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
          <div class="_30px-bottom-margin">
            <input v-model="lesson.title" type="text" class="form-text w-input" maxlength="256" name="lesson-title-2" data-name="Lesson Title 2" placeholder="Title" id="lesson-title-2" required="">
          </div>
          <div class="_30px-bottom-margin">
            <quill-editor v-model="lesson.description" :options="config" ref="myQuillEditor">
            </quill-editor>
          </div>
          <input type="submit" value="Submit" data-wait="Please wait..." class="submit-button-2 w-button">
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail" :class="{'display-block' : lesson.isError}">
            <div>Oops! Missing required fields.</div>
         </div>
      </div>
      <div v-if="allowAssigment">
        <div class="button secondary" @click="toggleAssignment()">
          <h1 class="form-button purple">{{lesson.hasAssignment ? 'Assignment' : 'Add Assignment'}}</h1>
        </div>
        <transition v-if="lesson.hasAssignment" name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">
          <div class="assignment w-form" v-if="lesson.teacherAssignment">
            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="form-3 border-none">
              <div class="div-block-53">
                <div class="text-block-3">Required</div>
                <div class="div-block-54 cursor-pointer" :class="{'in-active': !isAssignReq}" @click="assignmentRequired()">
                  <img src="@/assets/White-Check.svg" v-if="isAssignReq" class="check" />
                </div>
              </div>
              <quill-editor v-model="lesson.teacherAssignment.guidelines" :options="config" ref="myQuillEditor">
              </quill-editor>
              <FileUpload :attachObject="lesson.teacherAssignment" />
              <input type="submit" value="Submit" data-wait="Please wait..." class="submit-button-2 w-button"></form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from "@/components/CreateClasss/FileUpload";
import axios from 'axios';
import { authHeader } from '../../_helpers';
const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
export default {
  components: {
    FileUpload
  },
  props: {
    lesson: Object,
    lessonHeading: String,
    allowAssigment: Boolean,
    isVideoSelected: Boolean
  },
  watch: {
    lesson: {
      handler(val) {
        if (this.lesson.teacherAssignment) {
          this.isAssignReq = this.lesson.teacherAssignment.isrequired;
        }
      },
      deep: true
    },
    "lesson._id": {
      handler(val) {
        if (this.lesson.teacherAssignment) {
          this.isAssignReq = this.lesson.teacherAssignment.isrequired;
        }
      },
      deep: true
    }
  },
  created() {
    if (this.lesson._id) {
    this.setEditLesson();
    }
  },
  data() {
    return {
      cancel: null,
      hasAssignment: false,
      isAssignReq: false,
      videoThumbnail: "",
      config: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "link"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"]
          ]
        }
      }
    };
  },

  methods: {
    setEditLesson() {
      let user = JSON.parse(localStorage.getItem('user'));
      this.lesson.lessonThumbnail =
        process.env.VUE_APP_API_BASE_URL + "/media/" + this.lesson.img+ "?at="+user.accessToken;;
        if(this.lesson.teacherAssignment) {
          this.lesson.hasAssignment = true;
        }
      // this.lesson.toUpload.video =  this.lesson.media;
      this.$store
        .dispatch("classes/getMediaDetail", this.lesson.media)
        .then(res => {
          this.lesson.toUpload = {
            video: {}
          };
          this.lesson.toUpload.video = res.data;
          this.lesson.toUpload.video.name = res.data.originalName;
        });
    },
    chooseFiles() {
      this.lesson.toUpload.isUploaded = false;
      document.getElementById(this.lesson.lessonNumber).click();
    },
    removeSelectedFile() {
      if (document.getElementById(this.lesson.lessonNumber)) {
        document.getElementById(this.lesson.lessonNumber).value = "";
      }

     if(this.cancel) {
       this.cancel();
     }
      this.lesson.toUpload.isUploading = false;
      this.videoThumbnail = null;
      this.lesson.lessonThumbnail = null;
      this.lesson.toUpload.video = null;
      this.lesson.toUpload.thumbnail = null;
      this.lesson.toUpload.isUploaded = true;
      this.lesson.media = "";
      this.lesson.img = "";
    },
    toggleAssignment() {
      this.lesson.hasAssignment = !this.lesson.hasAssignment;
      this.$parent.addAssignment();
    },
    uploadVideo() {
       if (document.getElementById(this.lesson.lessonNumber)) {
        document.getElementById(this.lesson.lessonNumber).value = "";
      }
      this.lesson.toUpload.isUploading = true;
      let formData = new FormData();
      formData.append("thumbnail", this.lesson.toUpload.thumbnail);
      formData.append("video", this.lesson.toUpload.video);
      // this.$store.dispatch("classes/uploadVideo", formData)
      axios.post("/uploads/video", formData, {
         cancelToken: new CancelToken( (c) => {
            // An executor function receives a cancel function as a parameter
            this.cancel = c;
          }),
        headers: authHeader({'Content-Type': 'multipart/form-data'}) })
        .then(
        videos => {
          this.cancel = null;
          this.lesson.media = videos.data.video._id;
          this.lesson.img = videos.data.thumbnail._id;
          this.lesson.toUpload.isUploading = false;
        },
        err => {
          console.error(err);
        }
      );
    },
    dataURLtoFile(dataurl, filename) {
      let arr = dataurl.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    fileSelect(fieldName, fileList) {
      if (!fileList.length) return;
      this.$parent.isVideoSelected = true;
      var file = event.target.files[0];
      var fileReader = new FileReader();
      this.lesson.toUpload.video = file;
      fileReader.onload = () => {
        var blob = new Blob([fileReader.result], { type: file.type });
        var url = URL.createObjectURL(blob);
        var video = document.getElementById("video");
        video.onloadedmetadata = () => {
          window.URL.revokeObjectURL(video.src);
          var duration = video.duration;
          this.lesson.secondsDuration = duration;
        };

        var timeupdate = () => {
          if (snapImage()) {
            video.removeEventListener("timeupdate", timeupdate);
            video.pause();
          }
        };
        video.addEventListener("loadeddata", () => {
          if (snapImage()) {
            video.removeEventListener("timeupdate", timeupdate);
          }
        });
        var snapImage = () => {
          var canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas
            .getContext("2d")
            .drawImage(video, 0, 0, canvas.width, canvas.height);
          var image = canvas.toDataURL();
          // var img_b64 = canvas.toDataURL('image/png');
          // console.log(image);

          //  new File(
          //   [image],
          //   `lesson${this.lesson.lessonNumber}.png`
          // );
          // uploading video......

          var success = image.length > 100000;
          if (success) {
            this.videoThumbnail = image;
            this.lesson.lessonThumbnail = image;
            this.lesson.toUpload.thumbnail = this.dataURLtoFile(
              image,
              `lesson${this.lesson.lessonNumber}.png`
            );
            this.uploadVideo();
            URL.revokeObjectURL(url);
          }
          return success;
        };
        video.addEventListener("timeupdate", timeupdate);
        video.preload = "metadata";
        video.src = url;
        // Load video in Safari / IE11
        video.muted = true;
        video.playsInline = true;
        video.play();
      };
      fileReader.readAsArrayBuffer(file);
    },
    assignmentRequired() {
      this.lesson.teacherAssignment.isrequired = !this.lesson.teacherAssignment
        .isrequired;
      this.isAssignReq = this.lesson.teacherAssignment.isrequired;
    }
  }
};
</script>
<style lang="scss" scoped>
.check {
  height: 8px;
}

.border-none {
  border: none;
}
.border {
  border: 1px solid #d9d9d9 !important;
}
.div-block-54 {
  border: 2px solid #8446e8;
}
.in-active {
  background-color: #fff !important;
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
  .cls-1,
  .cls-3 {
    fill: none;
  }

  .cls-1 {
    stroke: #fff;
  }

  .cls-2 {
    stroke: none;
  }
}
.display-block {
  display: block;
}
</style>
