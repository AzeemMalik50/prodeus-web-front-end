<template>
  <div class="card nopadding">
    <div class="_30px-top-bottom-20-side-padding class-desc">
      <div class="div-block-116">
        <div class="div-block-118">
          <div class="_20px-bottom-margin">
            <h1 class="heading-2 _400 left">{{myClass.title}}</h1>
          </div>
          <h2 class="heading-6">{{myClass.category}}</h2>
        </div>
        <div class="div-block-117"><img src="@/assets/Menu.svg" width="4" alt=""></div>
      </div>
    </div><img :src="image" alt="" class="image-5">
    <div class="card-module _50">
      <div class="flex-space-around">
        <div class="left-align"><img src="@/assets/students.svg" width="20" height="20" alt="">
          <div class="text-block-7">{{myClass.enrolledStudents.length}}</div>
        </div>
        <div class="left-align"><img src="@/assets/Group-5402.svg" width="20" height="20" alt="">
          <div class="text-block-7">{{comments}}</div>
        </div>
        <div class="left-align"><img src="@/assets/questions.svg" width="20" height="20" alt="">
          <div class="text-block-7">{{questions}}</div>
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
  computed: {
      comments(){
      let count = 0;
      this.myClass.lessons.forEach(ls => {
        count = count + ls.comments.length;
      });
      return count;
    },
      questions(){
      let count = 0;
      this.myClass.lessons.forEach(ls => {
        count = count + ls.questions.length;
      });
      return count;
    }
  }
  }
</script>
<style lang="scss" scoped>
.class-desc {
      width: 270px;
}
</style>
