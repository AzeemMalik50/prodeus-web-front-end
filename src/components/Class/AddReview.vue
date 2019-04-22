<template>
  <div class="modal-wrapper" @click.self="closeReview()">
    <div class="_100-vh center" @click.self="closeReview()">
      <div class="addpost-modal">
        <div class="card add" v-if="!isSubmitted">
          <div class="signifier"></div>
          <div class="_30px-bottom-margin">
            <div class="form-block-4 w-form">
              <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                <input type="text" class="text-field-2 w-input" maxlength="256" v-model="review.body" name="Review" data-name="Review" placeholder="Tell us about your experience with this class…" id="Review" required="">
              </form>
              <div class="w-form-done">
                <div>Thank you! Your review has been submitted!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div class="_10px-botttom-margin">
            <h1 class="heading-37">Rate Your Experience</h1>
          </div>
          <div class="_40px-bottom-margin">
            <!-- <img src="../../assets/Group-6581.svg" height="25" alt=""> -->
            <star-rating :inline="true" :star-size="28" v-model="review.rating" :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :rating="5" inactive-color="#dbdbdb" active-color="#8446E8"></star-rating>

          </div>
          <div class="div-block-92">
            <div class="text-block-18 cursor-pointer" @click="closeReview">Skip</div>
            <a href="#" class="link" @click.prevent="submitReview" :class="{'grey': !review.body || !review.rating}">Submit</a>
            </div>
        </div>
        <div v-else class="card add">
          <div class="signifier"></div>
          <div class="_30px-bottom-margin">
            <div class="form-block-4 w-form">
              <div class="w-form-done display-block">
                <div>Thank you! Your review has been submitted!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
              <div class="div-block-92">
            <div class="text-block-18 cursor-pointer" @click="closeReview">Oke</div>
            <a href="#" class="link" @click.prevent="closeReview" >Done</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StarRating from "vue-star-rating";
  import {
    mapGetters,
    mapState
  } from "vuex";

  export default {
    components: {
      StarRating
    },
    data() {
      return {
        review: {
          rating: 0,
          body: ""
        },
        isSubmitted: false
      };
    },
    methods: {
      closeReview() {
        this.$store.dispatch("classes/closeClassReview");
      },
      submitReview() {
        this.$store
          .dispatch("classes/submitClassReview", {
            review: this.review,
            classId: this.reviewClass.id
          })
          .then(result => {
            this.isSubmitted = true;
          });
      }
    },
    computed: {
      ...mapState({
        reviewClass: state => state.classes.reviewClass
      })
    }
  };
</script>
<style lang="scss" scoped>
.display-block {
  display: block !important;
}
</style>
