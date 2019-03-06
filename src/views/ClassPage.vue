<template>
  <div class="page-section">
    <div class="flex-row" v-if="currentClass.trailer">
      <div class="flexcolumn triple">
        <div class="card">
          <div class="_40px-pad-wrap">
            <div class="classpage-title">
              <h1 class="heading-1">{{currentClass.title}}</h1>
            </div>
            <div class="_20px-margin">
              <h2 class="heading-6 center">{{currentClass.category}}</h2>
            </div>
            <a  href="#" @click.prevent="enrollClass()" class="link">{{isEnrolled ? 'Enrolled': 'Enroll'}}</a>
            <div class="div-block-84">
              <div class="back-wrap" @click="$router.push('/')">
                <img src="../assets/left-arrow.svg" class="image-13 left-arrow" />
                <a href="#" class="link-3">Back</a></div>
            </div>
          </div>
        </div>

        <div class="trailer">
          <div class="div-block-5">
            <h1 class="heading-8 overlay">Advanced</h1>
          </div>
          <div class="play">
            <ProdeusPlayer v-if="videoUrl" :poster="poster" :videoUrl="videoUrl" />
          </div>
        </div>

        <div class="card">
          <div class="_120px-wrapper">
            <div class="classpage-title">
              <h1 class="heading-2">Class Info</h1>
            </div>
            <div class="_20-30-margin w-hidden-tiny">
              <h2 class="heading-7">{{currentClass.enrolledStudents.length}} Students Enrolled  | {{currentClass.lessons ? currentClass.lessons.length : 0}} Lessons {{currentClass.totalDuration | duration }}
              </h2>
            </div>
            <!-- <h2 class="heading-11">24,786 Students Enrolled<br>10 Lessons 1:03:44</h2> -->
            <div class="_30px-bottom-margin" v-html="currentClass.aboutClass">
            </div>
            <div class="_30px-bottom-margin">
              <h1 class="heading-40">Topics Covered</h1>
            </div>
            <div class="flex-space-around wrap flex-space-evently">
              <div class="div-block-102" v-for="skill in currentClass.skillTags" :key="skill">
                <div class="tag-text">{{skill}}</div>
                <img src="../assets/x.svg" class="image-23 cross" />
              </div>

            </div>
          </div>
        </div>
        <div class="card">
          <div class="_40px-pad-wrap">
            <div class="_40px-bottom-margin">
              <div class="classpage-title">
                <h1 class="heading-2">Syllabus</h1>
              </div>
            </div>
            <div class="lesson-wrapper" v-for="lesson in currentClass.lessons" :key="lesson.lessonNumber">
              <LessonBlock :lesson="lesson" :key="lesson.lessonNumber" />
              <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">
                <LessonDetail :lesson="lesson" :classId="currentClass._id" v-show="lesson.expanded" />
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="flexcolumn">
        <InstructorInfo :instructor="currentClass.instructor" />
        <ClassRatingReview />
        <div class="card">
          <div>
            <div class="_20px-margin">
              <h1 class="heading-4">Student Reviews</h1>
            </div>
          </div>
          <div class="div-block-17">
            <h1 class="heading-6">MOST RECENT</h1>
          </div>
          <div class="scroll">
            <StudentReview />
            <StudentReview />
            <StudentReview />
            <StudentReview />
          </div>
        </div>
      </div>
    </div>
    <Loading :color="'#8446e8'" :active.sync="!currentClass.trailer" :is-full-page="true"></Loading>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import ClassRatingReview from "@/components/Class/ClassRatingReview.vue";
import StudentReview from "@/components/Class/StudentReview.vue";
import LessonBlock from "@/components/Class/LessonBlock.vue";
import InstructorInfo from "@/components/Class/InstructorInfo.vue";
import LessonDetail from "@/components/Class/LessonDetail.vue";
import ProdeusPlayer from "@/components/Video/ProdeusPlayer.vue";
import Loading from "vue-loading-overlay";

export default {
  name: "ClassPage",
  props: ["id"],
  components: {
    ClassRatingReview,
    StudentReview,
    LessonBlock,
    InstructorInfo,
    LessonDetail,
    ProdeusPlayer,
    Loading
  },
  data() {
    return {};
  },
  computed: {
    poster() {
      let user = JSON.parse(localStorage.getItem('user'));
      return this.$apiBaseUrl  + "/media/" + this.currentClass.img+ "?at="+user.accessToken;
    },
    videoUrl() {
      let user = JSON.parse(localStorage.getItem('user'));
      if (this.currentClass && this.currentClass.trailer) {
        return (
          process.env.VUE_APP_API_BASE_URL +
          "/media/" +
          this.currentClass.trailer.media+ "?at="+user.accessToken
        );
      } else {
        return null;
      }
    },
    currentUserId() {
      let user = this.$store.state.authentication.user;
      return user ? user._id: '';
    },
    isEnrolled() {
      const enrollIndex = this.currentClass.enrolledStudents.findIndex(
        x => x === this.currentUserId
      );
      return enrollIndex > -1 ? true : false;
    },
    toggeledEnroll(){
      return this.isEnrolled ? 'unenroll' :'enroll';
    },
    ...mapGetters({
      currentClass: "classes/currentClass"
    })
  },
  methods: {
    duration(totalSeconds) {
      const hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return hours + ":" + minutes + ":" + seconds;
    },
    enrollClass() {
      this.$store
        .dispatch("classes/enrollClass", {
          classId: this.id,
          studentId: this.currentUserId,
          type: this.toggeledEnroll
        })
        .then(
          response => {
            this.currentClass.enrolledStudents = response.data.enrolledStudents;
          },
          err => {
            console.error(err);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.play-btn {
  width: 16px;
  .cls-1 {
    fill: #fff;
  }
}

.left-arrow {
  height: 16px;
  .cls-1 {
    fill: #bcbcbc;
  }
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

.flex-space-evently {
  justify-content: space-evenly !important;
}
</style>
