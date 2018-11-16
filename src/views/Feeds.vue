<template>
  <div class="flex-row">
    <div class="flexcolumn" v-for="feed in feeds" :key="feed._id">
      <ClassCard :feedClass="feed" />
      <!-- <ProjectCard v-bind="projectData" /> -->
      <!-- <QuestionCard /> -->
    </div>
    <div class="flexcolumn">
      <ProjectCard v-bind="projectData" />
      <QuestionCard />
      <ClassCard :feedClass="classData" />
    </div>
    <div class="flexcolumn">
      <QuestionCard />
      <ClassCard :feedClass="classData" />
      <ProjectCard v-bind="projectData" />
    </div>
     <div class="flexcolumn">
      <ClassCard :feedClass="classData" />
      <ProjectCard v-bind="projectData" />
      <QuestionCard />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ClassCard from "@/components/Feeds/ClassCard.vue";
import ProjectCard from "@/components/Feeds/ProjectCard.vue";
import QuestionCard from "@/components/Feeds/QuestionCard.vue";

export default {
  name: "Feeds",
  components: {
    ClassCard,
    ProjectCard,
    QuestionCard
  },
  created(){
    this.$store.dispatch("classes/getFeeds");
  },
  data() {
    return {
      classData: {
        _id:'5beded4c94f97f06f19c9268',
        difficulty: "Advanced",
        category:'Art &amp; Design History',
        title: "Art &amp; Design History",
        description: "A Brief History of Typography &amp; Handlettering",
      },
      projectData: {
        liked: true,
        title: "Art &amp; Design History",
        description: "A Brief History of Typography &amp; Handlettering"
      }
    };
  },
  computed:{
     ...mapGetters({feeds:'classes/feeds'})
  }
};
</script>