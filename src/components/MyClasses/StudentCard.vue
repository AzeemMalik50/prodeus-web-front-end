<template>
  <div class="card nopadding">
    <div class="_30px-padding class-desc">
      <div class="div-block-116">
         <div class="div-block-118">
          <div class="_20px-bottom-margin">
            <h1 class="heading-2 _400 left">{{myClass.title}}</h1>
          </div>
          <h2 class="heading-6">{{myClass.category}}</h2>
        </div>
        <div class="div-block-117"><img src="@/assets/Menu.svg" width="4" alt=""></div>
      </div>
    </div><img :src="myClass.img" alt="" class="image-5">
    <div class="card-module _60"><img src="@/assets/Announcement.svg" height="21" alt="">
      <div class="progress-wrapper">
        <div class="progress-bar-wrapper">
          <div class="progress-bar"><img src="@/assets/check.svg" height="16" alt="" class="image-6"></div>
        </div>
        <div>
          <h1 class="heading-8 w-hidden-medium w-hidden-tiny">7/12</h1>
        </div>
      </div>
      <div class="div-block-115"><img src="@/assets/right-arrow.svg" height="9" alt=""></div>
    </div>
  </div>
</template>
<script> export default {
  props:['myClass']
  }
</script>
<style lang="scss" scoped>
.class-desc {
      width: 270px;
}
</style>
