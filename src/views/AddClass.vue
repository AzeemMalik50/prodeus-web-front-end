<template>
  <div>
  <div class="modal-wrapper">
    <div class="_100-vh">
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
                        <option v-for="catg in allCategories" :key="catg.id" :value="catg.name +' ' + catg.metaCategory">
                          {{catg.name +' ' + catg.metaCategory}}</option>
                        </select>
                   
                        </div>
                    <div class="_30px-bottom-margin">
                      <input type="text" class="form-text w-input" maxlength="256" name="skills-2" data-name="Skills 2" placeholder="Topics" id="skills-2" required="">
                      </div><input type="submit" value="Submit" data-wait="Please wait..." class="submit-button w-button">
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
                <div class="div-block-46">
                  <div class="lesson-container">
                    <h1 class="heading-22" :class="{'complete': newClass.trailer.completed}">Trailer</h1>
                    <CheckLine class="image-8 check" v-if="newClass.trailer.completed" />
                    </div>
                  <div class="lesson-container" v-for="(lesson, index) in newClass.lessons" :key="index">
                    <h1 class="heading-22" :class="{'complete':lesson.completed}">Lesson {{index + 1}}</h1>
                    <CheckLine class="image-8 check" v-if="lesson.completed" />                    
                    </div>
                     <div class="lesson-container cursor-pointer" @click="addLesson();">
                    <h1 class="heading-22 add-lesson">+ Add Lesson</h1>
                  </div>
                </div>
                <!-- lesson component-->
                <lesson-form v-if="!newClass.trailer.completed" :lesson="newClass.trailer" :lessonHeading="lessonHeading" :isVideoSelected="isVideoSelected" :allowAssigment="False"/>
                <lesson-form v-else :lesson="newClass.lessons[lessonIndex]" :lessonHeading="lessonHeading" :isVideoSelected="isVideoSelected" :allowAssigment="True"/>
              </div>
              <div class="_40-side-padding" v-if="lessonIndex !== newClass.lessons.length -1">
                <div class="_20-px-top-bottom-padding">
                  <div class="align-right">
                    <div class="button outline" @click="completeLesson()">
                      <h1 class="form-button outline"> {{newClass.trailer.isUploading ? 'Uploading...' : 'Next Lesson'}}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="align-right">
              <div  @click="changeTab('3', true)" class="button" :class="{inactive: lessonIndex !== newClass.lessons.length -1}">
                <h1 class="form-button"> {{newClass.trailer.isUploading ? 'Uploading...' : 'Next'}}</h1>
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
                        <FileUpload />
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
              <div class="button" @click="closeAddClass()" :class="{inactive: !isFinalProjectReady}">
                <h1 class="form-button">Preview &amp; Publish</h1>
              </div>
            </div>
          </div>
            </transition>
        </div>
      </div>
    </div>
  </div>
   <loading :color="'#8446e8'" :active.sync="newClass.trailer.isUploading" 
        :is-full-page="true"></loading>
  </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from "vuex";
import CheckLine from "../assets/check-line.svg";
import WhiteCheck from "../assets/White-Check.svg";
import FileUpload from "../components/CreateClasss/FileUpload";
import LessonForm from "../components/CreateClasss/LessonForm";
const { mapState, mapActions } = createNamespacedHelpers("categories");
import Loading from "vue-loading-overlay";
// import "vue-loading-overlay/dist/vue-loading.css";
const teacherAssignment = {
  guidelines: "",
  media: [],
  isrequired: false
};
const newLesson = {
  title: "",
  description: "",
  toUpload: {
    video: "",
    thumbnail: ""
  },
  media: "",
  img: "",
  secondsDuration: 0,
  completed: false,
  lessonNumber: 0,
  hasAssignment: false,
  isUploading: false
};

