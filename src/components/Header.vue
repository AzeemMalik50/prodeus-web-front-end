<template>
  <div>
    <div data-collapse="none" data-animation="default" data-duration="400" class="navbar w-nav">
      <div class="nav-wrap">
        <div class="nav-menu left">
          <!-- <a href="#" class="brand w-nav-brand"> -->
          <router-link to="/" class="brand w-nav-brand">
            <img src="@/assets/Logo.svg" class="logo" />
          </router-link>
          <!-- </a> -->
          <form action="/search" class="search w-form">
            <img src="@/assets/Search.svg" class="image-4" />
            <input type="search" class="search-input w-input" maxlength="256" name="query" placeholder="Search prodeus" id="search" required="">
            <input type="submit" value="Search" class="search-button w-button"></form>
          <!-- <a class="w-inline-block cursor-pointer"  >
              <img src="@/assets/Add-Post.svg" class="add-post" />
            </a> -->
          <a class="link-block-4 w-inline-block cursor-pointer" @click.prevent="toggelePanel('isAdd')">
            <div class="div-block-113"><img src="@/assets/add-white.svg" height="20" alt="" class="image-29">
              <div class="text-block-14">Post</div>
            </div><img src="@/assets/Profile.svg" width="24" alt="" class="image-39"></a>
          <img @click="toggelMenu" src="@/assets/Menu_1.svg" width="24" alt="" class="image-43">
        </div>

        <nav role="navigation" class="nav-menu w-nav-menu">
          <router-link :to="{ name: 'myClasses', params: { id: loggedInUser._id} }" class="link-block w-inline-block">
            <img src="@/assets/ClassroomInactive.svg" class="height-20" />
          </router-link>
          <!-- <a href="#" class="link-block w-inline-block">
              <img src="@/assets/MessagesInactive.svg" class="width-20" />
            </a> -->
          <a class="link-block w-inline-block cursor-pointer" cursor-pointer @click.prevent.stop="toggelNotification">
              <img src="@/assets/notifications_active.svg" v-if="unreadCount > 0" class="height-20" />
              <img src="@/assets/NotificationsInactive.svg" v-else class="height-20" />
            </a>
          <a class="link-block w-inline-block cursor-pointer cursor-pointer" @click.prevent="toggelePanel('isUser')">
            <!-- <img :src="profilePic" v-if="profilePic" class="width-20 profile-pic" /> -->
            <user-thumbnail :user="loggedInUser" :myClass="'profile-picture _30'" :link="'no'" />
            <!-- <img src="@/assets/Profile.svg" v-else class="width-20" /> -->
          </a>
        </nav>
      </div>
    </div>
    <transition name="slide" v-if="isMenuOpen">
      <div class="page-section image-43">
        <div class="div-block-106 div-block-149">
          <div class="div-block-112 alt" @click="openProfileSetting(); isMenuOpen = false">
            <div class="horiz-left-align-justify-atart">
              <img src="@/assets/settings-work-tool-grey.svg" width="20" alt="" class="image-28"></div><a href="#" class="link-5">Account Settings</a></div>
          <div class="div-block-112 alt" @click="logOut(); isMenuOpen = false">
            <div class="horiz-left-align-justify-atart"><img src="@/assets/logout.svg" width="20" alt="" class="image-28"></div><a href="#" class="link-5">Log Out</a></div>
        </div>
      </div>
    </transition>
    <div class="navmodal-wrap">
      <div class="navmodal-container">
        <div v-on-clickaway="closeNotif">
          <notifications v-show="isNotify" />
        </div>
        <div class="div-block-104 user" v-if="isUser" v-on-clickaway="closeUser">
          <div class="div-block-105">
            <h1 class="heading-41">My Account</h1>
          </div>
          <img src="../assets/Path-13444.svg" height="26" alt="" class="image-27">
          <div class="div-block-106">
            <div class="div-block-112" @click="toRoute('profile');toggelePanel('isUser')">
              <div class="horiz-left-align-justify-atart">
                <img src="../assets/Profile.svg" width="20" alt="" class="image-28"></div>
              <router-link :to="{name:'profile'}" class="link-5">View my profile</router-link>
            </div>
            <div class="div-block-112">
              <div class="horiz-left-align-justify-atart">
                <img src="../assets/settings-work-tool-grey.svg" width="20" alt="" class="image-28">
              </div><a href="#" @click.prevent="openProfileSetting()" class="link-5">Account Settings</a></div>
            <div class="div-block-112" @click="logOut()">
              <div class="horiz-left-align-justify-atart">
                <img src="../assets/logout.svg" width="20" alt="" class="image-28">
              </div><a href="#" class="link-5">Log Out</a></div>
          </div>
        </div>
        <div class="div-block-104 add" v-if="isAdd && isDeskTop" v-on-clickaway="closeAdd">
          <div class="div-block-114">
            <div class="_10px-botttom-margin cursor-pointer">
              <div class="div-block-113 project" @click="openPostForm('project')">
                <img src="../assets/add-white.svg" height="20" alt="" class="image-29">
                <div class="text-block-14">Share your work</div>
              </div>
            </div>
            <div class="_10px-botttom-margin cursor-pointer">
              <div class="div-block-113 question" @click="openPostForm('question')">
                <img src="../assets/add-white.svg" height="20" alt="" class="image-29">
                <div class="text-block-14">Ask a question</div>
              </div>
            </div>
            <div class="_10px-botttom-margin"></div>
            <div class="div-block-113 class cursor-pointer" @click="openCreateClass()">
              <img src="../assets/add-white.svg" height="20" alt="" class="image-29">
              <div class="text-block-14">Create a class</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-collapse="none" data-animation="default" data-duration="400" class="navbar-bottom w-nav">
      <nav role="navigation" class="nav-menu bottom w-nav-menu">
        <router-link :to="{ name: 'myClasses', params: { id: loggedInUser._id} }" @click="isMenuOpen = false" class="link-block w-inline-block">
          <img src="@/assets/ClassroomInactive.svg" class="height-24" />
        </router-link>
        <a href="#" class="link-block w-inline-block" @click.prevent="toggelePanel('isAdd');isMenuOpen = false">
          <img src="@/assets/Group-6084.svg" height="24" alt=""></a>
        <router-link to="/" class="link-block w-inline-block" @click="isMenuOpen = false">
          <img src="@/assets/Logo.svg" height="24" alt="" class="image-40">
        </router-link>
        <a href="#" class="link-block w-inline-block" @click.prevent.stop="toggelNotification(); isMenuOpen = false">
            <img src="@/assets/notifications_active.svg" v-if="unreadCount > 0"  class="width-24" />
            <img src="@/assets/MessagesInactive.svg" v-else class="width-24" />
          </a>
        <router-link :to="{name:'profile'}" @click="isMenuOpen = false" class="link-block w-inline-block">
          <img src="@/assets/Profile.svg" class="width-24" />
        </router-link>
      </nav>
    </div>
    <div class="navmodal-wrap" v-if="isAdd && !isDeskTop" @click.self="toggelePanel('isAdd')">
      <div class="div-block-147" @click.self="toggelePanel('isAdd')">
        <div class="div-block-114" v-on-clickaway="closeAdd">
          <div class="_10px-botttom-margin">
            <div class="div-block-113 project" @click="openPostForm('project')">
              <img src="images/add-white.svg" height="20" alt="" class="image-29">
              <div class="text-block-14">Share your work</div>
            </div>
          </div>
          <div class="_10px-botttom-margin">
            <div class="div-block-113 question" @click="openPostForm('question')">
              <img src="images/add-white.svg" height="20" alt="" class="image-29">
              <div class="text-block-14">Ask a question</div>
            </div>
          </div>
          <div class="_10px-botttom-margin"></div>
          <div class="div-block-113 class" @click="openCreateClass()">
            <img src="images/add-white.svg" height="20" alt="" class="image-29">
            <div class="text-block-14">Create a class</div>
          </div>
        </div>
      </div>
    </div>
    <AddClass v-if="showCreateClass" />
    <create-post v-if="showPostForm" :type="postType" />
    <profile-setting v-if="showProfileSetting" />
    <project-detail v-if="isProjectOpen" />
    <question-detail v-if="isQuestionOpen" />
    <share-modal v-if="showSocailShare" />
    <create-post v-if="showAnswerPost" :type="answerPost" :parentPost="selectedQuestion" />
    <project-detail v-if="isAssignmentOpen" isAssignment="true" />

  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { mixin as clickaway } from "vue-clickaway";

