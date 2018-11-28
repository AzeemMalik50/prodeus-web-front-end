<template>
  <div class="flexcolumn">
    <div class="card">
      <div class="_40-side-padding portfolio_image">
        <div class="div-block-120">
          <div class="_10px-botttom-margin">
            <h1 class="heading-4 center white">{{user.fullName}}</h1>
          </div>
          <div class="_20px-bottom-margin">
            <h1 class="heading-18 center">New York, NY</h1>
          </div>
          <div class="_20px-bottom-margin">
            <div class="flex-space-around">
              <div class="div-block-49">
                <div class="_5px-bottom-margin">
                  <h1 class="heading-4 center white">148</h1>
                </div>
                <h1 class="heading-18 center">Connections</h1>
              </div>
              <div class="div-block-49">
                <div class="_5px-bottom-margin">
                  <h1 class="heading-4 center white">1.3k</h1>
                </div>
                <h1 class="heading-18 center">Posts</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="div-block-119" :style="background">
          <img src="../../assets/pencil-edit-button.svg" width="14" alt="" class="image-30">
        </div>
      </div>
      <div class="_60px-block">
        <div class="_30px-side-padding">
          <div class="flex-space-around"><a href="#" class="tag blue">Connect</a></div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="_60px-block">
        <div class="_30px-side-padding">
          <div class="flex-space-around">
            <div class="social-icon"></div>
            <div class="social-icon blue"></div>
            <div class="social-icon yellow"></div>
            <div class="social-icon green"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {};
  },
  computed: {
    background() {
      return {
        "background-image": `url(${this.profilePic})`
      };
    },
    profilePic() {
      let storeUser = this.user;
      if (storeUser.local.img) {
        return this.user.local.img;
      } else if (storeUser.facebook && storeUser.facebook.img) {
        return storeUser.facebook.img;
      } else if (storeUser.google && storeUser.google.img) {
        return storeUser.google.img;
      } else {
        return null;
      }
    }
  }
};
</script>
