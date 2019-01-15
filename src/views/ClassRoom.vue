<template>
<div>
<div class="page-section" v-if="currentClass && currentClass.trailer">
    <div class="flex-row dashboard _1">
      <div class="flexcolumn triple">
        <div class="vert-justify-start-align-left classroom">
          <div class="_10px-botttom-margin">
            <h1 class="heading-42 _20px-bottom-margin">{{currentClass.title}}</h1>
          </div>
          <div class="_20px-bottom-margin">
            <h2 class="heading-6">{{currentClass.category}}</h2>
          </div>
        </div>
      </div>
      <div class="flexcolumn classroom _1">
        <div class="align-right-justify-start classroom">
          <div class="align-right-justify-start classroom">
            <div class="div-block-128">
              <div class="_10px-botttom-margin">
                <h1 class="heading-2">{{currentClass.instructor.fullName}}</h1>
              </div>
              <h2 class="heading-6 center">Instructor</h2>
            </div>
            <div class="div-block-127">
              <!-- <div class="profile-picture _50"></div> -->
              <div class="profile-picture _50">
            <user-thumbnail :user="currentClass.instructor" :myClass="'link-block-3 w-inline-block profile-pic'" />

          <!-- <img :src="profilePic" class="link-block-3 w-inline-block profile-pic" /> -->
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-row dashboard _1">
      <div class="flexcolumn triple">
        <div class="trailer">
          <div class="play">
            <img src="../assets/play.svg" width="16" alt="">
            <ProdeusPlayer :videoUrl="videoUrl" :ended="videoEnded" />
            </div>
        </div>
       <class-discussion :classId="id" :lesson="currentLesson" />
      </div>
      <div class="flexcolumn classroom">
        <div class="card">
          <div class="div-block-125">
            <div class="flex-space-between">
              <h2 class="heading-6 white">Lessons</h2>
              <div class="text-block white">{{currentClass.totalDuration | duration }}</div>
            </div>
          </div>
          <div class="div-block-124">
            <div class="lessonblock" v-for="(lesson, index) in currentClass.lessons" :key="lesson._id" :class="{active: index === currentLessonIndex, white: index !== currentLessonIndex}" @click="currentLessonIndex = index">
              <div class="div-block-9">
                <div class="div-block-7 classroom">
                  <div class="_5px-bottom-margin">
                    <h2 class="heading-6" :class="{white: index === currentLessonIndex}">Lesson {{lesson.lessonNumber}}</h2>
                  </div>
                  <h1 class="heading-4" :class="{white: index === currentLessonIndex}"> {{lesson.title.length <= 33 ?lesson.title : lesson.title.slice(30)+'...'}}</h1>
                </div>
              </div>
              <div class="div-block-8">
                <div class="text-block" :class="{white: index === currentLessonIndex}">{{lesson.secondsDuration | duration }}</div>
                <div v-if="lesson.teacherAssignment">
                <img v-if="index === currentLessonIndex" src="../assets/assignment_required_active.svg" height="16" alt="" class="image-2">
                <img v-else src="../assets/Assignment.svg" height="16" alt="" class="image-2">
                </div>
                </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="_30px-pad-wrap _10px-botttom-margin">
            <div class="_20px-bottom-margin">
              <div class="flex-space-between">
                <h2 class="heading-6 grey">Lesson {{currentLesson.lessonNumber}}</h2>
                <div v-if="currentLesson.teacherAssignment" class="text-block-6">Assignment {{currentLesson.teacherAssignment.isrequired ? 'Required' :'Optional'}}</div>
              </div>
            </div>
            <div class="_20px-bottom-margin">
              <h1 class="heading-40 left-align left">{{currentLesson.title}}</h1>
            </div>
            <div class="div-block-80">
              <div class="_10px-botttom-margin">
                <h1 class="heading-31">Lesson Description</h1>
              </div>
              <div class="_20px-bottom-margin">
                <p class="paragraph-6" v-html="currentLesson.description">
                  </p>
              </div>
              <div v-if="currentLesson.teacherAssignment">
              <div class="_10px-botttom-margin">
                <h1 class="heading-31">Assignement Guidelines</h1>
              </div>
              <div class="_20px-bottom-margin">
                <p class="paragraph-6" v-html="currentLesson.teacherAssignment.guidelines">
                  </p>
              </div>
              <div class="_10px-botttom-margin">
                <h1 class="heading-31">Attached Files</h1>
              </div>
              <div class="div-block-82" v-for="attach in currentLesson.teacherAssignment.media" :key="attach._id">
                <img src="../assets/file.svg" height="15" alt="" class="image-11">
                <div class="div-block-81">
                  <a class="link-2 cursor-pointer" :href="url(attach.originalName)" :download="attach.originalName">{{attach.originalName}}</a>
                  <div class="text-block-6">346KB</div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="div-block-126" v-if="currentLesson.teacherAssignment">
            <a href="#" @click.stop="openSubmitAssignment" class="link">Submit Assignment</a>
          </div>
        </div>
        <div class="card"><img src="../assets/fortune.jpg" alt="" class="image-31">
          <div class="_20px-pad-wrapper">
            <div class="profile-picture post"></div>
            <div class="_20px-margin">
              <h2 class="heading-6 center project">Art &amp; Design History</h2>
            </div>
            <div class="_30px-bottom-margin">
              <h1 class="heading-4 center">A Brief History of Typography &amp; Handlettering</h1>
            </div>
            <div class="flex-space-around"><img src="../assets/heart.svg" height="16" alt=""><img src="../assets/reblog.svg" height="20" alt=""><img src="../assets/comment.svg" height="16" alt=""><img src="../assets/share.svg" height="16" alt=""></div>
          </div>
        </div>
        <div class="card"><img src="../assets/fortune.jpg" alt="">
          <div class="_20px-pad-wrapper">
            <div class="profile-picture post"></div>
            <div class="_20px-margin">
              <h2 class="heading-6 center project">Art &amp; Design History</h2>
            </div>
            <div class="_30px-bottom-margin">
              <h1 class="heading-4 center">A Brief History of Typography &amp; Handlettering</h1>
            </div>
            <div class="flex-space-around"><img src="../assets/heart.svg" height="16" alt=""><img src="../assets/reblog.svg" height="20" alt=""><img src="../assets/comment.svg" height="16" alt=""><img src="../assets/share.svg" height="16" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <submit-assignment v-if="showSubmitAssignment" />
    <Loading :color="'#8446e8'" :active.sync="!currentClass.trailer" :is-full-page="true"></Loading>