export default {
  components: {
    CheckLine,
    WhiteCheck,
    FileUpload,
    LessonForm,
    Loading
  },

  data() {
    return {
      isVideoSelected: false,
      selectedTab: "1",
      content: "<h2>I am Example</h2>",
      hasAssignment: false,
      isUploading: false,
      True: true,
      False: false,
      difficulties: ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
      difficulty: "BEGINNER",
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
          toUpload: {
            video: "",
            thumbnail: ""
          },
          secondsDuration: 0,
          completed: false,
          lessonNumber: 0,
          img: "",
          media: "",
          isUploading: false
        },
        finalProject: {
          title: "",
          guidelines: ""
        }
      }
    };
  },
  created() {
    this.$store.dispatch("categories/getCategories");
    this.addLessson(2);
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
        if (this.newClass.lessons[this.lessonIndex].hasAssignment) {
          this.newClass.lessons[this.lessonIndex][
            "teacherAssignment"
          ] = JSON.parse(JSON.stringify(teacherAssignment));
        } else {
          let lesson = this.newClass.lessons[this.lessonIndex];
          delete lesson.teacherAssignment;
        }
        const lastLessonIndex = this.newClass.lessons.length - 1;
        const lastLesson = this.newClass.lessons[lastLessonIndex];

        // if (lastLesson.title && lastLesson.description) {
        //   this.newClass.lessons[lastLessonIndex].completed = true;
        // } else {
        //   this.newClass.lessons[lastLessonIndex].completed = false;
        // }
      },
      deep: true
    }
  },
  methods: {
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
    closeAddClass() {
      /*  final project submittion and call create-classs api */
      if (this.isFinalProjectReady) {
        this.$store.dispatch("classes/createClass", this.newClass);
        /*  action to close create-class-form */

        this.$store.dispatch("changeCreateClass", false);
      }
    },
    closeClassModal(e) {
      /*  press escape to close modal */

      if (e.keyCode === 27) {
        if (confirm("Are you sure to exit create class!")) {
          this.$store.dispatch("changeCreateClass", false);
        }
      }
    },
    completeLesson(lastTab) {
      /*  video upload form data */
      const refData = this.currentLesson();
      this.isUploading = true;
      if (
        refData.title &&
        refData.description &&
        refData.toUpload.video &&
        refData.toUpload.thumbnail
      ) {
        let formData = new FormData();
        formData.append("thumbnail", refData.toUpload.thumbnail);
        formData.append("video", refData.toUpload.video);

        /*testing pupose */
        // refData.media = '5bef63cf6c632510682052a6';
        // refData.img = '5bef63cf6c632510682052a7';
        // refData.completed = true;
        // this.isUploading = false;
        // this.isVideoSelected = false;
        // refData.isUploading = false;
        // if (lastTab) {
        //   this.selectedTab = lastTab;
        // }

        this.$store
          .dispatch("classes/uploadFile", formData)
          .then(response => {
            refData.media = response.data.video._id;
            refData.img = response.data.thumbnail._id;
            refData.completed = true;
            this.isUploading = false;
            this.isVideoSelected = false;
            refData.isUploading = false;
            if (document.getElementById("attachFiles")) {
              document.getElementById("attachFiles").value = "";
            }
            if (lastTab) {
              this.selectedTab = lastTab;
            }
          })
          .catch(err => {
            console.error("FAILURE!!", err);
          });
      }
    },
    currentLesson() {
      if (!this.newClass.trailer.completed) {
        return this.newClass.trailer;
      } else {
        return this.newClass.lessons[this.currentLessonIndex()];
      }
    },
    currentLessonIndex() {
      return this.newClass.lessons.findIndex(lesson => !lesson.completed);
    },
    addLesson() {
      newLesson.lessonNumber = newLesson.lessonNumber + 1;
      this.newClass.lessons.push(JSON.parse(JSON.stringify(newLesson)));
    }
  },
  computed: {
    ...mapState({
      allCategories: state => state.allCategories
    }),
    isClassInfoReady() {
      return (
        this.newClass.title &&
        this.newClass.aboutClass &&
        this.newClass.difficulty &&
        this.newClass.category
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
      if (!this.newClass.trailer.completed) {
        return "Trailer";
      } else {
        const index = this.currentLessonIndex() + 1;
        return `Lesson ${index}`;
      }
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
</style>
