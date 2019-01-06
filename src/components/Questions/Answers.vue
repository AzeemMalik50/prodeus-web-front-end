<template>
<div class="width-100">
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
      <p>
        {{answer.title}}
      </p>
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
            <div class="horiz-left-align-justify-atart" @click="visibleInput">
            <comment class="image-15"  height="16" :active="answer.discussions.length" />

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


 <div class="_20px-bottom-margin" v-if="showReply">
          <comment-input :ref="'comment' + answer._id" :discId="answer._id" :discItem="discus" :onSubmit="onSubmit" />
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
      showReply: false,
      discus: {
        body: "",
        type: "Comment",
        postId: this.answer._id,
        media: {
          mediaId: "",
          type: ""
        },
        selectedMedia: {
          mediaType: "",
          file: null
        }
      }
    };
  },
  methods: {
    visibleInput() {
      this.showReply = true;
      this.$nextTick(() => {
        this.$refs["comment" + this.answer._id].setFocus();
      });
    },
    getMedia(mediaId) {
      return this.$apiBaseUrl + "/media/" + mediaId;
    },
    onSubmit() {
      if (this.discus.body && this.discus.type) {
        let disc = JSON.parse(JSON.stringify(this.discus));
        if (!disc.media.mediaId) {
          delete disc.media;
        }
        this.$store.dispatch("post/addPostComment", disc).then(
          resp => {
            this.answer.discussions.push(resp.data);
            this.showReply = false;
            this.discus.body = "";
            this.discus.media.mediaId = "";
          },
          err => {}
        );
      }
    },
    vote(type) {
      if (
        (type === "upVote" &&
          this.answer.upVotes.indexOf(this.currentUser._id) === -1) ||
        (type === "downVote" &&
          this.answer.downVotes.indexOf(this.currentUser._id) === -1)
      ) {
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
    }
    // vote(type) {
    //   this.$store
    //     .dispatch("post/votePost", {
    //       postId: this.answer._id,
    //       voteType: type,
    //       parentPost: this.parentId
    //     })
    //     .then(
    //       resp => {
    //         if (type === "upVote") {
    //           this.answer.upVotes.push(this.currentUser._id);
    //           this.answer.downVotes = this.answer.downVotes.filter(
    //             el => el !== this.currentUser._id
    //           );
    //         } else {
    //           this.answer.downVotes.push(this.currentUser._id);
    //           this.answer.upVotes = this.answer.upVotes.filter(
    //             el => el !== this.currentUser._id
    //           );
    //         }
    //       },
    //       err => {}
    //     );
    // }
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
