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
          <a class="w-inline-block cursor-pointer"  @click.prevent="toggelePanel('isAdd')">
            <img src="@/assets/Add-Post.svg" class="add-post" />
          </a>
        </div>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <router-link :to="{ name: 'myClasses', params: { id: loggedInUser._id} }" class="link-block w-inline-block">
            <img src="@/assets/ClassroomInactive.svg" class="height-20" />
          </router-link>
          <!-- <a href="#" class="link-block w-inline-block">
            <img src="@/assets/MessagesInactive.svg" class="width-20" />
          </a> -->
          <a  class="link-block w-inline-block cursor-pointer" cursor-pointer @click.prevent="toggelePanel('isNotify')">
            <img src="@/assets/notifications_active.svg" v-if="unreadCount > 0" class="height-20" />
            <img src="@/assets/NotificationsInactive.svg" v-else class="height-20" />
          </a>
          <a  class="link-block w-inline-block cursor-pointer cursor-pointer" @click.prevent="toggelePanel('isUser')">
            <img :src="profilePic" v-if="profilePic" class="width-20 profile-pic" />
            <img src="@/assets/Profile.svg" v-else class="width-20" />
          </a>
        </nav>
      </div>
    </div>
      <div class="navmodal-wrap">
    <div class="navmodal-container">
      <notifications v-show="isNotify" />
      <div class="div-block-104 user" v-if="isUser">
        <div class="div-block-105">
          <h1 class="heading-41">My Account</h1>
        </div>
        <img src="../assets/Path-13444.svg" height="26" alt="" class="image-27">
        <div class="div-block-106">
          <div class="div-block-112" @click="toRoute('profile');toggelePanel('isUser')">
            <div class="horiz-left-align-justify-atart">
              <img src="../assets/Profile.svg" width="20" alt="" class="image-28"></div>
              <router-link :to="{name:'profile'}" class="link-5">View my profile</router-link></div>
          <div class="div-block-112">
            <div class="horiz-left-align-justify-atart">
              <img src="../assets/settings-work-tool-grey.svg" width="20" alt="" class="image-28"></div><a href="#" class="link-5">Account Settings</a></div>
          <div class="div-block-112" @click="logOut()">
            <div class="horiz-left-align-justify-atart">
              <img src="../assets/logout.svg" width="20" alt="" class="image-28">
              </div><a href="#" class="link-5">Log Out</a></div>
        </div>
      </div>
      <div class="div-block-104 add" v-if="isAdd">
        <div class="div-block-114">
          <div class="_10px-botttom-margin cursor-pointer">
            <div class="div-block-113 project" @click="openPostForm('project')">
              <img src="../assets/add-white.svg" height="20" alt="" class="image-29">
              <div class="text-block-14">Add a project</div>
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
        <a href="#" class="link-block w-inline-block">
          <img src="@/assets/ClassroomInactive.svg" class="height-24" />
        </a>
        <a href="#" class="link-block w-inline-block">
          <img src="@/assets/notifications_active.svg" v-if="unreadCount > 0"  class="width-24" />
          <img src="@/assets/MessagesInactive.svg" v-else class="width-24" />
        </a>
        <a href="#" class="link-block w-inline-block">
          <img src="@/assets/NotificationsInactive.svg" class="height-24" />
        </a>
        <a href="#" class="link-block w-inline-block">
          <img src="@/assets/Profile.svg" class="width-24" />
        </a>
      </nav>
    </div>
    <AddClass v-if="showCreateClass" />
    <create-post v-if="showPostForm" :type="postType" />

  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import AddClass from "../views/AddClass";
import CreatePost from "../views/CreatePost";
import Notifications from './Notifications';
export default {
  components: {
    AddClass,
    CreatePost,
    Notifications
  },
  data() {
    return {
      postType: "",
      isAdd: false,
      isNotify: false,
      isUser: false
    };
  },
  created() {
    this.$cookies.set(
      "accessToken",
      JSON.parse(localStorage.getItem("user")).accessToken,
      "1m"
    );
    this.$store.dispatch("notification/getNotificationsCount");

  },
  methods: {
    toggelePanel(name) {
      this[name] = !this[name];
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
    toRoute(name){
      this.$router.push({name:name})
    }
  },
  computed: {
    profilePic() {
      let storeUser = this.loggedInUser;
      if (storeUser.local.img) {
        return process.env.VUE_APP_API_BASE_URL + "/media/" + storeUser.img.id;
      } else if (storeUser.facebook && storeUser.facebook.img) {
        return storeUser.facebook.img;
      } else if (storeUser.google && storeUser.google.img) {
        return storeUser.google.img;
      } else {
        return null;
      }
    },
    loggedInUser() {
      return JSON.parse(localStorage.getItem("user"));
    },
    ...mapGetters(["showCreateClass", "showPostForm"]),
     ...mapState({
      unreadCount: state => state.notification.unreadCount
    }),
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
</style>
