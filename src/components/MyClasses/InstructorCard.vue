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
    <div class="card-module _50">
      <div class="flex-space-around">
        <div class="left-align"><img src="@/assets/students.svg" width="20" height="20" alt="">
          <div class="text-block-7">4.2k</div>
        </div>
        <div class="left-align"><img src="@/assets/Group-5402.svg" width="20" height="20" alt="">
          <div class="text-block-7">4.2k</div>
        </div>
        <div class="left-align"><img src="@/assets/questions.svg" width="20" height="20" alt="">
          <div class="text-block-7">4.2k</div>
        </div>
        <div class="left-align"><img src="@/assets/reviews.svg" width="20" height="20" alt="">
          <div class="text-block-7">4.2k</div>
        </div>
      </div>
    </div>
    <div class="card-module _60"><a href="#" class="button-2 w-button">12 Submissions</a></div>
  </div>
</template>

<script>
  export default {
  props:['myClass']
  }
</script>
<style lang="scss" scoped>
.class-desc {
      width: 270px;
}
</style>
