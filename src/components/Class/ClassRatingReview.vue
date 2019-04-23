<template>
  <div class="card">
    <div class="_20px-pad-wrapper">
      <div class="_10px-botttom-margin">
        <div class="rating-wrap">
          <h1 class="heading-13">{{rating}}</h1>
          <RatingStars :rating="rating" />
          <h1 class="paragraph-2 grey">({{totalRatings}})</h1>
        </div>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">5 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14" :style="{width: ratingPercentage['5'] + '%' }"></div>
        </div>
        <h2 class="heading-14">{{ratingPercentage['5']}}%</h2>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">4 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14" :style="{width: ratingPercentage['4'] + '%' }"></div>
        </div>
        <h2 class="heading-14">{{ratingPercentage['4']}}%</h2>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">3 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14" :style="{width: ratingPercentage['3'] + '%' }"></div>
        </div>
        <h2 class="heading-14">{{ratingPercentage['3']}}%</h2>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">2 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14" :style="{width: ratingPercentage['2'] + '%' }"></div>
        </div>
        <h2 class="heading-14">{{ratingPercentage['2']}}%</h2>
      </div>
      <div class="div-block-13">
        <h2 class="heading-9">1 Stars</h2>
        <div class="div-block-12">
          <div class="div-block-14" :style="{width: ratingPercentage['1'] + '%' }"></div>
        </div>
        <h2 class="heading-14">{{ratingPercentage['1']}}%</h2>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from "./RatingStars.vue";
export default {
  name: "ClassRagtingReview",
  props: ["ratingPercentage", "rating", "totalRatings"],
  components: {
    RatingStars
  }
};
</script>

<style lang="scss" scoped>
.heading-14 {
  width: 20px !important;
}
</style>
