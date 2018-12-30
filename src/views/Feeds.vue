<template>
    <div class="page-section">
  <div class="flex-row">
    <masonry :cols="{default: 5, 1600: 4, 1300: 3, 900: 2, 500: 1}" class="masonary">
    <div class="flexcolumn" v-for="feed in feeds" :key="feed._id">
      <ClassCard :feedClass="feed" v-if="!feed.postType" />
      <ProjectCard v-bind="projectData" v-if="feed.postType==='Project'" :project="feed" />
      <QuestionCard v-if="feed.postType==='Question'" :question="feed" />
    </div>
    </masonry>
    <!-- <div class="flexcolumn">
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
    </div> -->
  </div>
    <create-post v-if="showAnswerPost" :type="postType" :parentPost="selectedQuestion" />
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import ClassCard from "@/components/Feeds/ClassCard.vue";
import ProjectCard from "@/components/Feeds/ProjectCard.vue";
import QuestionCard from "@/components/Feeds/QuestionCard.vue";
import CreatePost from "@/views/CreatePost";

export default {
  name: "Feeds",
  components: {
    ClassCard,
    ProjectCard,
    QuestionCard,
    CreatePost
  },
  created(){
    this.$store.dispatch("classes/getFeeds");
  },
  data() {
    return {
      postType: "Answer",
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
     ...mapGetters({feeds:'classes/feeds', showAnswerPost: "showAnswerPost"}),
      // ...mapGetters(["showAnswerPost"]),
    ...mapState({
      loggedInUser: state => state.authentication.user,
      selectedQuestion: state => state.post.selectedQuestion
    }),
  }
};
</script>