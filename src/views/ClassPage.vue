<template>
  <div class="flex-row">
    <div class="flexcolumn triple">
      <div class="card">
        <div class="_40px-pad-wrap">
          <div class="classpage-title">
            <h1 class="heading">A Brief History of Typography &amp; Handlettering</h1>
          </div>
          <div class="_20px-margin">
            <h2 class="heading-6 center">Art &amp; Design History</h2>
          </div><a href="#" class="link">Enroll</a></div>
      </div>
      <div class="trailer">
        <div class="div-block-5">
          <h1 class="heading-8 overlay">Advanced</h1>
        </div>
        <div class="play">
          <Play class="play-btn" />
        </div>
      </div>
      <div class="card">
        <div class="_120px-wrapper">
          <div class="classpage-title">
            <h1 class="heading-2">Class Info</h1>
          </div>
          <div class="_20-30-margin w-hidden-tiny">
            <h2 class="heading-7">24,786 Students Enrolled  |  10 Lessons 1:03:44</h2>
          </div>
          <h2 class="heading-11">24,786 Students Enrolled<br>10 Lessons 1:03:44</h2>
          <div class="_20px-bottom-margin">
            <p class="paragraph"><strong>About This Class<br></strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
          <div class="_20px-bottom-margin"><img src="../assets/fortune.jpg" alt="" class="image"></div>
          <div class="_10px-botttom-margin"></div>
          <p class="paragraph"><strong>What You Will Learn<br></strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
      </div>
      <div class="card">
        <div class="_40px-pad-wrap">
          <div class="_40px-bottom-margin">
            <div class="classpage-title">
              <h1 class="heading-2">Syllabus</h1>
            </div>
          </div>
          <div class="lesson-wrapper" v-for="lesson in lessons" :key="lesson.num">
            <LessonBlock :lesson="lesson" :key="lesson.num"/>
            <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">
              <LessonDetail v-if="lesson.expanded" />
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="flexcolumn">
      <InstructorInfo />
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
</template>

<script>
import Play from "@/assets/play.svg";
import ClassRatingReview from "@/components/Class/ClassRatingReview.vue";
import StudentReview from "@/components/Class/StudentReview.vue";
import LessonBlock from "@/components/Class/LessonBlock.vue";
import InstructorInfo from "@/components/Class/InstructorInfo.vue";
import LessonDetail from "@/components/Class/LessonDetail.vue";

export default {
  name: "ClassPage",
  components: {
    Play,
    ClassRatingReview,
    StudentReview,
    LessonBlock,
    InstructorInfo,
    LessonDetail
  },
  data() {
    return {
      lessons: [
        {
          num: "1",
          expanded: false
        },
        {
          num: "2",
          expanded: false
        },
        {
          num: "3",
          expanded: false
        },
        {
          num: "4",
          expanded: false
        },
        {
          num: "5",
          expanded: false
        }
      ]
    };
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
</style>
