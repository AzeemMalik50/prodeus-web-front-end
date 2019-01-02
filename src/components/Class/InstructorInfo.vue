<template>
  <div class="card">
    <div class="_20px-pad-wrapper">
      <div class="_20px-bottom-margin">
        <div class="profile-picture center">
            <user-thumbnail :user="instructor" :myClass="'link-block-3 w-inline-block profile-pic'" />

          <!-- <img @click="goTo({name:'userProfile', params:{userId: instructor._id}})" :src="profilePic" class="link-block-3 w-inline-block profile-pic" /> -->
        </div>
      </div>
      <div class="_10px-botttom-margin">
        <h1 class="heading-2">{{instructor.fullName}}</h1>
      </div>
      <div class="_20px-bottom-margin">
        <h2 class="heading-6 center">Instructor</h2>
      </div>
      <div class="_10px-botttom-margin">
        <h1 class="heading-7 grey center">Teacher Bio</h1>
      </div>
      <p class="paragraph-2 center">{{instructor.biography}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["instructor"],
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  },
  computed: {
    profilePic() {
      if (this.instructor.img) {
        return (
          process.env.VUE_APP_API_BASE_URL + "/media/" + this.instructor.img.id
        );
      } else if (this.instructor.facebook && this.instructor.facebook.img) {
        return this.instructor.facebook.img;
      } else if (this.instructor.google && this.instructor.google.img) {
        return this.instructor.google.img;
      } else {
        return null;
      }
    }
  }
};
</script>
