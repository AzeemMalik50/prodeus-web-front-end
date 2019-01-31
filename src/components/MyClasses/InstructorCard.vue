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
        <edit-menu :onEdit="openEditClass"/>
      </div>
    </div><img @click.self="gotoClassRoom()" :src="image" alt="" class="image-5">
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
    <div class="card-module _60">
      <a href="#" @click.prevent="gotoClassRoom()" class="button-2 w-button">{{submittions}} Submissions</a></div>
  </div>
</template>

<script>
export default {
  props: ["myClass"],
  data() {
    return {
      image: "",
      questions: 0,
      comments: 0,
      submittions: 0
    };
  },
  methods: {
    openEditClass() {
      this.$store.dispatch("classes/setEditClass", {
        lessonIndex: 0,
        currentClass: JSON.parse(JSON.stringify(this.myClass))
      });
      this.$store.dispatch("changeCreateClass", true);
    },
    gotoClassRoom() {
      this.$router.push({
        name: "classRoom",
        params: {
          id: this.myClass._id
        }
      });
    }
  },
  created() {
    this.image = this.$apiBaseUrl + "/media/" + this.myClass.img;
    this.myClass.lessons.forEach(ls => {
      this.comments = this.comments + ls.comments.length;
      this.questions = this.questions + ls.questions.length;
      this.submittions = this.submittions + ls.studentAssignments.length;
    });
    // this.$store.dispatch("classes/getMedia", this.myClass.img).then(
    //     response => {
    //       this.image = response.data;
    //     },
    //     err => {
    //       console.error(err);
    //     }
    //   );
  }
};
</script>

<style lang="scss" scoped>
.class-desc {
  width: 270px;
}
</style>
