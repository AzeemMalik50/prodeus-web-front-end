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
           <div class="div-block-113 class side cursor-pointer" @click="addAnnouncement()"><img src="../../assets/add-white.svg" height="20" width="20" alt="" class="image-29">
            <div class="text-block-14">Make an announcement</div>
          </div>
           <div class="div-block-113 class side cursor-pointer" @click="addReview()"><img src="../../assets/add-white.svg" height="20" width="20" alt="" class="image-29">
            <div class="text-block-14">Add review</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" v-if="isQuestion || isComment || isAnnouncement">
      <div class="_10px-pad-wrapper">
        <comment-input :ref="'classComment'+ classId" :discId="classId" :discItem="discus" :onSubmit="onSubmit" :placeholdertext="placeholderValue" />

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
        <a data-w-tab="Tab 4" @click="selectTab('announcement')" class="tab-link-tab-2 class w-inline-block w-tab-link" :class="{'w--current': currentTab == 'announcement'}">
          <div>Announcements</div>
          <div class="notification class">{{lessonDiscussions.announcements ? lessonDiscussions.announcements.length : 0 }}</div>
        </a>
      </div>
      <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">

        <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active" v-if="currentTab == 'all'">
          <div class="tabs-content-2 w-tab-content">

            <reply-item v-for="disc in lessonDiscussions.comments" :key="disc._id" :discussItem="disc" />
            <reply-item v-for="disc in lessonDiscussions.questions" :key="disc._id" :discussItem="disc" />
            <reply-item v-for="disc in lessonDiscussions.announcements" :key="disc._id" :discussItem="disc" />

          </div>

        </div>
        <div data-w-tab="Tab 2" class="w-tab-pane w--tab-active" v-if="currentTab == 'comment'">
          <div class="tabs-content-2 w-tab-content">

            <reply-item v-for="disc in lessonDiscussions.comments" :key="disc._id" :discussItem="disc" />
          </div>
        </div>
        <div data-w-tab="Tab 3" class="w-tab-pane w--tab-active" v-if="currentTab == 'question'">
          <div class="tabs-content-2 w-tab-content">
            <reply-item v-for="disc in lessonDiscussions.questions" :key="disc._id" :discussItem="disc" />
          </div>
        </div>
        <div data-w-tab="Tab 4" class="w-tab-pane w--tab-active" v-if="currentTab == 'announcement'">
          <div class="tabs-content-2 w-tab-content">
            <reply-item v-for="disc in lessonDiscussions.announcements" :key="disc._id" :discussItem="disc" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import DiscussionItem from "./DiscussionItem";
import ReplyItem from "./ReplyItem";

export default {
  components: {
    DiscussionItem,
    ReplyItem
  },
  props: ["classId", "lesson"],
  data() {
    return {
      currentTab: "all",
      discus: {
        body: "",
        type: "",
        media: {
          mediaId: "",
          type: ""
        },
        selectedMedia: {
          mediaType: "",
          file: null
        }
      },
      lessonDiscussions: {
        comments: [],
        questions: []
      },
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
    addReview(){
      this.$store.dispatch('classes/openClassReview', this.classId);
    },
    addComment() {
      if (this.isQuestion || !this.discus.type) {
        this.discus.type = "Comment";
        this.discus.body = "";
        this.$nextTick(() => {
          this.$refs["classComment" + this.classId].setFocus();
        });
      }
    },
    addQuestion() {
      if (this.isComment || !this.discus.type) {
        this.discus.type = "Question";
        this.discus.body = "";
        this.$nextTick(() => {
          this.$refs["classComment" + this.classId].setFocus();
        });
      }
    },
    addAnnouncement() {
      if (this.isComment || !this.discus.type) {
        this.discus.type = "Announcement";
        this.discus.body = "";
        this.$nextTick(() => {
          this.$refs["classComment" + this.classId].setFocus();
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
              if (resp.data.type === "Announcement") {
                this.lessonDiscussions.announcements.push(resp.data);
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
    isAnnouncement() {
      return this.discus.type === "Announcement";
    },
    placeholderValue() {
      let palceholder = "Write comment here";
      if (this.isComment) {
        palceholder = "Write comment here";
      }
      if (this.isQuestion) {
        palceholder = "Write question here";
      }
      if(this.isAnnouncement){
        palceholder = "Add announcement here";
      }
      return palceholder;
    }
  }
};
</script>
