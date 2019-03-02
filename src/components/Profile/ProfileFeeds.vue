<template>
  <div>
    <div class="profile-card" v-if="feeds && feeds.length">
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

    <div class="flexcolumn double" v-else>
      <div class="empty-feed"><img src="../../assets/feedAsset-20.svg" alt="">
        <h1 class="heading-55">There&#x27;s nothing here yet...</h1>
        <div class="div-block-113 alt cursor-pointer" v-if="loggedInUser._id === profile._id" @click="openCreateClass">
          <img src="../../assets/add-white.svg" height="20" alt="" class="image-29">
          <div class="text-block-14 alt">Create a post</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
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
      this.$eventHub.$on("post-deleted", this.removePost);
    },
    beforeDestroy() {
      this.$eventHub.$off("post-deleted");
    },
    methods: {
      openCreateClass() {
      this.$store.dispatch("changeCreateClass", true);
      },
      removePost(post) {
        let index = this.feeds.findIndex(f => f._id === post._id);
        if (index > -1) {
          this.feeds.splice(index, 1);
        }
      },
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
      ...mapState({
        loggedInUser: state => state.authentication.user,
        profile: state => state.profile.profile
      }),
      firstColumn() {
        let length = this.feeds.length;
        let cols = [];
        if (length > 0) {
          if (length === 1) {
            cols = this.feeds;
          } else {
            cols = this.feeds.slice(0, Math.ceil(length / 2));
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
            cols = this.feeds.slice(Math.ceil(length / 2), length - 1);
          }
        } else {
          cols = [];
        }
        return cols;
      }
    }
  };
</script>
