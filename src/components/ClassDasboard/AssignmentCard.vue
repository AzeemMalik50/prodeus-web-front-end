<template>
    <div class="card _10px-botttom-padding" :class="{'complete': status == 'approved'}">
        <div class="_20px-pad-wrapper left-align">
            <div class="_10px-botttom-margin">
                <div class="space-between">
                    <div>
                        <h2 class="heading-6">Assignment 1</h2>
                    </div>
                    <div>
                        <img src="@/assets/instructor-reviewed.svg" v-if="status == 'approved'" class="reviwed-svg"/>
                        <h1 v-else class="tag" :class="{'in-review': status == 'In Review'}">{{status}}</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="heading-4">Origins of Typography: The Fundamentals</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AssignmentCard",
  props: ["status"]
};
</script>

<style lang="scss" scoped>
.reviwed-svg {
  height: 30px;
  .cls-1 {
    fill: #8446e8;
  }

  .cls-2 {
    fill: #fff;
    font-size: 12px;
    font-family: RobotoSlab-Regular, Roboto Slab;
  }
}
</style>
