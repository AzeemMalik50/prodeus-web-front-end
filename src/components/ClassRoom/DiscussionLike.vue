<template>
   <h6 class="heading-18 discus-hover" @click="toggelLike()" :class="{liked: liked}">{{liked ? 'Liked' : 'Like'}}</h6>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["discussItem"],
  data() {
    return {
      likes: []
    };
  },
  created() {
    this.likes = this.discussItem.likes.slice(0);
  },
  methods: {
    toggelLike() {
      if (this.liked) {
        this.$store
          .dispatch("discussion/removeLikeDiscussion", this.discussItem._id)
          .then(
            resp => {
              let likeIndex = this.likes.indexOf(this.currentUser._id);
              this.likes.splice(likeIndex, 1);
            },
            err => {}
          );
      } else {
        this.$store
          .dispatch("discussion/likeDiscussion", this.discussItem._id)
          .then(
            resp => {
              this.likes.push(this.currentUser._id);
            },
            err => {}
          );
      }
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.authentication.user
    }),
    liked() {
      return this.likes.indexOf(this.currentUser._id) > -1;
    }
  }
};
</script>
<style lang="scss" scoped>
.liked {
  color: #8446e8;
}
</style>
