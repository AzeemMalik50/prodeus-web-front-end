<template>
   <div class="navmodal-wrap">
    <div class="navmodal-container">
      <div class="div-block-104 filter">
        <div class="div-block-114 alt">
          <div class="_10px-botttom-margin alt">
            <div class="div-block-28">
              <div class="div-block-27 alt  cursor-pointer" @click="toggelFilter('classes')" :class="{inactive: isClass}">
                <div class="div-block-29 alt" :class="{unchecked: !isClass }"></div>
              </div>
            </div>
            <h1 class="heading-57">Classes</h1>
          </div>
          <div class="_10px-botttom-margin alt">
            <div class="div-block-28">
              <div class="div-block-27 alt cursor-pointer" @click="toggelFilter('projects')" :class="{inactive: isProject}">
                <div class="div-block-29 alt " :class="{project: isProject,unchecked: !isProject }"></div>
              </div>
            </div>
            <h1 class="heading-57">Projects</h1>
          </div>
          <div class="_10px-botttom-margin alt">
            <div class="div-block-28">
              <div class="div-block-27 alt cursor-pointer" @click="toggelFilter('questions')" :class="{inactive: isQuestion}">
                <div class="div-block-29 alt" :class="{question: isQuestion,unchecked: !isQuestion }"></div>
              </div>
            </div>
            <h1 class="heading-57">Questions</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      projects: false,
      questions: false,
      classes: false,
      selectedFilters: []
    };
  },
  created() {
    this.selectedFilters = this.feedsFilters;
  },
  methods: {
    toggelFilter(filter) {
      let filIndex = this.selectedFilters.indexOf(filter);
      if(filIndex > -1) {
        this.selectedFilters.splice(filIndex, 1);
      } else {
        this.selectedFilters.push(filter);
      }
      this.$store.dispatch('classes/setFeedFilters', this.selectedFilters);
    }
  },
  computed: {
    isProject() {
      return this.selectedFilters.indexOf("projects") > -1;
    },
    isQuestion() {
      return this.selectedFilters.indexOf("questions") > -1;
    },
    isClass() {
      return this.selectedFilters.indexOf("classes") > -1;
    },
     ...mapState({
      feedsFilters: state => state.classes.feedsFilters
    })
  }
};
</script>
<style lang="scss" scoped>
.unchecked {
  background-color: #bcbcbc;
}
.div-block-29.project {
    background-color: #ebcb4d !important;
}
</style>