import AddClass from "../views/AddClass";
import CreatePost from "../views/CreatePost";
import ProjectDetail from "@/views/ProjectDetail";
import QuestionDetail from "@/views/QuestionDetail";
import Notifications from "./Notifications";
import ProfileSetting from "../components/Profile/Settings";
export default {
  components: {
    AddClass,
    CreatePost,
    Notifications,
    ProfileSetting,
    ProjectDetail,
    QuestionDetail
  },
  mixins: [clickaway],
  data() {
    return {
      isMenuOpen: false,
      answerPost: "Answer",
      postType: "",
      isAdd: false,
      isNotify: false,
      isUser: false,
      windowWidth: window.screen.width
    };
  },
  created() {
    this.$cookies.set(
      "accessToken",
      JSON.parse(localStorage.getItem("user")).accessToken,
      "1m"
    );
    this.$store.dispatch("notification/getNotificationsCount");
    window.addEventListener("resize", this.handleResize);
  },
  watch: {
    $route(to, from) {
      this.isMenuOpen = false
      this.closeAll();
    }
  },
  methods: {
    toggelMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.windowWidth = window.screen.width;
    },
    toggelePanel(name) {
      if (name == "isAdd") {
        this.isNotify = false;
        this.isUser = false;
      }
      if (name == "isNotify") {
        this.isAdd = false;
        this.isUser = false;
      }
      if (name == "isUser") {
        this.isAdd = false;
        this.isNotify = false;
      }
      this[name] = !this[name];
    },
    toggelNotification() {
      setTimeout(() => {
        this.isNotify = !this.isNotify;
      }, 200);
    },
    openProfileSetting() {
      this.closeAll();
      this.$store.dispatch("setProfileSettingForm", true);
    },
    openCreateClass() {
      this.isAdd = false;
      this.$store.dispatch("changeCreateClass", true);
    },
    openPostForm(type) {
      this.isAdd = false;
      this.postType = type;
      this.$store.dispatch("toggelPostForm", true);
    },
    logOut() {
      this.$store.dispatch("authentication/logout");
      this.$cookies.remove("accessToken");
    },
    toRoute(name) {
      this.$router.push({
        name: name
      });
    },
    closeAll() {
      this.isAdd = false;
      this.isNotify = false;
      this.isUser = false;
    },
    closeAdd() {
      if (this.isAdd) {
        this.isAdd = false;
      }
    },
    closeNotif() {
      if (this.isNotify) {
        this.isNotify = false;
      }
    },
    closeUser() {
      if (this.isUser) {
        this.isUser = false;
      }
    }
  },
  computed: {
    loggedInUser() {
      return JSON.parse(localStorage.getItem("user"));
    },
    isDeskTop() {
      return this.windowWidth > 991;
    },
    ...mapGetters(["showCreateClass", "showPostForm", "showAnswerPost"]),
    ...mapState({
      unreadCount: state => state.notification.unreadCount,
      showProfileSetting: state => state.showProfileSetting,
      isProjectOpen: state => state.isProjectOpen,
      isAssignmentOpen: state => state.isAssignmentOpen,
      showSocailShare: state => state.showSocailShare,
      selectedQuestion: state => state.post.selectedQuestion,
      isQuestionOpen: state => state.isQuestionOpen
    })
  }
};
</script>

<style lang="scss">
.logo {
  width: 25px;
  .cls-1 {
    fill: #e04859;
  }
  .cls-2 {
    fill: #ebcb4d;
  }
  .cls-3 {
    fill: #3ea7f4;
  }
  .cls-4 {
    fill: #e84457;
  }
  .cls-5 {
    fill: #3e99f4;
  }
}

.add-post {
  height: 24px;
  .cls-1 {
    fill: #bcbcbc;
  }
  .cls-2 {
    fill: none;
    stroke: #f5f5f4;
    stroke-width: 2px;
  }
}

.image-4 {
  height: 18px;
  .cls-1 {
    fill: #bcbcbc;
  }
  .cls-2 {
    fill: none;
    stroke: #f5f5f4;
    stroke-width: 2px;
  }
}

.width-20 {
  width: 20px;
}

.height-20 {
  height: 20px;
}

.width-24 {
  width: 24px;
}

.height-24 {
  height: 24px;
}

svg {
  .cls-1 {
    fill: #bcbcbc;
  }
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
