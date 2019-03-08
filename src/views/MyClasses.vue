<template>
  <div>
    <div data-collapse="none" data-animation="default" data-duration="400" class="navbar-2 w-nav">
      <div class="nav-wrap">
        <div class="my-class-toggle cursor-pointer" @click="toggleMyClasses()"><a href="#" class="toggle" :class="{'active':isStudent}">Student</a>
          <div class="div-block-28">
            <div class="div-block-27">
              <div class="div-block-29" :class="{'instructor':isInstructor}"></div>
            </div>
          </div><a href="#" class="toggle" :class="{'active':isInstructor}">Instructor</a></div>
        <nav role="navigation" class="nav-menu-2 w-nav-menu">
          <router-link :to="{ name: 'course-catalog'}"  class="nav-link w-nav-link">Course Catalog</router-link>
          <a href="#" class="nav-link w-nav-link">My Degrees</a></nav>
      </div>
    </div>
    <div class="page-section"></div>
    <div class="flex-row" v-if="!isLoader">
      <div class="flexcolumn" v-show="isInstructor" v-for="myClass in myClasses.instructor" :key="myClass._id + 'instructor'">
       <instructor-card :myClass="myClass" />
      </div>
      <div class="flexcolumn" v-show="isStudent" v-for="myClass in myClasses.student" :key="myClass._id">
       <student-card :myClass="myClass" />
      </div>
      <div class="flexcolumn" v-if="(isStudent && (!myClasses.student || !myClasses.student.length)) || (isInstructor && !myClasses.instructor || !myClasses.instructor.length)">
      <div class="empty-feed" >
      <img src="../assets/feedAsset-20.svg" class="emp-img" alt="">
        <h1 class="heading-55">There&#x27;s nothing here yet...</h1>
        <div class="div-block-113 alt cursor-pointer" v-if="isInstructor" @click="openCreateClass()">
          <img src="../assets/add-white.svg" height="20" alt="" class="image-29">
          <div class="text-block-14 alt">Create a class</div>
        </div>
      </div>
      </div>
    </div>
    <Loading :color="'#8446e8'" :active.sync="isLoader" :is-full-page="true"></Loading>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import StudentCard from "../components/MyClasses/StudentCard.vue";
import instructorCard from "../components/MyClasses/InstructorCard.vue";

export default {
  props: ["id"],
  data() {
    return {
      type: "instructor"
    };
  },
  components: {
    StudentCard,
    instructorCard,
    Loading
  },
  created() {
    this.$eventHub.$on("class-deleted", this.removeItem);
    this.$store.dispatch("classes/getMyClasses", {
      id: this.id,
      type: "student"
    });
    this.$store.dispatch("classes/getMyClasses", {
      id: this.id,
      type: "instructor"
    });
  },
  beforeDestroy() {
    this.$eventHub.$off("class-deleted");
  },
  methods: {
    openCreateClass() {
      this.$store.dispatch("changeCreateClass", true);
    },
    removeItem(item) {
      let sIndex = this.myClasses.student.findIndex(f => f._id === item._id);
      if (sIndex > -1) {
        this.myClasses.student.splice(sIndex, 1);
      }

      let iIndex = this.myClasses.instructor.findIndex(f => f._id === item._id);
      if (iIndex > -1) {
        this.myClasses.instructor.splice(iIndex, 1);
      }
    },
    toggleMyClasses() {
      // let toName = "";
      // if (this.isInstructor) {
      //   toName = "studentClasses";
      // } else {
      //   toName = "instructorClasses";
      // }
      // this.$router.push({ name: toName, params: { id: this.id } });
      this.type = this.type === "instructor" ? "student" : "instructor";
    }
  },
  computed: {
    isStudent() {
      return this.type === "student";
    },
    isInstructor() {
      return this.type === "instructor";
    },
    isLoader() {
      return !(this.myClasses.student && this.myClasses.instructor);
    },
    ...mapGetters({ myClasses: "classes/myClasses" })
  }
};
</script>

<style lang="scss" scoped>
.instructor {
  left: 20px;
}
</style>
