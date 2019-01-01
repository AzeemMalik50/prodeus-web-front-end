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
    <project-detail  v-if="isProjectOpen" />
    <question-detail  v-if="isQuestionOpen" />
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ClassCard from "@/components/Feeds/ClassCard.vue";
import ProjectCard from "@/components/Feeds/ProjectCard.vue";
import QuestionCard from "@/components/Feeds/QuestionCard.vue";
import CreatePost from "@/views/CreatePost";
import ProjectDetail from "@/views/ProjectDetail";
import QuestionDetail from "@/views/QuestionDetail";

export default {
  name: "Feeds",
  components: {
    ClassCard,
    ProjectCard,
    QuestionCard,
    CreatePost,
    ProjectDetail,
    QuestionDetail
  },
  created() {
    this.$store.dispatch("classes/getFeeds").then(
      response => {
        this.feeds = response.data;
      },
      error => {
        console.error(error);
      }
    );
    console.log(this.$route.query.question);
    if (this.$route.query.question) {
      this.$store.dispatch("setCurrentPostId", this.$route.query.question);
      this.$store.dispatch("toggelQuestionDialog", true);
    } else if (this.$route.query.project) {
      this.$store.dispatch("setCurrentPostId", this.$route.query.project);
      this.$store.dispatch("toggelProjectDialog", true);
    }
  },
  data() {
    return {
      feeds: [],
      postType: "Answer",
      projectData: {
        liked: true,
        title: "Art &amp; Design History",
        description: "A Brief History of Typography &amp; Handlettering"
      }
    };
  },
  computed: {
    ...mapGetters({
      /*feeds:'classes/feeds',*/ showAnswerPost: "showAnswerPost"
    }),
    // ...mapGetters(["showAnswerPost"]),
    ...mapState({
      loggedInUser: state => state.authentication.user,
      selectedQuestion: state => state.post.selectedQuestion,
      isQuestionOpen: state => state.isQuestionOpen,
      isProjectOpen: state => state.isProjectOpen
    })
  }
};
</script>