<template>
  <div>
    <div class="card cursor-pointer" @click="questionDetail()">
      <div class="_20px-pad-wrapper">
        <edit-menu />
        <!-- <div class="profile-picture"></div>  -->

        <user-thumbnail :user="question.user" :myClass="'profile-picture'" />

        <div class="_20px-margin">
          <h2 class="heading-6 center question">{{question.category}}</h2>
        </div>
        <div class="_20px-bottom-margin">
          <h1 class="heading-4 center">
            {{question.title}}
            <!-- What artistic style is Monet associated with? -->
          </h1>
        </div>
        <div class="_20px-bottom-margin">
          <div class="div-block-73" v-if="answers.length">
            <div class="div-block-74">
              <h1 class="heading-28" v-if="answers[0].upVotes.length">Best answer</h1>
              <h1 class="heading-28" v-else>Answer</h1>
              <div class="text-block-5">from</div>
              <h1 class="heading-29">{{answers[0].user.fullName.split(' ')[0]}}</h1>
            </div>
            <div class="div-block-75">
              <div class="div-block-76">
                <p class="paragraph-5">
                  {{answers[0].title}}
                  <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. -->
                </p>
              </div>
              <div class="div-block-77 min-width-15">
                <img src="@/assets/upvote-blue.svg" v-if="isUpvoted" @click.stop="vote('upVote')" />
                <img src="@/assets/upvote.svg" v-else @click.stop="vote('upVote')" />
                <h1 class="heading-30">{{voteCount}}</h1>
                <img src="@/assets/downvote-blue.svg" v-if="isDownVoted" @click.stop="vote('downVote')" />
                <img src="@/assets/downvote.svg" v-else @click.stop="vote('downVote')" />

              </div>
            </div>
          </div>
        </div>
        <a class="link outline question cursor-pointer" @click.stop="questionDetail(true)">Answer</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapState
  } from "vuex";
  import CreatePost from "@/views/CreatePost";

  export default {
    props: ["question"],
    components: {
      CreatePost
    },
    data() {
      return {
        postType: "Answer"
      };
    },
    methods: {
      questionDetail(goToAnswer) {
        if (goToAnswer) {
          this.$store.dispatch("setGoToAnswer", true);
        }
        this.$router.push({
          name: "feed",
          query: {
            question: this.question._id
          }
        });
        this.$store.dispatch("setCurrentPostId", this.question._id);
        this.$store.dispatch("toggelQuestionDialog", true);
      },
      addAnswer() {
        // this.$store.dispatch("toggelAnswerForm", true);
        // this.$store.dispatch("post/setSelectedQuestion", this.question);
      },
      vote(type) {
        if (
          (type === "upVote" &&
            this.answers[0].upVotes.indexOf(this.loggedInUser._id) === -1) ||
          (type === "downVote" &&
            this.answers[0].downVotes.indexOf(this.loggedInUser._id) === -1)
        ) {
          this.$store
            .dispatch("post/votePost", {
              postId: this.answers[0]._id,
              voteType: type,
              parentPost: this.question._id
            })
            .then(
              resp => {
                if (type === "upVote") {
                  this.answers[0].upVotes.push(this.loggedInUser._id);
                  this.answers[0].downVotes = this.answers[0].downVotes.filter(
                    el => el !== this.loggedInUser._id
                  );
                } else {
                  this.answers[0].downVotes.push(this.loggedInUser._id);
                  this.answers[0].upVotes = this.answers[0].upVotes.filter(
                    el => el !== this.loggedInUser._id
                  );
                }
              },
              err => {}
            );
        }
      }
    },
    computed: {
      ...mapGetters(["showAnswerPost"]),
      ...mapState({
        loggedInUser: state => state.authentication.user,
        selectedQuestion: state => state.post.selectedQuestion
      }),
      answers() {
        if (this.question.replies && this.question.replies.length) {
          return this.question.replies.sort((a, b) => {
            return (b.upVotes.length - b.downVotes.length) - (a.upVotes.length - a.downVotes.length);
          });
        } else {
          return [];
        }
      },
      voteCount() {
        return (
          this.answers[0].upVotes.length - this.answers[0].downVotes.length
        ).toString();
      },
      isUpvoted() {
        return this.answers[0].upVotes.indexOf(this.loggedInUser._id) > -1;
      },
      isDownVoted() {
        return this.answers[0].downVotes.indexOf(this.loggedInUser._id) > -1;
      }
    }
  };
</script>

<style scoped lang="scss">
  svg {
    height: 16px;
  }
  .min-width-15 {
    min-width: 15px;
  }
</style>
