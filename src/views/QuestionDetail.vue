<template>
   <div class="modalwrapper" v-if="question">
    <div class="post-wrapper">
      <div class="post-content-wrap">
        <div class="div-block-84">
          <div class="back-wrap cursor-pointer" @click="goBack()">
            <img src="../assets/left-arrow.svg" height="16" alt="" class="image-13">
            <a  class="link-3">Back</a></div>
        </div>
        <div class="post-head">
          <div class="_20px-bottom-margin">
            <h1 class="heading-1">{{question.title}}</h1>
          </div>
          <div class="_30px-bottom-margin">
            <h2 class="heading-32 question">{{question.category}}</h2>
          </div><a href="#" @click.prevent="addAnswer" class="link outline question">Answer</a></div>
            <div v-for="cont in question.content" :key="cont._id" class="margin-top-10">
                <img v-if="cont.type==='image'"  :src="getMedia(cont.media)" />
                <video v-if="cont.type==='video'" class="width-100" controls :src="getMedia(cont.media)"></video>
                <div v-if="cont.type==='text'" v-html="cont.body"></div>
            </div>
        <answers v-for="(ans, index) in answers" :key="ans._id" :answer="ans" :index="index" :parentId="currentPostId" />
      </div>
      <div class="flexcolumn post">
        <div class="_40px-bottom-margin">
          <div class="space-between">
            <div class="vert-justify-start-align-left">
              <div class="_10px-botttom-margin">
                <h1 v-if="question.user" class="heading-10">{{question.user.fullName}}</h1>
              </div>

              <a href="#" v-if="isConnected"  @click.prevent="disConnect()" class="tag outline">Connected</a>
              <a href="#" v-else  @click.prevent="connect()" class="tag outline"> Connect </a>
              </div>
            <!-- <div class="profile-picture _50"></div> -->
                     <user-thumbnail :user="question.user" :myClass="'profile-picture _50'" />

          </div>
        </div>
        <div class="vert-justify-start-align-left">
          <div class="_10px-botttom-margin">
            <h1 class="heading-33">{{question.title}}</h1>
          </div>
          <div class="_20px-bottom-margin">
            <h2 class="heading-34 question">{{question.category}}</h2>
          </div>
        </div>
        <div class="_20px-bottom-margin">
          <div class="text-block-6">Published on {{question.createdAt | moment("MMMM Do, YYYY")}}</div>
        </div>
        <div class="flex-space-around">
          <div class="left-align"><img src="../assets/Group-5403.svg" width="20" height="20" alt="">
            <div class="text-block-7">4.2k</div>
          </div>
          <div class="left-align"><img src="../assets/Answer.svg" width="20" height="20" alt="">
            <div class="text-block-7">{{(question.replies && question.replies.length) ? question.replies.length : 0}}</div>
          </div>
          <div class="left-align"><img src="../assets/Group-5400.svg" width="20" height="20" alt="">
            <div class="text-block-7">4.2k</div>
          </div>
        </div>
        <div class="social-share-wrap"><img src="../assets/Group-6199.svg" alt=""><img src="../assets/Group-6200.svg" alt=""><img src="../assets/Group-6201.svg" alt=""><img src="../assets/Group-6202.svg" alt=""></div>
      </div>
    </div>
    <create-post v-if="showAnswerPost" :type="postType" :parentPost="question" />
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import CreatePost from "@/views/CreatePost";
import Answers from "../components/Questions/Answers";
export default {
  props: ["postId"],
  components: {
    CreatePost,
    Answers
  },
  data() {
    return {
      question: {},
      bestAnswer: false,
      postType: "Answer"
    };
  },
  created() {
    window.addEventListener("keyup", this.goBack);
    this.$store.dispatch("post/getPost", this.currentPostId).then(
      post => {
        this.question = post.data;
        // this.question.replies = this.question.replies.sort((a, b) => {
        //   return b.upVotes.length - a.upVotes.length;
        // });
      },
      err => {
        console.error(err);
      }
    );
  },
  methods: {
    goBack() {
      // this.$router.push({ name: "feed" });
       this.$store.dispatch('toggelQuestionDialog', false);
      this.$store.dispatch('toggelProjectDialog', false);
    },
    addAnswer() {
      this.$store.dispatch("toggelAnswerForm", true);
    },
    getMedia(mediaId) {
      return this.$apiBaseUrl + "/media/" + mediaId;
    },
    disConnect() {
      this.$store.dispatch("authentication/removeConnection", this.question.user._id);
    },
    connect() {
      this.$store.dispatch("authentication/addConnection", this.question.user._id);
    }
  },
  computed: {
    ...mapGetters(["showAnswerPost"]),
     ...mapState({
      loggedInUser: state => state.authentication.user,
      currentPostId: state => state.currentPostId
    }),
    answers() {
      if (this.question.replies && this.question.replies.length) {
        return this.question.replies.sort((a, b) => {
          return b.upVotes.length - a.upVotes.length;
        });
      } else {
        return [];
      }
    },
      isConnected() {
      if(this.question.user && this.loggedInUser.connections && this.loggedInUser.connections.length > -1){
        return this.loggedInUser.connections.indexOf(this.question.user._id) > -1;
      } else {
        return false;
      }
    },
  }
};
</script>
<style lang="scss" scoped>
.margin-top-10 {
  margin-top: 10px;
}
</style>
