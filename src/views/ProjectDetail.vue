<template>
  <div class="modalwrapper" v-if="project && project.user">
    <div class="post-wrapper">
      <div class="post-content-wrap">
        <div class="div-block-84">
          <div class="back-wrap cursor-pointer" @click="goBack()">
            <img src="../assets/left-arrow.svg" height="16" alt="" class="image-13">
            <a href="#" class="link-3">Back</a>
          </div>
        </div>
        <div class="post-head">
          <div class="_20px-bottom-margin">
            <h1 class="heading-1">{{project.title}}</h1>
          </div>
          <div class="_30px-bottom-margin">
            <h2 class="heading-32">{{project.category}}</h2>
          </div>
          <div class="div-block-86">
            <img src="../assets/Group-5402.svg" height="32" alt="">
            <img src="../assets/Group-5401.svg" @click="likeProject()" height="32" alt="">
            <img src="../assets/Group-5400.svg" height="32" alt="">
            <img src="../assets/share-button.svg" height="32" alt="">
          </div>
        </div>
        <div v-for="cont in project.content" :key="cont._id" class="margin-top-10">
          <img v-if="cont.type==='image'" :src="getMedia(cont.media)" />
          <video v-if="cont.type==='video'" class="width-100" controls :src="getMedia(cont.media)"></video>
          <div v-if="cont.type==='text'" v-html="cont.body"></div>
        </div>

        <div class="_30px-top-bottom-20-side-padding width-100">
          <div class="_40px-bottom-margin center">
            <h1 class="heading-1">Comments ({{project.discussions.length}})</h1>
          </div>
          <div class="_20px-bottom-margin">
            <div class="flex-space-between">
              <div class="_20-right">
                <div class="horiz-left-align-justify-atart">
                  <!-- <div class="profile-picture _30"></div> -->
            <user-thumbnail :user="loggedInUser"  />

                </div>
              </div>
              <div class="align-right-justify-start">
                <div class="form-block-3 w-form">
                  <form id="email-form" name="email-form" data-name="Email Form">
                    <input type="text" ref="answerComment" v-on:keydown.enter.prevent='onSubmit' v-model="discus.body" class="comment-block w-input" maxlength="256" name="Comment-2" data-name="Comment 2" placeholder="Write comment here" id="Comment-2"></form>
                  <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="_20px-bottom-margin"></div>
          <reply-item v-for="disc in project.discussions" :key="disc._id" :discussItem="disc">
          </reply-item>
        </div>
      </div>
      <div class="flexcolumn post">
        <div class="_40px-bottom-margin">
          <div class="space-between">
            <div class="vert-justify-start-align-left">
              <div class="_10px-botttom-margin">
                <h1 v-if="project.user" class="heading-10">{{project.user.fullName}}</h1>
              </div>
              <a href="#" v-if="isConnected" @click.prevent="disConnect()" class="tag outline">Connected</a>
              <a href="#" v-else @click.prevent="connect()" class="tag outline"> Connect </a>

            </div>
            <user-thumbnail :user="project.user" :myClass="'profile-picture _50'" />
          </div>
        </div>
        <div class="vert-justify-start-align-left">
          <div class="_10px-botttom-margin">
            <h1 class="heading-33">{{project.title}}</h1>
          </div>
          <div class="_20px-bottom-margin">
            <h2 class="heading-34 project">{{project.category}}</h2>
          </div>
        </div>
        <div class="_20px-bottom-margin">
          <div class="text-block-6">Published on {{project.createdAt | moment("MMMM Do, YYYY")}}</div>
        </div>
        <div class="flex-space-around">
          <div class="left-align"><img src="../assets/Group-5403.svg" width="20" height="20" alt="">
            <div class="text-block-7">4.2k</div>
          </div>
          <div class="left-align"><img src="../assets/Group-5401.svg" width="20" height="20" alt="">
            <div class="text-block-7">{{project.likes.length}}</div>
          </div>
          <div class="left-align">
            <img src="../assets/Group-5402.svg" width="20" height="20" alt="">
            <div class="text-block-7">{{project.discussions.length}}</div>
          </div>
          <div class="left-align"><img src="../assets/Group-5400.svg" width="20" height="20" alt="">
            <div class="text-block-7">4.2k</div>
          </div>
        </div>
        <div class="social-share-wrap"><img src="../assets/Group-6199.svg" alt=""><img src="../assets/Group-6200.svg" alt=""><img src="../assets/Group-6201.svg" alt=""><img src="../assets/Group-6202.svg" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CreatePost from "@/views/CreatePost";
import Answers from "../components/Questions/Answers";
import ReplyItem from "../components/ClassRoom/ReplyItem";

export default {
  props: ["postId"],
  components: {
    CreatePost,
    Answers,
    ReplyItem
  },
  data() {
    return {
      project: {},
      bestAnswer: false,
      discus: {
        body: "",
        type: "Comment",
        postId: ""
      }
    };
  },
  created() {
    window.addEventListener("keyup", this.goBack);
    this.discus.postId = this.currentPostId;
    this.$store.dispatch("post/getPost", this.currentPostId).then(
      post => {
        this.project = post.data;
      },
      err => {
        console.error(err);
      }
    );
  },
  methods: {
    goBack() {
      // this.$router.push({
      //   name: "feed"
      // });
      this.$store.dispatch('toggelQuestionDialog', false);
      this.$store.dispatch('toggelProjectDialog', false);
    },
    getMedia(mediaId) {
      return this.$apiBaseUrl + "/media/" + mediaId;
    },
    disConnect() {
      this.$store.dispatch(
        "authentication/removeConnection",
        this.project.user._id
      );
    },
    connect() {
      this.$store.dispatch(
        "authentication/addConnection",
        this.project.user._id
      );
    },
    onSubmit() {
      if (this.discus.body && this.discus.type) {
        this.$store.dispatch("post/addPostComment", this.discus).then(
          resp => {
            this.project.discussions.push(resp.data);
            this.discus.body = "";
          },
          err => {}
        );
      }
    },
    likeProject() {
      this.$store.dispatch("post/likePost", this.currentPostId).then(
        resp => {
          this.project.likes.indexOf(this.loggedInUser._id) === -1 ?
          this.project.likes.push(this.loggedInUser._id) : '';
        },
        err => {}
      );
    }
  },
  computed: {
    ...mapState({
      loggedInUser: state => state.authentication.user,
      currentPostId: state => state.currentPostId
    }),
    isConnected() {
      if (
        this.project.user &&
        this.loggedInUser.connections &&
        this.loggedInUser.connections.length > -1
      ) {
        return (
          this.loggedInUser.connections.indexOf(this.project.user._id) > -1
        );
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.margin-top-10 {
  margin-top: 10px;
}
</style>