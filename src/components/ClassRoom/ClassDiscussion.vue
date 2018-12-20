<template>
<div>
  <div class="_20px-bottom-margin">
          <div class="flex-space-between">
            <h1 class="heading-2 grey">Discussion</h1>
            <div class="div-block-121">
              <div class="div-block-113 project side cursor-pointer" @click="addComment()"><img src="../../assets/add-white.svg" height="20" alt="" class="image-29">
                <div class="text-block-14">Make a comment</div>
              </div>
              <div class="div-block-113 question side cursor-pointer" @click="addQuestion()"><img src="../../assets/add-white.svg" height="20" width="20" alt="" class="image-29">
                <div class="text-block-14">Ask a question</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card" v-show="isQuestion || isComment">
          <div class="_10px-pad-wrapper">
            <div class="flex-space-between">
              <div class="_20-right">
                <div class="horiz-left-align-justify-atart">
                  <div class="profile-picture _30"></div>
                </div>
              </div>
              <div class="align-right-justify-start" >
                <div class="form-block-3 w-form">
                  <form id="email-form" name="email-form" data-name="Email Form">
                    <input type="text" ref="comment" v-on:keydown.enter.prevent='onSubmit' v-model="discus.body" class="comment-block w-input" maxlength="256" name="Comment-2" data-name="Comment 2" :placeholder="placeholderValue"  id="Comment-2">
                  </form>
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
        </div>
        <div data-duration-in="500" data-duration-out="250" data-easing="ease-in-out" class="tabs-3 w-tabs">
          <div class="tabs-menu classroom w-tab-menu">
            <a data-w-tab="Tab 1" @click="selectTab('all')" class="tab-link-tab-2 all w-inline-block w-tab-link" :class="{'w--current': currentTab == 'all'}">
              <div>All</div>
              <div class="notification all">{{lessonDiscussions.comments && lessonDiscussions.questions ? (lessonDiscussions.comments.length + lessonDiscussions.questions.length) : 0}}</div>
            </a>
            <a data-w-tab="Tab 2" @click="selectTab('comment')" class="tab-link-tab-2 project w-inline-block w-tab-link" :class="{'w--current': currentTab == 'comment'}">
              <div>Comments</div>
              <div class="notification project">{{lessonDiscussions.comments ? lessonDiscussions.comments.length : 0 }}</div>
            </a>
            <a data-w-tab="Tab 3" @click="selectTab('question')" class="tab-link-tab-2 question w-inline-block w-tab-link" :class="{'w--current': currentTab == 'question'}">
              <div>Questions</div>
              <div class="notification question">{{lessonDiscussions.questions ? lessonDiscussions.questions.length : 0 }}</div>
            </a>
            <a data-w-tab="Tab 4" class="tab-link-tab-2 class w-inline-block w-tab-link" :class="{'w--current': currentTab == 'announcement'}">
              <div>Announcements</div>
              <div class="notification class">4</div>
            </a>
          </div>
            <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">

            <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active" v-if="currentTab == 'all'">
          <discussion-item v-for="disc in lessonDiscussions.comments" :key="disc._id" :discussItem="disc" />
          <discussion-item v-for="disc in lessonDiscussions.questions" :key="disc._id" :discussItem="disc" />

        </div>
          <div data-w-tab="Tab 2" class="w-tab-pane w--tab-active" v-if="currentTab == 'comment'">
          <discussion-item v-for="disc in lessonDiscussions.comments" :key="disc._id" :discussItem="disc" />
          </div>
            <div data-w-tab="Tab 3" class="w-tab-pane w--tab-active" v-if="currentTab == 'question'">
          <discussion-item v-for="disc in lessonDiscussions.questions" :key="disc._id" :discussItem="disc" />
            </div>
            <div data-w-tab="Tab 4" class="w-tab-pane w--tab-active" v-if="currentTab == 'announcemnet'"></div>
            </transition>
        </div>
</div>
 </template>
<script>
import DiscussionItem from "./DiscussionItem";
export default {
  components: {
    DiscussionItem
  },
  props: ["classId", "lesson"],
  data() {
    return {
      currentTab: "all",
      discus: {
        body: "",
        type: ""
      },
      lessonDiscussions: {comments:[], questions: []},
      currentLessonId: ""
    };
  },
  created() {
    this.currentLessonId = this.lesson._id;
    this.fetchDiscussions();
  },
  watch: {
    lesson: {
      handler(val) {
        if (this.currentLessonId != this.lesson._id) {
          this.currentLessonId = this.lesson._id;
          this.fetchDiscussions();
        }
      },
      deep: true
    }
  },
  methods: {
    addComment() {
      if (this.isQuestion || !this.discus.type) {
        this.discus.type = "Comment";
        this.discus.body = "";
        this.$nextTick(() => {
          this.$refs.comment.focus();
        });
      }
    },
    addQuestion() {
      if (this.isComment || !this.discus.type) {
        this.discus.type = "Question";
        this.discus.body = "";
        this.$nextTick(() => {
          this.$refs.comment.focus();
        });
      }
    },
    onSubmit() {
      if (this.discus.body && this.discus.type) {
        this.$store
          .dispatch("discussion/addLessonDiscussion", {
            payload: this.discus,
            classId: this.classId,
            lessonId: this.lesson._id
          })
          .then(
            resp => {
              if (resp.data.type === "Comment") {
                this.lessonDiscussions.comments.push(resp.data);
              }
              if (resp.data.type === "Question") {
                this.lessonDiscussions.questions.push(resp.data);
              }
              this.discus.body = "";
            },
            err => {}
          );
      }
    },
    selectTab(tabName) {
      this.currentTab = tabName;
    },
    fetchDiscussions() {
      this.$store
        .dispatch("discussion/getLessonDiscussion", {
          classId: this.classId,
          lessonId: this.lesson._id
        })
        .then(resp => {
          this.lessonDiscussions = resp.data;
        });
    }
  },
  computed: {
    isQuestion() {
      return this.discus.type === "Question";
    },
    isComment() {
      return this.discus.type === "Comment";
    },
    placeholderValue() {
      let palceholder = "Write comment here";
      if (this.isComment) {
        palceholder = "Write comment here";
      }
      if (this.isQuestion) {
        palceholder = "Write question here";
      }
      return palceholder;
    }
  }
};
</script>
