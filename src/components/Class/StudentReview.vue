<template>
    <div class="_30px-top-bottom-20-side-padding">
        <div class="_20px-bottom-margin">
            <user-thumbnail :user="review.user" :myClass="'profile-picture center'" />
        </div>
        <div class="_20px-bottom-margin">
            <h1 class="paragraph-3 center">@{{review.user.fullName}}</h1>
        </div>
        <div class="_15px-bottom-padding">
            <RatingStars :rating="review.rating" />
        </div>
        <p class="paragraph center">{{review.body}}</p>
        <div class="_1px-line-spacer"></div>
    </div>
</template>

<script>
import RatingStars from "./RatingStars.vue";
export default {
  name: "StudentReview",
  props:['review'],
  components: {
    RatingStars
  },
  data() {
    return {
      rating: 4
    };
  }
};
</script>

<style lang="sass" scoped>

</style>
