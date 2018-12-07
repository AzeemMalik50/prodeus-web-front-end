<template>
    <div class="_30px-top-bottom-20-side-padding">
        <div class="_20px-bottom-margin">
            <div class="profile-picture center"></div>
        </div>
        <div class="_20px-bottom-margin">
            <h1 class="paragraph-3 center">@willcairns</h1>
        </div>
        <div class="_15px-bottom-padding">
            <RatingStars :rating="rating" />
        </div>
        <p class="paragraph center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
            rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        <div class="_1px-line-spacer"></div>
    </div>
</template>

<script>
import RatingStars from "./RatingStars.vue";
export default {
  name: "StudentReview",
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
