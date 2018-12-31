<template>
<img :class="[getClass]" v-if="profilePic" :src="profilePic" @click="goToProfile()" />
<div :class="[getClass]" v-else @click="goToProfile()"></div>

</template>
<script>
export default {
  props: ["user", "myClass"],
  methods: {
    goToProfile(){
      this.$router.push({name: 'userProfile', params:{
        userId: this.user._id
      }})
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
  }
  },

};
</script>
