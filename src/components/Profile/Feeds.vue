<template>
  <div class="profile-card">
    <!-- <div class="flexcolumn">
      <div class="card"><img src="../../assets/fortune.jpg" alt="">
        <div class="_20px-pad-wrapper">
          <div class="profile-picture post"></div>
          <div class="_20px-margin">
            <h2 class="heading-6 center project">Art &amp; Design History</h2>
          </div>
          <div class="_30px-bottom-margin">
            <h1 class="heading-4 center">A Brief History of Typography &amp; Handlettering</h1>
          </div>
          <div class="flex-space-around"><img src="../../assets/views.svg" height="16" alt=""><img src="../../assets/heart.svg" height="16" alt=""><img src="../../assets/comment.svg" height="16" alt=""><img src="../../assets/reblog.svg" height="16" alt=""></div>
        </div>
      </div>
    </div> -->
     <div class="flexcolumn">
       <div v-for="feed in firstColumn" :key="feed._id">
      <ClassCard :feedClass="feed" v-if="!feed.postType" />
      <ProjectCard v-if="feed.postType==='Project'" :project="feed" />
      <QuestionCard v-if="feed.postType==='Question'" :question="feed" />
       </div>
    </div>
      <div class="flexcolumn">
       <div v-for="feed in secondColumn" :key="feed._id">
      <ClassCard :feedClass="feed" v-if="!feed.postType" />
      <ProjectCard v-if="feed.postType==='Project'" :project="feed" />
      <QuestionCard v-if="feed.postType==='Question'" :question="feed" />
       </div>
    </div>
  </div>
</template>
<script>
import ClassCard from "@/components/Feeds/ClassCard.vue";
import ProjectCard from "@/components/Feeds/ProjectCard.vue";
import QuestionCard from "@/components/Feeds/QuestionCard.vue";
export default {
  data() {
    return {
      feeds: []
    };
  },
  components: {
    ClassCard,
    ProjectCard,
    QuestionCard
  },
  created() {
    this.getFeeds();
  },
  methods: {
    getFeeds() {
      this.$store.dispatch("classes/getPorotfolioFeeds").then(
        response => {
          this.feeds = response.data;
        },
        error => {
          console.error(error);
        }
      );
    }
  },
  computed: {
    firstColumn() {
      let length = this.feeds.length;
      let cols = [];
      if (length > 0) {
        if (length === 1) {
          cols = this.feeds;
        } else {
          cols = this.feeds.slice(0, Math.ceil(length/2));
        }
      } else {
        cols = [];
      }
      return cols;
    },
    secondColumn() {
       let length = this.feeds.length;
      let cols = [];
      if (length > 0) {
        if (length === 1) {
          cols = [];
        } else {
          cols = this.feeds.slice(Math.ceil(length/2), length -1);
        }
      } else {
        cols = [];
      }
      return cols;
    }
  }
};
</script>
