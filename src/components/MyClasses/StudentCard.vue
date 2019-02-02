<template>
  <div class="card nopadding" @click="gotoClassRoom()">
    <div class="_30px-top-bottom-20-side-padding class-desc">
      <div class="div-block-116">
         <div class="div-block-118">
          <div class="_20px-bottom-margin">
            <h1 class="heading-2 _400 left">{{myClass.title}}</h1>
          </div>
          <h2 class="heading-6">{{myClass.category}}</h2>
        </div>
        <!-- <div class="div-block-117"><img src="@/assets/Menu.svg" width="4" alt=""></div> -->
      </div>
    </div><img :src="image" alt="" class="image-5">
    <div class="card-module _60"><img src="@/assets/Announcement.svg" height="21" alt="">
      <div class="progress-wrapper">
        <div class="progress-bar-wrapper">
          <div class="progress-bar" :style="{width: progressWidth}"><img src="@/assets/check.svg" height="16" alt="" class="image-6"></div>
        </div>
        <div>
          <h1 class="heading-8 w-hidden-medium w-hidden-tiny">{{myClass.progress.watchedLessons.length}}/{{myClass.lessons.length}}</h1>
        </div>
      </div>
      <div class="div-block-115"><img src="@/assets/right-arrow.svg" height="9" alt=""></div>
    </div>
  </div>
</template>
<script> export default {
  props:['myClass'],
  data(){
    return {
      image:''
    }
  },
  created(){
    this.image =  this.$apiBaseUrl  + "/media/" + this.myClass.img;
    // this.$store.dispatch("classes/getMedia", this.myClass.img).then(
    //     response => {
    //       this.image = response.data;
    //     },
    //     err => {
    //       console.error(err);
    //     }
    //   );
  },
  methods:{
    gotoClassRoom(){
      this.$router.push({name:'classRoom', params:{id: this.myClass._id}})
    }
  },
  computed:{
    progressWidth(){
      let percentage = Math.ceil((this.myClass.progress.watchedLessons.length/ this.myClass.lessons.length ) * 100);
      return `${percentage}%`
    }
  }
}
</script>
<style lang="scss" scoped>
.class-desc {
      width: 270px;
}
</style>
