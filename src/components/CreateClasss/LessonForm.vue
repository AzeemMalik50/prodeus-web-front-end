<template>
  <div class="_20px-pad-wrapper">
    <div class="_100-percent-justify-start">
      <div class="_30px-bottom-margin">
        <div class="flex-space-between">
          <h1 class="heading-4">{{lessonHeading}}</h1>
         <video v-show="isVideoSelected" id="video" controls height="150" width="180" hidden />
        <input type="file" accept="video/mp4,video/x-m4v,video/*" id="attachFiles" @change="fileSelect($event.target.name, $event.target.files);" class="input-file" hidden>            
         <div class="video-upload">
          <div class="button top-padding cursor-pointer" @click="chooseFiles()">
            <h1 class="form-button"> {{lesson.toUpload.video ? lesson.toUpload.video.name.substring(0,20) :'Upload Video'}}</h1>
          </div>
          <div class="image-container" v-if="lesson.toUpload.video" @click="removeSelectedFile()" >
          <img class="thumbnail"  :src="videoThumbnail"/>
           <div class="after">
             <cross class="cross" />
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
        <!-- <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
         </div> -->
      </div>
      <div v-if="allowAssigment">
        <div class="button secondary" @click="toggleAssignment()">
          <h1 class="form-button purple">{{lesson.hasAssignment ? 'Assignment' : 'Add Assignment'}}</h1>
        </div>
        <transition v-if="lesson.hasAssignment" name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">
          <div class="assignment w-form">
            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="form-3 border-none">
              <div class="div-block-53">
                <div class="text-block-3">Required</div>
                <div class="div-block-54 cursor-pointer" :class="{'in-active': !isAssignReq}" @click="assignmentRequired()">
                  <WhiteCheck v-if="isAssignReq" class="check" />
                </div>
              </div>
              <quill-editor v-model="lesson.teacherAssignment.guidelines" :options="config" ref="myQuillEditor">
              </quill-editor>
              <FileUpload />
              <input type="submit" value="Submit" data-wait="Please wait..." class="submit-button-2 w-button"></form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <!-- <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div> -->
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import WhiteCheck from "@/assets/White-Check.svg";
import CheckLine from "@/assets/check-line.svg";
import FileUpload from "@/components/CreateClasss/FileUpload";
import Cross from "@/assets/x.svg";

export default {
  components: {
    FileUpload,
    WhiteCheck,
    CheckLine,
    Cross
  },
  props: {
    lesson: Object,
    lessonHeading: String,
    allowAssigment: Boolean,
    isVideoSelected: Boolean
  },
  data() {
    return {
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
    chooseFiles() {
      document.getElementById("attachFiles").click();
    },
    removeSelectedFile() {
      if (document.getElementById("attachFiles")) {
        document.getElementById("attachFiles").value = "";
      }
      this.videoThumbnail = null;
      this.lesson.toUpload.video = null;
      this.lesson.toUpload.thumbnail = null;
      
    },
    toggleAssignment() {
      this.lesson.hasAssignment = !this.lesson.hasAssignment;
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
          // console.log(image);
          this.videoThumbnail = image;
          this.lesson.toUpload.thumbnail = new File(
            [image],
            `lesson${this.lesson.lessonNumber}.png`
          );
          // uploading video......
          // this.uploadVideo();
          var success = image.length > 100000;
          if (success) {
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
      this.isAssignReq = !this.lesson.teacherAssignment.isrequired;
      this.lesson.teacherAssignment.isrequired = this.isAssignReq;
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
</style>
