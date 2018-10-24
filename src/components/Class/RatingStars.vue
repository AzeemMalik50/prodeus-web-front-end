<template>
    <star-rating :inline="true" :star-size="17" :read-only="true" v-model="rating" :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :rating="5" inactive-color="#dbdbdb" active-color="#EACB4D">
    </star-rating>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "RatingStars",
  props: ["rating"],
  components: {
    StarRating
  }
};
</script>

<style lang="scss" scoped>
</style>
