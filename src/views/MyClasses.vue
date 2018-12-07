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
          <a href="#" class="nav-link w-nav-link">Course Catalog</a>
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
    this.$store.dispatch("classes/getMyClasses", {
      id: this.id,
      type: "student"
    });
    this.$store.dispatch("classes/getMyClasses", {
      id: this.id,
      type: "instructor"
    });
  },
  methods: {
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
      return !(
        this.myClasses.student &&
        this.myClasses.student.length &&
        this.myClasses.instructor &&
        this.myClasses.instructor.length
      );
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
