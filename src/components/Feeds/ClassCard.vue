<template>
  <div class="card">
    <div class="class-header">
      <div class="flex-space-between">
        <h1 class="heading-6 grey">{{feedClass.difficulty}}</h1>
        <star-rating :inline="true" :star-size="16" :read-only="true" v-model="rating" :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :rating="5" inactive-color="#dbdbdb" active-color="#8446E8"></star-rating>
      </div>
    </div>
    <div class="class-image" @click="goClass()" :style="getBackground('backImage')"></div>
    <div class="_20px-pad-wrapper">
      <div class="profile-picture post" :style="getBackground('userImage')"></div>
      <div class="_20px-margin">
        <h2 class="heading-6 center" v-html="feedClass.category"></h2>
      </div>
      <div class="_30px-bottom-margin">
        <h1 class="heading-4 center">{{classTitle}}</h1>
      </div>
      <a href="#" v-if="isEnrolled" @click.prevent  class="link outline">Enrolled</a>
      <a href="#" v-else @click.prevent="enrollClass()" class="link outline">Enroll</a>
      </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "ClassCard",
  // props: ["type", "rating", "title",
  // "description", "enrolled","_id"],
  props: {
    feedClass: Object
  },
  components: {
    StarRating
  },
  data() {
    return {
      rating: 4,
      enrolled: false,
      backImage: "",
      userImage: ""
    };
  },
  created() {
    // this.$store.dispatch("classes/getMedia", this.feedClass.img).then(
    //   response => {
    //     this.backImage = response.data;
    //   },
    //   err => {
    //     console.error(err);
    //   }
    // );
    this.getImage("backImage", this.feedClass.img);
    this.getInstructorImg();
  },
  methods: {
    getInstructorImg() {
      if (this.feedClass.instructor.local.img) {
        this.getImage("userImage", this.feedClass.instructor.local.img);
      } else if (
        this.feedClass.instructor.facebook &&
        this.feedClass.instructor.facebook.img
      ) {
        this.userImage = this.feedClass.instructor.facebook.img;
      } else if (
        this.feedClass.instructor.google &&
        this.feedClass.instructor.google.img
      ) {
        this.userImage = this.feedClass.instructor.google.img;
      }
    },
    getImage(type, id) {
      this.$store.dispatch("classes/getMedia", id).then(
        response => {
          this[type] = response.data;
        },
        err => {
          console.error(err);
        }
      );
    },
    goClass() {
      this.$router.push({ path: `/classes/${this.feedClass._id}` });
    },
    enrollClass() {
      this.$store
        .dispatch("classes/enrollClass", {
          classId: this.feedClass._id,
          studentId: this.currentUserId
        })
        .then(
          response => {
            this.goClass();
          },
          err => {
            console.error(err);
          }
        );
    },
    getBackground(type) {
      return { "backgroundImage": `url(${this[type]})` };
    }
  },
  computed: {
    background() {
      return { "background-image": `url(${this.backImage})` };
    },
    currentUserId() {
      return this.$store.state.authentication.user._id;
    },
    isEnrolled() {
      const enrollIndex = this.feedClass.enrolledStudents.findIndex(
        x => x === this.currentUserId
      );
      return enrollIndex > -1 ? true : false;
    },
    classTitle() {
      return this.feedClass.title.length <= 50
        ? this.feedClass.title
        : this.feedClass.title.slice(0, 45) + "...";
    },
    currentUserId() {
      return this.$store.state.authentication.user._id;
    },
    isEnrolled() {
      const enrollIndex = this.feedClass.enrolledStudents.findIndex(
        x => x === this.currentUserId
      );
      return enrollIndex > -1;
    },
  }
};
</script>

<style>
.vue-star-rating-star {
  margin-right: 1px !important;
}

.class-image {
  cursor: pointer;
}
.profile-picture{
  background-size: 100% 100%;
}
</style>
