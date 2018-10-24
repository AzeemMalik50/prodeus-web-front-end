<template>
  <div class="card">
    <div class="_20px-pad-wrapper">
      <div class="_10px-botttom-margin">
        <div class="rating-wrap">
          <h1 class="heading-13">4.1</h1>
          <RatingStars :rating="rating" />
          <h1 class="paragraph-2 grey">(138)</h1>
        </div>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">5 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14"></div>
        </div>
        <h2 class="paragraph grey">45.7%</h2>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">4 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14"></div>
        </div>
        <h2 class="heading-14">45.7%</h2>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">3 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14"></div>
        </div>
        <h2 class="heading-14">45.7%</h2>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">2 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14"></div>
        </div>
        <h2 class="heading-14">45.7%</h2>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">1 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14"></div>
        </div>
        <h2 class="heading-14">45.7%</h2>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from "./RatingStars.vue";
export default {
  name: "ClassRagtingReview",
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

<style lang="scss" scoped>
</style>
