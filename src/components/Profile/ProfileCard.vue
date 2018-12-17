x<template>
  <div class="flexcolumn">
    <div class="card">
      <div class="_40-side-padding portfolio_image">
        <div class="div-block-120">
          <div class="_10px-botttom-margin">
            <h1 class="heading-4 center white">{{user.fullName}}</h1>
          </div>
          <div class="_20px-bottom-margin">
            <h1 class="heading-18 center">{{user.location}}</h1>
          </div>
          <div class="_20px-bottom-margin">
            <div class="flex-space-around">
              <div class="div-block-49">
                <div class="_5px-bottom-margin">
                  <h1 class="heading-4 center white">{{user.connections.length}}</h1>
                </div>
                <h1 class="heading-18 center">Connections</h1>
              </div>
              <div class="div-block-49">
                <div class="_5px-bottom-margin">
                  <h1 class="heading-4 center white">1.3k</h1>
                </div>
                <h1 class="heading-18 center">Posts</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="div-block-119" :style="background">
          <img v-if="loggedInUser._id === user._id" src="../../assets/pencil-edit-button.svg" @click="openForm(basicInfo)" width="14" alt="" class="image-30">
        </div>
      </div>
      <div class="_60px-block" v-if="loggedInUser._id !== user._id">
        <div class="_30px-side-padding">
          <div class="flex-space-around" v-if="isConnected"><a href="#" @click.prevent="disConnect()" class="tag blue">Connected</a></div>
          <div class="flex-space-around" v-else><a href="#" @click.prevent="connect()" class="tag blue">Connect</a></div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="_60px-block">
        <div class="_30px-side-padding">
          <div class="flex-space-around">
            <div class="social-icon"></div>
            <div class="social-icon blue"></div>
            <div class="social-icon yellow"></div>
            <div class="social-icon green"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  props: ["user"],
  data() {
    return {
      basicInfo: "",
      aboutMe: "",
      education: "",
      work: ""
    };
  },
  created() {
    this.basicInfo = this.PROFILE_FORMS.BASIC_INFO;
  },
  methods: {
    openForm(formName) {
      this.$store.dispatch("profile/setProfileForm", formName);
    },
    disConnect() {
      this.$store.dispatch("authentication/removeConnection", this.user._id);
    },
    connect() {
      this.$store.dispatch("authentication/addConnection", this.user._id);
    }
  },
  computed: {
    background() {
      return {
        "background-image": `url(${this.profilePic})`
      };
    },
    isConnected() {
      if( this.loggedInUser.connections && this.loggedInUser.connections.length > -1){
        return this.loggedInUser.connections.indexOf(this.user._id) > -1;
      } else {
        return false;
      }
    },
    profilePic() {
      let storeUser = this.user;
      if (storeUser.local.img) {
        return this.$apiBaseUrl + "/media/" + storeUser.local.img;
      } else if (storeUser.facebook && storeUser.facebook.img) {
        return storeUser.facebook.img;
      } else if (storeUser.google && storeUser.google.img) {
        return storeUser.google.img;
      } else {
        return null;
      }
    },
    ...mapState({
      loggedInUser: state => state.authentication.user,
      PROFILE_FORMS: state => state.profile.PROFILE_FORMS,
      profileForm: state => state.profile.notifications
    })
  }
};
</script>
