<template>
  <div class="modalwrapper" @click="closeModal()">
    <div class="post-wrapper">
      <div class="div-block-129 _380"><img src="images/Logo.svg" height="40" alt="" class="image-41">
        <div class="div-block-132">
          <h1 class="heading-44">Share with the world!</h1>
          <div class="_20px-bottom-margin">
            <p class="paragraph-9 grey">Even if they don’t have a Prodeus account…</p>
          </div>
          <div>
            <div class="flex-space-between">
              <!-- <social-sharing :url="data.url" :title="data.title" :description="data.text" :quote="data.title" hashtags="prodeus" :twitter-user="loggedInUser.fullName" inline-template>
                <div class="social-share-wrap">
                  <network network="facebook">
                    <facebook />
                  </network>
                  <network network="twitter">
                    <twitter />
                  </network>
                  <network network="pinterest">
                    <pintrest />
                  </network>
                  <network network="dribbble">
                    <dribbble />
                  </network>
                </div>
              </social-sharing> -->

        <socail-share :data="socialData" :cStyle="iconStyles" />

              <!-- <img src="images/Group-6571.svg" height="40" alt="">
            <img src="images/Group-6572.svg" height="40" alt="">
            <img src="images/Group-6573.svg" height="40" alt="">
            <img src="images/pinterest.svg" height="40" alt="">
            <img src="images/Group-6202.svg" height="40" alt=""> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  props: ["data"],
  methods: {
    closeModal() {
      this.$store.dispatch("setSocailShareModal", false);
    }
  },
  computed: {
    ...mapState({
      loggedInUser: state => state.authentication.user,
      socailShareData: state => state.socailShareData
    }),
    socialData() {
      return this.data || this.socailShareData;
    },
    iconStyles(){
      return {
        height: '40px'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.social-share-wrap {
  position: unset !important;
}
.fb {
  height: 40px !important;
}
</style>
