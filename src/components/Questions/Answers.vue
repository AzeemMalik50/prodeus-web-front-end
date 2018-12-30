<template>
<div>
 <div class="_100-percent-justify-start margin-top-10">
      <div class="_10px-botttom-margin">
        <div class="flex-space-between">
          <div class="horiz-left-align-justify-atart">
            <user-thumbnail :user="answer.user" />
            <div class="_10-side-margins">
              <h1 class="heading-35">{{answer.user.fullName}}</h1>
            </div>
            <h6 class="heading-18">{{answer.createdAt | moment("from", "now", true)}}</h6>
          </div>
          <div class="align-right-justify-start" v-if="index === 0 && answer.upVotes.length > 0">
            <h1 class="heading-28">Best answer</h1><img src="../../assets/star.svg" alt="">
            </div>
        </div>
      </div>
        <div v-for="cont in answer.content" :key="cont._id" class="margin-top-10 _10px-botttom-margin">
                <img v-if="cont.type==='image'"  :src="getMedia(cont.media)" />
                <video v-if="cont.type==='video'" controls :src="getMedia(cont.media)"></video>
                <div v-if="cont.type==='text'" v-html="cont.body"></div>
            </div>
      <div class="_10px-botttom-margin">
        <div class="horiz-left-align-justify-atart">
          <div class="_20-right">
            <div class="horiz-left-align-justify-atart">
              <img src="../../assets/upvote-blue.svg" v-if="isUpvoted" @click="vote('upVote')" height="16" alt="" class="image-15">
              <img src="../../assets/upvote.svg" v-else @click="vote('upVote')" height="16" alt="" class="image-15">
              <h6 class="heading-18">{{answer.upVotes.length}}</h6>
            </div>
          </div>
          <div class="_20-right">
            <div class="horiz-left-align-justify-atart">
              <img src="../../assets/downvote-blue.svg" v-if="isDownVoted"  @click="vote('downVote')" height="16" alt="" class="image-15">
              <img src="../../assets/downvote.svg" v-else  @click="vote('downVote')" height="16" alt="" class="image-15">
              <h6 class="heading-18">{{answer.downVotes.length}}</h6>
            </div>
          </div>
          <div class="_20-right">
            <div class="horiz-left-align-justify-atart">
              <img src="../../assets/Group-4427.svg" height="16" alt="" class="image-15" v-if="answer.discussions.length">
              <img src="../../assets/comment.svg" height="16" alt="" class="image-15" v-else>

              <h6 class="heading-18">{{answer.discussions.length}}</h6>
            </div>
          </div>
          <!-- <div class="_20-right">
            <div class="horiz-left-align-justify-atart"><img src="../../assets/reblog.svg" height="16" alt="" class="image-15">
              <h6 class="heading-18">221</h6>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="_20px-bottom-margin">
      <div class="flex-space-between">
        <div class="_20-right">
          <div class="horiz-left-align-justify-atart">
            <!-- <div class="profile-picture _30"></div> -->
            <user-thumbnail :user="currentUser"  />
          </div>
        </div>
        <div class="align-right-justify-start">
          <div class="form-block-3 w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <input type="text" ref="answerComment" v-on:keydown.enter.prevent='onSubmit' v-model="discus.body" class="comment-block w-input" maxlength="256" name="Comment" data-name="Comment" placeholder="Write comment here" id="Comment"></form>
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
    <reply-item v-for="disc in answer.discussions" :key="disc._id" :discussItem="disc">
    </reply-item>
</div>
</template>

<script>
import { mapState } from "vuex";
import ReplyItem from "../ClassRoom/ReplyItem";

export default {
  props: ["answer", "index", "parentId"],
  components: {
    ReplyItem
  },
  data() {
    return {
      bestAnswer: false,
      discus: {
        body: "",
        type: "Comment",
        postId: this.answer._id
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.discus.body && this.discus.type) {
        this.$store.dispatch("post/addPostComment", this.discus).then(
          resp => {
            this.answer.discussions.push(resp.data);
            this.discus.body = "";
          },
          err => {}
        );
      }
    },
    vote(type) {
      this.$store
        .dispatch("post/votePost", {
          postId: this.answer._id,
          voteType: type,
          parentPost: this.parentId
        })
        .then(
          resp => {
            if (type === "upVote") {
              this.answer.upVotes.push(this.currentUser._id);
              this.answer.downVotes = this.answer.downVotes.filter(
                el => el !== this.currentUser._id
              );
            } else {
              this.answer.downVotes.push(this.currentUser._id);
              this.answer.upVotes = this.answer.upVotes.filter(
                el => el !== this.currentUser._id
              );
            }
          },
          err => {}
        );
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.authentication.user
    }),
    isUpvoted() {
      return this.answer.upVotes.indexOf(this.currentUser._id) > -1;
    },
    isDownVoted() {
      return this.answer.downVotes.indexOf(this.currentUser._id) > -1;
    }
  }
};
</script>
