<template>
<div>
<div class="card cursor-pointer" @click="projectDetail()">
    <div class="div-block-66" v-if="projectImage">
      <img :src="projectImage" alt="" class="image-10">
    </div>
    <div class="_20px-pad-wrapper">
      <!-- <div class="profile-picture post"></div> -->
            <user-thumbnail :user="project.user" :myClass="userClasses" />

      <div class="_20px-margin">
        <h2 class="heading-6 center project" v-html="project.category"></h2>
      </div>
      <div class="_30px-bottom-margin">
        <h1 class="heading-4 center" v-html="project.title"></h1>
      </div>
        <div class="_20px-bottom-margin" v-if="!projectImage && projectText">
        <div class="div-block-73" >
          <div class="div-block-75">
            <div class="div-block-76">
              <p class="paragraph-5" v-html="projectText">
                <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. -->
                </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-space-around">
        <img src="@/assets/heart-active.svg" v-if="liked" @click.stop="unLikeProject()" height="16"/>
        <img src="@/assets/heart.svg" v-else @click.stop="likeProject()" height="16"/>
        <img src="@/assets/reblog.svg" height="20" class="reblog-active" />
        <img src="@/assets/comment.svg" height="16" @click.self="projectDetail(true)" class="comment-active"/>
        <img src="@/assets/share.svg" height="16" class="share-active" />
      </div>
    </div>
  </div>
</div>
    <!-- <Project v-if="isProjectOpen" /> -->
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Project from "../../views/Project.vue";
export default {
  props: ["project", "title", "description"],
  components: {
    Project
  },
  methods: {
    projectDetail(goToComment) {
       if (goToComment) {
        this.$store.dispatch("setGoToPostComment", true);
      }
      this.$router.push({
                name: 'feed',
                query: {project: this.project._id}
              });
      this.$store.dispatch('setCurrentPostId', this.project._id);
      this.$store.dispatch('toggelProjectDialog', true);
    },
    likeProject() {
      this.$store.dispatch("post/likePost", this.project._id).then(
        resp => {
          this.project.likes.indexOf(this.loggedInUser._id) === -1
            ? this.project.likes.push(this.loggedInUser._id)
            : "";
        },
        err => {}
      );
    },
    unLikeProject() {
      this.$store.dispatch("post/removeLikePost", this.project._id).then(
        resp => {
          let likeIndex = this.project.likes.indexOf(this.loggedInUser._id);
          if (likeIndex > -1) {
            this.project.likes.splice(likeIndex, 1);
          }
        },
        err => {}
      );
    }
  },
  computed: {
    ...mapState({
      loggedInUser: state => state.authentication.user
    }),
    ...mapGetters(["isProjectOpen"]),
    liked() {
      return this.project.likes.indexOf(this.loggedInUser._id) > -1;
    },
    projectImage() {
      let imageContent = this.project.content.find(c => c.type === "image");
      let imageUrl = "";
      if (imageContent) {
        imageUrl = this.$apiBaseUrl + "/media/" + imageContent.media;
      }
      return imageUrl;
    },
     projectText() {
      let textContent = this.project.content.find(c => c.type === "text");
      return textContent ? textContent.body.substring(0, 100) : null;
    },
    userClasses() {
      let userClass = "profile-picture";
      if (this.projectImage) {
        userClass += " post";
      }
      return userClass
    }
  }
};
</script>

<style lang="scss" scoped>
.heart-active {
  path {
    fill: #e04859 !important;
  }
}
.reblog-active {
  path {
    fill: #3ea7f4;
  }
}
.comment-active {
  path {
    fill: #ebcb4d;
  }
}
.share-active {
  path {
    fill: #22283a;
  }
}
svg {
  width: 18px;
  cursor: pointer;
}

.view {
  .cls-1 {
    fill: #bcbcbc;
  }
}
</style>
