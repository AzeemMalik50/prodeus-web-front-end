<template>
  <div class="_20px-pad-wrapper">
    <div class="_100-percent-justify-start">
      <div class="_30px-bottom-margin">
        <div class="flex-space-between">
          <h1 class="heading-4">{{lessonHeading}}</h1>
          <div class="button top-padding">
            <h1 class="form-button">Upload Video</h1>
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

export default {
  components: {
    FileUpload,
    WhiteCheck,
    CheckLine
  },
  props: {
    lesson: Object,
    lessonHeading: String,
    allowAssigment: Boolean
  },
  data() {
    return {
      hasAssignment: false,
      isAssignReq:false,
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
     toggleAssignment() {
      this.lesson.hasAssignment = !this.lesson.hasAssignment;
    },
   assignmentRequired(){
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
  border: 2px solid #8446e8 ;
  
}
.in-active {
  background-color: #fff !important;
  }
</style>
