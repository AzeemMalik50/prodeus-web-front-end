<template>
<!-- <img :class="[getClass]" v-if="profilePic" :src="profilePic" @click="goToProfile()" /> -->
      <div :class="[getClass]" class="cursor-pointer" v-if="profilePic" :style="backImage" @click="goToProfile()"></div>
<div :class="[getClass]" class="cursor-pointer" v-else @click="goToProfile()"></div>

</template>
<script>
export default {
  props: ["user", "myClass", "link"],
  methods: {
    goToProfile() {
      if (this.link !== 'no') {
        this.$router.push({
          name: "userProfile",
          params: {
            userId: this.user._id
          }
        });
      }
    }
  },
  computed: {
    profilePic() {
      if (!this.user) {
        return null;
      }
      if (this.user.local && this.user.local.img) {
        return (
          process.env.VUE_APP_API_BASE_URL + "/media/" + this.user.local.img
        );
      } else if (this.user.facebook && this.user.facebook.img) {
        return this.user.facebook.img;
      } else if (this.user.google && this.user.google.img) {
        return this.user.google.img;
      } else {
        return null;
      }
    },
    getClass() {
      if (this.myClass) {
        return this.myClass;
      } else {
        return "profile-picture _30";
      }
    },
    backImage() {
      return { backgroundImage: `url(${this.profilePic})` };
    }
  }
};
</script>
