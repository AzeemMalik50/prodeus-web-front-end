<template>
  <div class="card">
    <div class="div-block-66"><img src="../../assets/fortune.jpg" alt="" class="image-10"></div>
    <div class="_20px-pad-wrapper">
      <div class="profile-picture post"></div>
      <div class="_20px-margin">
        <h2 class="heading-6 center project" v-html="title"></h2>
      </div>
      <div class="_30px-bottom-margin">
        <h1 class="heading-4 center" v-html="description"></h1>
      </div>
      <div class="flex-space-around">
        <Heart :class="{heart: liked}" />
        <Reblog class="view" />
        <Comment />
        <Share />
      </div>
    </div>
  </div>
</template>

<script>
import Heart from "@/assets/heart.svg";
import Reblog from "@/assets/reblog.svg";
import Comment from "@/assets/comment.svg";
import Share from "@/assets/share.svg";

export default {
  props: ["liked", "title", "description"],
  components: {
    Heart,
    Comment,
    Share,
    Reblog
  }
};
</script>

<style lang="scss" scoped>
.heart {
  path {
    fill: #f3181d !important;
  }
}

svg {
  width: 18px;
  cursor: pointer;
}

.view {
  .cls-1 {
    fill: #bcbcbc;
  }
}
</style>
