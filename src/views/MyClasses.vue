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
    <div class="flex-row">
      <div class="flexcolumn" v-if="isInstructor" v-for="myClass in myClasses.data" :key="myClass._id">
       <instructor-card :myClass="myClass" />
      </div>
      <div class="flexcolumn" v-if="isStudent" v-for="myClass in myClasses.data" :key="myClass._id">
       <student-card :myClass="myClass" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StudentCard from "../components/MyClasses/StudentCard.vue";
import instructorCard from "../components/MyClasses/InstructorCard.vue";

export default {
  props: ["id"],
  components: {
    StudentCard,
    instructorCard
  },
  methods: {
    toggleMyClasses() {
      let toName = "";
      if (this.isInstructor) {
        toName = "studentClasses";
      } else {
        toName = "instructorClasses";
      }
      this.$router.push({ name: toName, params: { id: this.id } });
    }
  },
  computed: {
    isStudent() {
      return this.myClasses.type === "student";
    },
    isInstructor() {
      return this.myClasses.type === "instructor";
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