</div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import Loading from "vue-loading-overlay";
import ProdeusPlayer from "@/components/Video/ProdeusPlayer.vue";
import ClassDiscussion from "../components/ClassRoom/ClassDiscussion";
import SubmitAssignment from "../components/ClassRoom/SubmitAssignment";

export default {
  name: "ClassRoom",
  props: ["id"],
  components: {
    Loading,
    ProdeusPlayer,
    ClassDiscussion,
    SubmitAssignment
  },
  data() {
    return {
      currentLessonIndex: 0
    };
  },
  created() {
    this.$store.dispatch("classes/getClass", this.id);
    this.$store.dispatch("classes/getWatchedLessons");
  },

  computed: {
    currentLesson() {
      return this.currentClass.lessons[this.currentLessonIndex];
    },
    videoUrl() {
      const id = this.currentLesson.media;
      return process.env.VUE_APP_API_BASE_URL + "/media/" + id;
    },
    profilePic() {
      if (this.currentClass.instructor.img) {
        return (
          process.env.VUE_APP_API_BASE_URL +
          "/media/" +
          this.currentClass.instructor.img.id
        );
      } else if (
        this.currentClass.instructor.facebook &&
        this.currentClass.instructor.facebook.img
      ) {
        return this.currentClass.instructor.facebook.img;
      } else if (
        this.currentClass.instructor.google &&
        this.currentClass.instructor.google.img
      ) {
        return this.currentClass.instructor.google.img;
      } else {
        return null;
      }
    },
    ...mapGetters({
      currentClass: "classes/currentClass"
    }),
    ...mapState({
      watchedLessons: state => state.classes.watchedLessons,
      showSubmitAssignment: state => state.classes.showSubmitAssignment
    })
  },
  methods: {
    openSubmitAssignment() {
      this.$store.dispatch("classes/setCurretLesson", {
        classId: this.currentClass._id,
        lessonId: this.currentLesson._id,
        assignmentNumber: this.currentLesson.assignmentNumber,
        currentLessonIndex: this.lessonIndex
      });
      this.$store.dispatch("classes/setShowSubmitAssignment", true);
    },
    downloadFile(file) {
      let link = document.createElement("a");
      link.href =
        process.env.VUE_APP_API_BASE_URL + "/media/" + file.originalName;
      link.setAttribute("download", file.originalName);
      link.click();
    },
    url(id) {
      return process.env.VUE_APP_API_BASE_URL + "/media/" + id;
    },
    videoEnded() {
      let lessonIndex = this.watchedLessons.findIndex(
        x => x.classId === this.id
      );
      let lessonData =
        lessonIndex > -1
          ? this.watchedLessons[lessonIndex].watchedLessons
          : lessonIndex;
      if (
        lessonIndex > -1 &&
        lessonsData.indexOf(this.currentLesson._id) > -1
      ) {
        this.$store
          .dispatch("classes/watchedLesson", {
            classId: this.id,
            lessonId: this.currentLesson._id
          })
          .then(
            res => {
              // console.log(res);
            },
            err => {
              console.error(err);
            }
          );
      }
    }
  }
};
</script>
