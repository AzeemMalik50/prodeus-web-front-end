<template>
  <div class="card">
    <div class="class-header">
      <div class="flex-space-between">
        <h1 class="heading-6 grey">{{type}}</h1>
        <star-rating :inline="true" :star-size="16" :read-only="true" v-model="rating" :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :rating="5" inactive-color="#dbdbdb" active-color="#8446E8"></star-rating>
      </div>
    </div>
    <div class="class-image" @click="goClass()"></div>
    <div class="_20px-pad-wrapper">
      <div class="profile-picture post"></div>
      <div class="_20px-margin">
        <h2 class="heading-6 center" v-html="title"></h2>
      </div>
      <div class="_30px-bottom-margin">
        <h1 class="heading-4 center" v-html="description"></h1>
      </div><a href="#" class="link outline">{{enrolled ? 'Enrolled': 'Enroll'}}</a></div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "ClassCard",
  props: ["type", "rating", "title", "description", "enrolled"],
  components: {
    StarRating
  },
  data() {
    return {};
  },
  methods: {
    goClass() {
      this.$router.push("/class-page");
    }
  }
};
</script>

<style>
.vue-star-rating-star {
  margin-right: 1px !important;
}

.class-image {
  cursor: pointer;
}
</style>
