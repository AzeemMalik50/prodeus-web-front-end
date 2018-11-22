<template>
<div>
<div class="card" @click="openCreateClass()">
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
        <img src="@/assets/heart.svg" :class="{'heart-active': liked}" />
        <img src="@/assets/reblog.svg" class="reblog-active" />
        <img src="@/assets/comment.svg" class="comment-active"/>
        <img src="@/assets/share.svg" class="share-active" />
      </div>
    </div>
  </div>
    <Project v-if="isProjectOpen" />
</div>
  
</template>

<script>
import { mapGetters } from "vuex";
import Project from "../../views/Project.vue"
export default {
  props: ["liked", "title", "description"],
  components: {
    Project
  },
  methods: {
openCreateClass(){
  this.$store.dispatch('updateProjectDialog', true);  
}
  },
   computed: {
    ...mapGetters(["isProjectOpen"])
  }
};
</script>

<style lang="scss" scoped>
.heart-active {
  path {
    fill: #E04859 !important;
  }
}
.reblog-active {
  path {
    fill: #3EA7F4;
  }
}
.comment-active {
  path {
    fill: #EBCB4D;
  }
}
.share-active {
  path {
    fill: #22283a;
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
