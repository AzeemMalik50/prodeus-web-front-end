<template>
  <div>
  <div class="modal-wrapper" @click.self="closeDialog()">
    <div class="_100-vh" @click.self="closeDialog()">
      <div data-duration-in="300" data-duration-out="100" class="tabs-2 w-tabs">
        <div class="class-progress-horiz w-tab-menu">
          <a data-w-tab="Tab 1" class="tab-link-tab-1 w-inline-block w-tab-link" @click="changeTab('1')"
          :class="{'w--current': selectedTab=='1'}">
            <div class="div-block-40" :class="{'inactive': selectedTab !=='1'}">
              <div class="text-block-2" :class="{'white': selectedTab=='1'}">1</div>
            </div>
            <div >Class info</div>
          </a>
          <a data-w-tab="Tab 2" class="tab-link-tab-2-2 w-inline-block w-tab-link" @click="changeTab('2')"
          :class="{'w--current': selectedTab=='2'}">
             <div class="div-block-40" :class="{'inactive': selectedTab !=='2'}">
              <div class="text-block-2" :class="{'white': selectedTab=='2'}">2</div>
            </div>
            <div>Curriculum</div>
          </a>
          <a data-w-tab="Tab 3" class="tab-link-tab-3 w-inline-block w-tab-link" @click="changeTab('3')"
          :class="{'w--current': selectedTab=='3'}">
            <div class="div-block-40 inactive">
              <div class="text-block-2">3</div>
            </div>
            <div>Final</div>
          </a>
        </div>
        <div class="w-tab-content">
            <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">
          <div data-w-tab="Tab 1" class="w-tab-pane" v-if="selectedTab=='1'" :key="selectedTab"
          :class="{'w--tab-active': selectedTab=='1'}">
            <div class="add-class-block">
              <!-- <div class="div-block-56">
                <h1 class="heading-4 white">1</h1>
              </div> -->
              <div class="_40-side-padding">
                <div class="_30-px-top-bottom">
                  <h1 class="heading-4">Class info</h1>
                </div>
              </div>
              <div class="_40-side-padding">
                <div class="w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" class="form">
                    <div class="_30px-bottom-margin">
                      <input type="text" class="form-text w-input" v-model="newClass.title" maxlength="256" name="Class-title-2" data-name="Class Title 2" placeholder="Title" id="Class-title-2" required=""></div>
                    <div class="_30px-bottom-margin">
                      <quill-editor v-model="newClass.aboutClass" :options="config" ref="myQuillEditor">
                      </quill-editor>
                    </div>
                    <div class="_30px-bottom-margin">
                      <select id="field-2" name="field-2" v-model="newClass.category" required="true" data-name="Field 2" class="form-text w-select">
                        <option  value="">Select a category</option>
                        <option v-for="catg in allCategories" :key="catg.id" :value="catg.name">
                          {{catg.name}}</option>
                        </select>

                        </div>
                    <div class="_30px-bottom-margin form-text chip-field">

                 <div class="div-block-102 chip" v-for="(skill, index) in newClass.skillTags" :key="skill">
                <div class="tag-text">{{skill}}</div>
                <span @click="removeSkill(index)" class="image-23" >
                <img src="../assets/x.svg" class="cross"/>
                </span>
                </div>

                      <input type="text" @keyup.enter.prevent="addSkill();" v-model="skill" class="chip-input w-input" maxlength="256" name="skills-2" data-name="Skills 2" placeholder="Topics" id="skills-2" required="">
                      </div>
                      <!-- <input type="submit" value="Submit" data-wait="Please wait..." class="submit-button w-button"> -->
                    <div class="difficulty">
                      <div class="_20px-bottom-margin">
                        <h1 class="heading-18 center">Select Difficulty</h1>
                      </div>
                      <div class="difficult-buttons">
                        <div class="difficulty-button" v-for="dif in difficulties" :key="dif" @click="setDifficulty(dif)">
                          <div class="heading-5 button" :class="{'unselected': newClass.difficulty != dif, 'selected':newClass.difficulty != dif}">{{dif}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="_30px-bottom-margin"></div>
                  </form>
                  <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <!-- <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="align-right">
              <div class="button" @click="changeTab('2', true)" :class="{inactive: !isClassInfoReady}">
                <h1 class="form-button">Next</h1>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 2" class="w-tab-pane" v-if="selectedTab=='2'" :key="selectedTab"
          :class="{'w--tab-active': selectedTab=='2'}">
            <div class="add-class-block">
              <div class="_40-side-padding">
                <div class="_30-px-top-bottom">
                  <h1 class="heading-4">Curriculum</h1>
                </div>
              </div>
              <div class="curriculum-block">
                <div class="div-block-46" >
                  <div class="lesson-container cursor-pointer" @click="toTrailer()">
                    <h1 class="heading-22" :class="{'complete': newClass.trailer.completed}">Trailer</h1>
                    <img src="../assets/check-line.svg" class="image-8 check" v-if="newClass.trailer.completed" />
                    </div>
                  <div class="lesson-container" v-for="(lesson, index) in newClass.lessons" :key="index" @click="toLesson(index)">
                    <h1 class="heading-22 cursor-pointer" :class="{'complete':lesson.completed}">Lesson {{index + 1}}</h1>
                    <img src="../assets/check-line.svg" class="image-8 check" v-if="lesson.completed" />
                    <img src="../assets/Group 5677.svg" @click.prevent.stop="removeLesson(index)" class="lesson-remove" v-if="index > 4" />
                    </div>
                     <div class="lesson-container cursor-pointer" @click="addLesson();">
                    <h1 class="heading-22 add-lesson">+ Add Lesson</h1>
                  </div>
                </div>
                <!-- lesson component-->
                <lesson-form v-show="isTrailer" :lesson="newClass.trailer" :lessonHeading="lessonHeading" :isVideoSelected="isVideoSelected" :allowAssigment="False"/>
                <lesson-form v-show="!isTrailer && lessonIndex === index" v-for="(lesson, index) in newClass.lessons" :key="index" :lesson="newClass.lessons[index]" :lessonHeading="lessonHeading" :isVideoSelected="isVideoSelected" :allowAssigment="True"/>
              </div>
              <div class="_40-side-padding" v-if="lessonIndex !== newClass.lessons.length -1 || currentLesson().toUpload.isUploading">
                <div class="_20-px-top-bottom-padding">
                  <div class="align-right">
                    <div class="button outline inactive" v-if="currentLesson().toUpload.isUploading || (currentLesson().teacherAssignment && currentLesson().teacherAssignment.isUploading)">
                      <h1 class="form-button outline"> Uploading... {{currentLesson().uploadPercentage}}%</h1>
                    </div>
                     <div v-else class="button outline" @click="completeLesson()">
                      <h1 class="form-button outline">Next Lesson</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="_40-side-padding" v-else>
                <div class="_20-px-top-bottom-padding">
                  <div class="align-right">
                     <div class="button outline" @click="addLesson()">
                      <h1 class="form-button outline">Add Lesson</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="align-right">
               <div class="button inactive" v-if="!isAllLessonsReady">
                <h1 class="form-button"> Next </h1>
              </div>
              <div  v-else @click="changeTab('3', true)" class="button">
                <h1 class="form-button"> Next</h1>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 3" class="w-tab-pane" v-if="selectedTab=='3'" :key="selectedTab"
          :class="{'w--tab-active': selectedTab=='3'}">
            <div class="add-class-block">

              <div class="_40-side-padding">
                <div class="_30-px-top-bottom">
                  <h1 class="heading-4">Final Project</h1>
                </div>
              </div>
                <div class="_20px-pad-wrapper">

              <div class="_40-side-padding" >
                <div class="assignment w-form">
                      <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="form-3 border-none">
                    <div class="_30px-bottom-margin">
                      <input type="text" class="form-text w-input" v-model="newClass.finalProject.title" maxlength="256" name="Final-Title-2" data-name="Final Title 2" placeholder="Title" id="Final-Title-2" required=""></div>
                      <quill-editor v-model="newClass.finalProject.guidelines" :options="config" ref="myQuillEditor">
                      </quill-editor>
                        <FileUpload :attachObject="newClass.finalProject" />
                        <input type="submit" value="Submit" data-wait="Please wait..." class="submit-button-2 w-button"></form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <!-- <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div> -->
                    </div>
              </div>
                </div>
            </div>
            <div class="_40px-bottom-margin">
              <div class="button" @click="closeAddClass()" :class="{inactive: !isClassReady}" v-if="newClass._id">
                <h1 class="form-button">Save Changes</h1>
              </div>
               <div v-else class="button" @click="closeAddClass()" :class="{inactive: !isClassReady}">
                <h1 class="form-button">Preview &amp; Publish</h1>
              </div>
            </div>
          </div>
            </transition>
        </div>
      </div>
    </div>
  </div>
   <loading :color="'#8446e8'" :active.sync="isUploading"
        :is-full-page="true"></loading>
  </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers, mapState } from "vuex";
