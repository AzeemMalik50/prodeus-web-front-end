<template>
    <div class="page-section">
  <div class="flex-row">
    <masonry :cols="{default: 5, 1600: 4, 1300: 3, 900: 2, 500: 1}" class="masonary">
    <div class="flexcolumn" v-for="feed in feeds" :key="feed._id">
      <ClassCard :feedClass="feed" v-if="!feed.postType" />
      <ProjectCard v-if="feed.postType==='Project'" :project="feed" />
      <QuestionCard v-if="feed.postType==='Question'" :question="feed" />
    </div>
    </masonry>
  </div>
    <!-- <create-post v-if="showAnswerPost" :type="postType" :parentPost="selectedQuestion" />
    <project-detail  v-if="isProjectOpen" />
    <question-detail  v-if="isQuestionOpen" />
    <share-modal v-if="showSocailShare" /> -->
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
  props: ["categoryId"],
  components: {
    ClassCard,
    ProjectCard,
    QuestionCard,
    CreatePost,
    ProjectDetail,
    QuestionDetail
  },
  watch: {
    $route(to, from) {
      let postId = from.query.question || from.query.project;
      if (this.$route.query.question) {
        this.$store.dispatch("setCurrentPostId", this.$route.query.question);
        this.$store.dispatch("toggelQuestionDialog", true);
      }
      if (this.$route.query.project) {
        this.$store.dispatch("setCurrentPostId", this.$route.query.project);
        this.$store.dispatch("toggelProjectDialog", true);
      } else if (postId) {
        this.$store.dispatch("post/getPost", postId).then(
          post => {
            const index = this.feeds.findIndex(feed => feed._id === postId);
            if (index > -1) {
              this.$set(this.feeds, index, post.data);
            }
          },
          err => {
            console.error(err);
          }
        );
      }
    }
  },
  created() {
    if (this.categoryId) {
      this.$store.dispatch("classes/getCatgClasses", this.categoryId).then(
        response => {
          this.feeds = response.data;
        },
        error => {
          console.error(error);
        }
      );
    } else {
      this.$store.dispatch("classes/getFeeds").then(
        response => {
          this.feeds = response.data;
        },
        error => {
          console.error(error);
        }
      );
    }
    this.$eventHub.$on("post-deleted", this.removeItem);
    this.$eventHub.$on("class-deleted", this.removeItem);
    if (this.$route.query.question) {
      this.$store.dispatch("setCurrentPostId", this.$route.query.question);
      this.$store.dispatch("toggelQuestionDialog", true);
    } else if (this.$route.query.project) {
      this.$store.dispatch("setCurrentPostId", this.$route.query.project);
      this.$store.dispatch("toggelProjectDialog", true);
    }
  },
  beforeDestroy() {
    this.$eventHub.$off("post-deleted");
    this.$eventHub.$off("class-deleted");
  },
  data() {
    return {
      feeds: [],
      postType: "Answer",
      projectData: {}
    };
  },
  methods: {
    removeItem(item) {
      let index = this.feeds.findIndex(f => f._id === item._id);
      if (index > -1) {
        this.feeds.splice(index, 1);
      }
    }
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
      isProjectOpen: state => state.isProjectOpen,
      showSocailShare: state => state.showSocailShare
    })
  }
};
</script>