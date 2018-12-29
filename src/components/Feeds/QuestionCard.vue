<template>
  <div class="card">
    <div class="_20px-pad-wrapper">
    <!-- <div class="profile-picture"></div>  -->
            <user-thumbnail :user="question.user" :myClass="'profile-picture'" />

      <div class="_20px-margin">
        <h2 class="heading-6 center question">Art &amp; Design History</h2>
      </div>
      <div class="_20px-bottom-margin">
        <h1 class="heading-4 center">
          {{question.title}}
          <!-- What artistic style is Monet associated with? -->
          </h1>
      </div>
      <div class="_20px-bottom-margin">
        <div class="div-block-73" v-if="answers.length">
          <div class="div-block-74">
            <h1 class="heading-28">Best answer</h1>
            <div class="text-block-5">from</div>
            <h1 class="heading-29">{{answers[0].user.fullName}}</h1>
          </div>
          <div class="div-block-75">
            <div class="div-block-76">
              <p class="paragraph-5">
                {{answers[0].title}}
                <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. -->
                </p>
            </div>
            <div class="div-block-77 min-width-15">
              <img src="@/assets/upvote.svg" />
              <h1 class="heading-30">{{voteCount}}</h1>
              <img src="@/assets/downvote.svg" />
            </div>
          </div>
        </div>
      </div><a class="link outline question">Answer</a></div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  computed: {
    answers() {
      if (this.question.replies && this.question.replies.length) {
        return this.question.replies.sort((a, b) => {
          return b.upVotes.length - a.upVotes.length;
        });
      } else {
        return [];
      }
    },
    voteCount(){
      return (this.answers[0].upVotes.length - this.answers[0].downVotes.length).toString();
    }
  }
};
</script>

<style scoped lang="scss">
svg {
  height: 16px;
}
.min-width-15 {
      min-width: 15px;
}
</style>