import FileUpload from "../components/CreateClasss/FileUpload";
import LessonForm from "../components/CreateClasss/LessonForm";
import Loading from "vue-loading-overlay";
import axios from "axios";
// import "vue-loading-overlay/dist/vue-loading.css";
const teacherAssignment = {
  guidelines: "",
  isrequired: false,
  media: [],
  files: {},
  isUploading: false
};
const newLesson = {
  _id: "",
  title: "",
  description: "",
  lessonThumbnail: "",
  toUpload: {
    video: "",
    thumbnail: "",
    isUploading: false
  },
  media: "",
  img: "",
  secondsDuration: 0,
  completed: false,
  lessonNumber: 0,
  hasAssignment: false,
  isUploading: false,
  isError: false,
  uploadPercentage: 0
};

export default {
  components: {
    FileUpload,
    LessonForm,
    Loading
  },

  data() {
    return {
      skill: "",
      currentLessonType: "trailer",
      isVideoSelected: false,
      selectedTab: "1",
      hasAssignment: false,
      isUploading: false,
      True: true,
      False: false,
      difficulties: ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
      isChecked: true,
      files: [],
      lessonIndex: 0,
      config: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "link"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"]
          ]
        }
      },
      currentForm: Object,
      newClass: {
        _id: "",
        title: "",
        aboutClass: "",
        skillTags: [],
        difficulty: "BEGINNER",
        category: "",
        img: "",
        lessons: [],
        trailer: {
          title: "",
          description: "",
          lessonThumbnail: "",
          toUpload: {
            video: "",
            thumbnail: "",
            isUploading: false
          },
          secondsDuration: 0,
          completed: false,
          lessonNumber: 0,
          img: "",
          media: "",
          isUploading: false,
          isError: false,
          uploadPercentage: 0
        },
        finalProject: {
          title: "",
          guidelines: "",
          media: [],
          files: {}
        }
      }
    };
  },
  created() {
    this.$store.dispatch("categories/getCategories");
    if (
      this.editClass &&
      this.editClass.currentClass &&
      this.editClass.currentClass._id
    ) {
      this.isUploading = true;
      this.$store
        .dispatch("classes/getClassById", this.editClass.currentClass._id)
        .then(
          response => {
            //  editClass = response.data;
            this.$store.dispatch("classes/setEditClass", {
              lessonIndex: 0,
              currentClass: JSON.parse(JSON.stringify(response.data))
            });
            this.resetEditClass();
            this.isUploading = false;
          },
          error => {
            console.error(error);
          }
        );
    } else {
      this.addLessson(5);
    }
    window.addEventListener("keyup", this.closeClassModal);
  },
  watch: {
    newClass: {
      handler(val) {
        const lastIndex = this.currentLessonIndex();
        // set trailer image to class image
        this.newClass.img = this.newClass.trailer.img;
        if (lastIndex > -1) {
          this.lessonIndex = lastIndex;
        }

        for (let i = 0; i < this.newClass.lessons.length; i++) {
          if (this.checkIsLessonReady(this.newClass.lessons[i])) {
            this.newClass.lessons[i].completed = true;
          }
        }
        if (this.checkIsLessonReady(this.newClass.trailer)) {
          this.newClass.trailer.completed = true;
        }
      },
      deep: true
    }
  },
  methods: {
    resetEditClass() {
      for (let i = 0; i < this.editClass.currentClass.lessons.length; i++) {
        this.editClass.currentClass.lessons[i] = Object.assign(
          JSON.parse(JSON.stringify(newLesson)),
          this.editClass.currentClass.lessons[i]
        );
        this.editClass.currentClass.lessons[i].completed = true;
        if (this.editClass.currentClass.lessons[i].teacherAssignment) {
          this.editClass.currentClass.lessons[
            i
          ].teacherAssignment = Object.assign(
            JSON.parse(JSON.stringify(teacherAssignment)),
            this.editClass.currentClass.lessons[i].teacherAssignment
          );
        }
      }
      this.newClass = Object.assign(
        JSON.parse(JSON.stringify(this.newClass)),
        this.editClass.currentClass
      );
      if (this.editClass.lessonIndex) {
        this.lessonIndex = this.editClass.lessonIndex;
        this.selectedTab = "2";
      } else {
        this.lessonIndex = 0;
        this.selectedTab = "1";
      }
      // this.lessonIndex = this.editClass.lessonIndex;
      this.newClass.trailer.completed = true;

      this.currentLessonType = "lessons";
    },
    removeLesson(lessonIndex) {
      if (this.lessonIndex === lessonIndex) {
        this.lessonIndex = lessonIndex - 1;
      }
      this.newClass.lessons.splice(lessonIndex);
    },
    toLesson(index) {
      // if (this.newClass.lessons[index].completed) {
      this.currentLessonType = "lessons";
      this.lessonIndex = index;
      // }
    },
    toTrailer() {
      // if (this.newClass.trailer.completed) {
      this.currentLessonType = "trailer";
      //  }
    },
    addAssignment() {
      if (
        this.newClass.lessons[this.lessonIndex].hasAssignment &&
        !this.newClass.lessons[this.lessonIndex].teacherAssignment
      ) {
        this.newClass.lessons[this.lessonIndex][
          "teacherAssignment"
        ] = JSON.parse(JSON.stringify(teacherAssignment));
      } else {
        let lesson = this.newClass.lessons[this.lessonIndex];
        delete lesson.teacherAssignment;
      }
    },
    addSkill() {
      if (this.skill && this.newClass.skillTags.indexOf(this.skill) === -1) {
        this.newClass.skillTags.push(this.skill);
        this.skill = "";
      }
    },
    removeSkill(index) {
      this.newClass.skillTags.splice(index, 1);
    },
    addLessson(count) {
      for (var i = 0; i < count; i++) {
        newLesson.lessonNumber = i + 1;
        this.newClass.lessons.push(JSON.parse(JSON.stringify(newLesson)));
      }
    },
    changeTab(tab, checkForm) {
      if (!checkForm) {
        this.selectedTab = tab;
      }
      if (tab === "2" && this.isClassInfoReady && checkForm) {
        this.selectedTab = tab;
      }
      if (tab === "3" && checkForm) {
        /*  Complete last lesson  */
        this.completeLesson(tab);
      }
    },
    setDifficulty(dif) {
      this.newClass.difficulty = dif;
    },
    clearLessonThumbnails() {
      for (let i = 0; i < this.newClass.lessons.length; i++) {
        this.newClass.lessons[i].lessonThumbnail = null;
        this.newClass.lessons[i].toUpload.thumbnail = null;
        this.newClass.lessons[i].toUpload.video = null;
        delete this.newClass.lessons[i].createdAt;
        delete this.newClass.lessons[i].updatedAt;
      }
      this.newClass.trailer.lessonThumbnail = null;
      if (this.newClass.trailer.toUpload) {
        this.newClass.trailer.toUpload.video = null;
        this.newClass.trailer.toUpload.thumbnail = null;
      }
    },
    closeAddClass() {
      /*  final project submittion and call create-classs api */
      if (this.isClassReady) {
        this.clearLessonThumbnails();
        if (this.newClass._id) {
          delete this.newClass.createdAt;
          delete this.newClass.updatedAt;

          this.$store.dispatch("classes/updateClass", this.newClass).then(
            response => {
              this.$store.dispatch("changeCreateClass", false);
            },
            error => commit("failure", error)
          );
        } else {
          this.$store.dispatch("classes/createClass", this.newClass);
          this.$store.dispatch("changeCreateClass", false);
        }
        /*  action to close create-class-form */
      }
    },
    closeClassModal(e) {
      /*  press escape to close modal */

      if (e.keyCode === 27) {
        this.closeDialog();
      }
    },
    closeDialog() {
      if (confirm("Are you sure to exit create class!")) {
        this.$store.dispatch("changeCreateClass", false);
      }
    },
    handelLessonChanges() {
      const refData = this.currentLesson();
    },
    completeLesson(lastTab) {
      /*  video upload form data */
      if (document.getElementById("videoFile")) {
        document.getElementById("videoFile").value = "";
      }
      if (document.getElementById("attachFiles")) {
        document.getElementById("attachFiles").value = "";
      }
      const refData = this.currentLesson();
      if (this.checkIsLessonReady(refData)) {
        // this.isUploading = true;
        if (this.isTrailer) {
          this.currentLessonType = "lessons";
          this.lessonIndex = 0;
        } else if (this.lessonIndex < this.newClass.lessons.length - 1) {
          this.lessonIndex += 1;
        }
        refData.completed = true;
        if (lastTab) {
          this.selectedTab = lastTab;
        }
        // let formData = new FormData();
        // formData.append("thumbnail", refData.toUpload.thumbnail);
        // formData.append("video", refData.toUpload.video);

        /*testing purpose */
        // refData.media = "5bef63cf6c632510682052a6";
        // refData.img = "5bef63cf6c632510682052a7";
        // refData.completed = true;
        // this.isUploading = false;
        // this.isVideoSelected = false;
        // refData.isUploading = false;
        // if (lastTab) {
        //   this.selectedTab = lastTab;
        // }

        /* Assignment files  */
        // let requests = [this.$store.dispatch("classes/uploadVideo", formData)];
        // if (
        //   refData.teacherAssignment &&
        //   refData.teacherAssignment.files &&
        //   refData.teacherAssignment.files.length
        // ) {
        //   let assignment = new FormData();
        //   for (let i = 0; i < refData.teacherAssignment.files.length; i++) {
        //     assignment.append(
        //       "prodeusFiles",
        //       refData.teacherAssignment.files[i]
        //     );
        //   }
        //   requests.push(
        //     this.$store.dispatch("classes/uploadFiles", assignment)
        //   );
        // }
        // axios.all(requests).then(
        //   axios.spread((videos, assigns) => {
        //     refData.media = videos.data.video._id;
        //     refData.img = videos.data.thumbnail._id;
        //     if (assigns) {
        //       refData.teacherAssignment.media = assigns.data;
        //     }
        //     refData.completed = true;
        //     this.isUploading = false;
        //     this.isVideoSelected = false;
        //     refData.isUploading = false;
        //     if (document.getElementById("attachFiles")) {
        //       document.getElementById("attachFiles").value = "";
        //     }
        //     if (lastTab) {
        //       this.selectedTab = lastTab;
        //     }
        //   })
        // );
      } else {
        refData.isError = true;
      }
    },
    currentLesson() {
      if (this.isTrailer) {
        return this.newClass.trailer;
      } else {
        return this.newClass.lessons[this.currentLessonIndex()];
      }
    },
    currentLessonIndex() {
      return this.lessonIndex;
      // return this.newClass.lessons.findIndex(lesson => !lesson.completed);
    },
    addLesson() {
      newLesson.lessonNumber = newLesson.lessonNumber + 1;
      this.newClass.lessons.push(JSON.parse(JSON.stringify(newLesson)));
    },
    checkIsLessonReady(refData) {
      if (refData) {
        let res =
          refData.title && refData.description && refData.media && refData.img;
        if (refData.hasAssignment && refData.teacherAssignment) {
          res = res && refData.teacherAssignment.guidelines;
        }
      } else {
        res = false;
      }
      return res;
    }
  },
  computed: {
    ...mapState({
      allCategories: state => state.categories.allCategories,
      editClass: state => state.classes.editClass
    }),
    isClassInfoReady() {
      return (
        this.newClass.title &&
        this.newClass.aboutClass &&
        this.newClass.difficulty &&
        this.newClass.category &&
        this.newClass.skillTags.length
      );
    },
    isLessonsReady() {
      return this.newClass.lessons[this.newClass.lessons.length - 1].completed;
    },
    isFinalProjectReady() {
      return (
        this.newClass.finalProject.title &&
        this.newClass.finalProject.guidelines
      );
    },
    lessonHeading() {
      if (this.isTrailer) {
        return "Trailer";
      } else {
        const index = this.currentLessonIndex() + 1;
        return `Lesson ${index}`;
      }
    },
    isTrailer() {
      return this.currentLessonType === "trailer";
    },
    isLesson() {
      return this.currentLessonType === "lessons";
    },
    isAllLessonsReady() {
      let lessonsState = true;
      for (let i = 0; i < this.newClass.lessons.length; i++) {
        if (!this.checkIsLessonReady(this.newClass.lessons[i])) {
          lessonsState = false;
          return;
        }
      }
      let trailerState = this.checkIsLessonReady(this.newClass.trailer);
      return trailerState && lessonsState;
    },
    isClassReady() {
      return (
        this.isClassInfoReady &&
        this.isAllLessonsReady &&
        this.isFinalProjectReady
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.w-select {
  background-image: none !important;
}
.difficulty-button,
.button {
  cursor: pointer;
}
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
  &.active {
    background-color: #8446e8;
  }
}
.tab-link-tab-1 {
  color: rgba(0, 0, 0, 0.5);
}
.done {
  background-color: #c8c8c8;
}
.current {
  background-color: #8446e8;
}
.button {
  &.inactive {
    cursor: not-allowed;
  }
}
.chip-field {
  flex-wrap: wrap;
  min-height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px 10px;
  -webkit-box-flex: 0;
  -ms-flex: 0 auto;
  flex: 0 auto;
  border-style: none;
  border-bottom-width: 1px;
  border-bottom-color: #8446e8;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #f4f4f5;
  color: rgba(0, 0, 0, 0.5);
}
.chip {
  margin-top: 10px;
  margin-left: 1px;
  position: relative;
}
.chip-input {
  min-width: 60px;
  position: relative;
  flex: 1;
  display: block;
  width: 100%;
  height: auto;
  padding: 8px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
  border: none;
  background-color: #f4f4f5;
}
.cross {
  height: 20px;
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
.complete {
  cursor: pointer;
}
.lesson-remove {
  margin-left: 10px;
}
</style>
