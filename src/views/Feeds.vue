<template>
  <div class="flex-row">
    <div class="flexcolumn">
      <ClassCard v-bind="classData" />
      <ProjectCard v-bind="projectData" />
      <QuestionCard />
    </div>
    <div class="flexcolumn">
      <ProjectCard v-bind="projectData" />
      <QuestionCard />
      <ClassCard v-bind="classData" />
    </div>
    <div class="flexcolumn">
      <QuestionCard />
      <ClassCard v-bind="classData" />
      <ProjectCard v-bind="projectData" />
    </div>
     <div class="flexcolumn">
      <ClassCard v-bind="classData" />
      <ProjectCard v-bind="projectData" />
      <QuestionCard />
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      classData: {
        type: "Advanced",
        rating: 4,
        title: "Art &amp; Design History",
        description: "A Brief History of Typography &amp; Handlettering",
        enrolled: false
      },
      projectData: {
        liked: true,
        title: "Art &amp; Design History",
        description: "A Brief History of Typography &amp; Handlettering"
      }
    };
  }
};
</script>