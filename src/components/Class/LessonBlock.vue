<template>
  <div class="lessonblock">
    <div class="div-block-9">
      <Expand class="expand" />
      <div class="div-block-7">
        <div class="_5px-bottom-margin">
          <h2 class="heading-6">Lesson 1</h2>
        </div>
        <h1 class="heading-4">Origins of Typography: The Fundamentals</h1>
      </div>
    </div>
    <div class="div-block-8">
      <div class="text-block">2:15</div>
      <Assignment class="image-2" />
    </div>
  </div>
</template>

<script>
import Expand from "@/assets/expand.svg";
import Assignment from "@/assets/Assignment.svg";

export default {
  name: "LessonBlock",
  components: {
    Expand,
    Assignment
  }
};
</script>

<style lang="scss" scoped>
.expand {
  height: 14px;
  .cls-1 {
    fill: none;
    stroke: #8446e8;
    stroke-width: 2px;
  }
}

.image-2 {
  height: 20px;
  .cls-1 {
    fill: #8446e8;
  }
}
</style>
