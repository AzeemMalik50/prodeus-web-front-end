<template>
  <div class="lessonblock">
    <div class="div-block-9">
      <a @click="toggleDetail();">
      <img src="../../assets/expand.svg" height="14" :class="{hide: lesson.expanded}" class="expand" />
      </a>
      <a @click="toggleDetail();">
      <img src="../../assets/hide.svg" height="2" :class="{hide: !lesson.expanded}" class="expanded" />
      </a>
      <div class="div-block-7">
        <div class="_5px-bottom-margin">
          <h2 class="heading-6">Lesson {{lesson.lessonNumber}}</h2>
        </div>
        <h1 class="heading-4">{{lesson.title}}</h1>
      </div>
    </div>
    <div class="div-block-8">
      <div class="text-block">{{lesson.secondsDuration | duration}}</div>
      <img src="@/assets/Assignment.svg" height="20" class="image-2" />
    </div>
  </div>
</template>

<script>

export default {
  name: "LessonBlock",
  props:['lesson'],
  methods:{
    toggleDetail(){
      console.log('toggleDetail')
      this.lesson.expanded = !this.lesson.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}

</style>
