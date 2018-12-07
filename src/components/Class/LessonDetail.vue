<template>
  <div class="lesson-info-wrap">
    <div class="div-block-80">
      <div class="_10px-botttom-margin">
        <h1 class="heading-31">Lesson Description</h1>
      </div>
      <div class="_20px-bottom-margin" v-html="lesson.description">
      </div>

      <div v-if="lesson.teacherAssignment">
         <div class="_10px-botttom-margin">
        <h1 class="heading-31">Assignement Guidelines</h1>
      </div>
        <div class="_20px-bottom-margin">
          <p class="paragraph-6" v-html="lesson.teacherAssignment.guidelines">
          </p>
        </div>
        <div class="_10px-botttom-margin">
          <h1 class="heading-31">Attached Files</h1>
        </div>
        <div class="div-block-82" v-for="attach in lesson.teacherAssignment.media" :key="attach._id">
          <img src="@/assets/file.svg" height="15" class="image-11" />
          <div class="div-block-81">
            <a class="link-2 cursor-pointer" :href="url(attach.originalName)" :download="attach.originalName">{{attach.originalName}}</a>
            <div class="text-block-6">346KB</div>
          </div>
        </div>
      </div>
        <div v-else class="_10px-botttom-margin">
        <h1 class="heading-31">No assignements!</h1>
      </div>

    </div>
    <div class="div-block-79" :style="background" @click="gotoClassRoom()">
      <img height="40" src="@/assets/Play-White.svg" class="play" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["lesson", "classId"],
  data() {
    return {
      backImage: ""
    };
  },
  created() {
    this.$store.dispatch("classes/getMedia", this.lesson.img).then(
      response => {
        this.backImage = response.data;
      },
      err => {
        console.error(err);
      }
    );
  },
  methods: {
    downloadFile(file) {
      let link = document.createElement("a");
      link.href =
        process.env.VUE_APP_API_BASE_URL + "/media/" + file.originalName;
      link.setAttribute("download", file.originalName);
      // link.download = file.originalName;
      link.click();
    },
    url(id) {
      return process.env.VUE_APP_API_BASE_URL + "/media/" + id;
    },
    gotoClassRoom(){
      this.$router.push({name:'classRoom', params:{id: this.classId}})
    }
  },

  computed: {
    background() {
      return {
        "background-image": `url(${this.backImage})`
      };
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
