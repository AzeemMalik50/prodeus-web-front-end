<template>
  <div>
    <div data-collapse="none" data-animation="default" data-duration="400" class="navbar w-nav">
      <div class="nav-wrap">
        <div class="nav-menu left">
          <!-- <a href="#" class="brand w-nav-brand"> -->
            <router-link to="/" class="brand w-nav-brand">
            <logo class="logo" />
            </router-link>
          <!-- </a> -->
          <form action="/search" class="search w-form">
            <Search class="image-4" />
            <input type="search" class="search-input w-input" maxlength="256" name="query" placeholder="Search prodeus" id="search" required="">
            <input type="submit" value="Search" class="search-button w-button"></form>
          <a href="#" class="w-inline-block">
            <AddPost class="add-post" />
          </a>
        </div>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <a href="#" class="link-block w-inline-block">
            <ClassroomInactive class="height-20" />
          </a>
          <a href="#" class="link-block w-inline-block">
            <MessagesInactive class="width-20" />
          </a>
          <a href="#" class="link-block w-inline-block">
            <NotificationsInactive class="height-20" />
          </a>
          <a href="#" class="link-block w-inline-block">
            <Profile class="width-20" />
          </a>
        </nav>
      </div>
    </div>
    <div data-collapse="none" data-animation="default" data-duration="400" class="navbar-bottom w-nav">
      <nav role="navigation" class="nav-menu bottom w-nav-menu">
        <a href="#" class="link-block w-inline-block">
          <ClassroomInactive class="height-24" />
        </a>
        <a href="#" class="link-block w-inline-block">
          <MessagesInactive class="width-24" />
        </a>
        <a href="#" class="link-block w-inline-block">
          <NotificationsInactive class="height-24" />
        </a>
        <a href="#" class="link-block w-inline-block">
          <Profile class="width-24" />
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/Logo.svg";
import Search from "@/assets/Search.svg";
import AddPost from "@/assets/Add-Post.svg";
import ClassroomInactive from "@/assets/ClassroomInactive.svg";
import MessagesInactive from "@/assets/MessagesInactive.svg";
import NotificationsInactive from "@/assets/NotificationsInactive.svg";
import Profile from "@/assets/Profile.svg";

export default {
  components: {
    Logo,
    Search,
    AddPost,
    ClassroomInactive,
    MessagesInactive,
    NotificationsInactive,
    Profile
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
