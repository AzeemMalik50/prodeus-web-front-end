<template>
   <div class="modalwrapper" v-if="question">
    <div class="post-wrapper">
      <div class="post-content-wrap" id="question">
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
             <div class="_20px-bottom-margin margin-top-40 ">
      <div class="flex-space-between">
        <div class="_20-right">
          <div class="horiz-left-align-justify-atart">
            <!-- <div class="profile-picture _30"></div> -->
            <user-thumbnail :user="loggedInUser"  />
          </div>
        </div>
        <div class="align-right-justify-start">
          <div class="form-block-3 w-form">
              <input type="text" ref="answer" v-on:keydown.enter.prevent='onSubmit' v-model="answer.title" class="comment-block w-input" maxlength="256" name="answer" data-name="answer" placeholder="Write answer" id="answer">
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
        <!-- <div class="social-share-wrap">
          <img src="../assets/Group-6199.svg" alt="">
          <img src="../assets/Group-6200.svg" alt="">
          <img src="../assets/Group-6201.svg" alt="">
          <img src="../assets/Group-6202.svg" alt="">
          </div> -->
          <social-sharing :url="socialData.url"
                      :title="question.title"
                      :description="questionText"
                      :quote="question.title"
                      hashtags="prodeus"
                      :twitter-user="loggedInUser.fullName"
                      inline-template>
                            <div class="social-share-wrap">
      <network network="facebook">
        <facebook />

          <!-- <img src="../assets/Group-6199.svg" alt=""> -->
      </network>
       <network network="twitter">
         <twitter />
          <!-- <img src="../assets/Group-6200.svg" alt=""> -->
       </network>
          </div>
</social-sharing>
      </div>
    </div>
    <!-- <create-post v-if="showAnswerPost" :type="postType" :parentPost="question" /> -->
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import CreatePost from "@/views/CreatePost";
import Answers from "../components/Questions/Answers";
const VueScrollTo = require("vue-scrollto");
export default {
  props: ["postId"],
  components: {
    CreatePost,
    Answers
  },
  data() {
    return {
      socialData:{
        url : '',
      },
      answer: {
        title: "",
        postType: "Answer",
        parent: ""
      },
      question: {},
      bestAnswer: false,
      postType: "Answer",
      options: {
        container: "#question",
        easing: "ease-in",
        offset: -60,
        force: true,
        cancelable: true,
        onStart: function(element) {
          // scrolling started
        },
        onDone: function(element) {
          // scrolling is done
        },
        onCancel: function() {
          // scrolling has been interrupted
        },
        x: false,
        y: true
      }
    };
  },
  created() {
    this.socialData.url = window.location.origin+ '?question='+this.currentPostId;
    this.answer.parent = this.currentPostId;
    window.addEventListener("keyup", this.pressEscape);
    this.$store.dispatch("post/getPost", this.currentPostId).then(
      post => {
        this.question = post.data;
        if(this.goToAnswer){
          this.addAnswer();
        }
      },
      err => {
        console.error(err);
      }
    );
  },
  methods: {
    pressEscape(e) {
      if (e.keyCode === 27) {
        this.goBack();
      }
    },
    goBack() {
      // this.$router.push({ name: "feed" });
      this.$store.dispatch("toggelQuestionDialog", false);
      this.$store.dispatch("toggelProjectDialog", false);
    },
    addAnswer() {
      var cancelScroll = VueScrollTo.scrollTo("#answer", 300, this.options);
      this.$nextTick(() => {
        this.$refs.answer.focus();
        this.$store.dispatch("setGoToAnswer", false);
      });
    },
    getMedia(mediaId) {
      return this.$apiBaseUrl + "/media/" + mediaId;
    },
    disConnect() {
      this.$store.dispatch(
        "authentication/removeConnection",
        this.question.user._id
      );
    },
    connect() {
      this.$store.dispatch(
        "authentication/addConnection",
        this.question.user._id
      );
    },
    onSubmit() {
      this.$store.dispatch("post/addPost", this.answer).then(
        post => {
          this.question.replies.push(post.data);
          this.answer.title = "";
        },
        err => {
          console.error(err);
        }
      );
    }
  },
  computed: {
    ...mapGetters(["showAnswerPost"]),
    ...mapState({
      loggedInUser: state => state.authentication.user,
      currentPostId: state => state.currentPostId,
      goToAnswer: state => state.goToAnswer
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
      if (
        this.question.user &&
        this.loggedInUser.connections &&
        this.loggedInUser.connections.length > -1
      ) {
        return (
          this.loggedInUser.connections.indexOf(this.question.user._id) > -1
        );
      } else {
        return false;
      }
    },
     questionText() {
      let textContent = this.question.content.find(c => c.type === "text");
      return textContent ? textContent.body.substring(0, 100) : '';
    },
  }
};
</script>
<style lang="scss" scoped>
.margin-top-10 {
  margin-top: 10px;
}
.margin-top-40 {
  margin-top: 40px;
}
</style>
