<template>
  <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
    <div class="tab-navbar w-tab-menu">
      <a data-w-tab="Tab 1" @click.prevent="changeTab('project')" class="tab-page w-inline-block w-tab-link" :class="{'w--current': currentTab === 'project'}">
        <div>Projects</div>
      </a>
      <a data-w-tab="Tab 2" @click.prevent="changeTab('question')" class="tab-page w-inline-block w-tab-link" :class="{'w--current': currentTab === 'question'}">
        <div>Questions</div>
      </a>
      <a data-w-tab="Tab 4" @click.prevent="changeTab('class')" class="tab-page w-inline-block w-tab-link" :class="{'w--current': currentTab === 'class'}">
        <div>Classes</div>
      </a>
      <a data-w-tab="Tab 5" @click.prevent="changeTab('people')" class="tab-page w-inline-block w-tab-link" :class="{'w--current': currentTab === 'people'}">
        <div>People</div>
      </a>
    </div>
    <div class="tabs-content w-tab-content" v-if="!isFeteching">

      <div data-w-tab="Tab 1" v-if="currentTab === 'project'" class="w-tab-pane w--tab-active">
        <div class="justify-start-stretch">
          <div class="page-section tab">
            <div class="flex-row" v-if="data.projects.length">
              <masonry :cols="{default: 5, 1600: 4, 1300: 3, 900: 2, 500: 1}" class="masonary" v-if="data.projects.length > 4">
                <div class="flexcolumn" v-for="project in data.projects" :key="project._id">
                  <ProjectCard :project="project" />
                </div>
              </masonry>
              <div class="flexcolumn" v-for="project in data.projects" :key="project._id" v-else>
                <ProjectCard :project="project" />
              </div>
            </div>
            <h4 class="text-center " v-else>No project found!</h4>
          </div>
        </div>
      </div>

      <div data-w-tab="Tab 2" v-if="currentTab === 'question'" class="w-tab-pane w--tab-active">
        <div class="justify-start-stretch">
          <div class="page-section tab">
            <div class="flex-row" v-if="data.questions.length">
              <masonry :cols="{default: 5, 1600: 4, 1300: 3, 900: 2, 500: 1}" class="masonary" v-if="data.questions.length > 4">
                <div class="flexcolumn" v-for="question in data.questions" :key="question._id">
                  <QuestionCard :question="question" />
                </div>
              </masonry>
              <div class="flexcolumn" v-for="question in data.questions" :key="question._id" v-else>
                <QuestionCard :question="question" />
              </div>
            </div>
            <h4 class="text-center " v-else>No question found!</h4>

          </div>
        </div>
      </div>

      <div data-w-tab="Tab 4" v-if="currentTab === 'class'" class="w-tab-pane w--tab-active">
        <div class="justify-start-stretch">
          <div class="page-section tab">
            <div class="flex-row" v-if="data.classes.length">
              <masonry :cols="{default: 5, 1600: 4, 1300: 3, 900: 2, 500: 1}" class="masonary" v-if="data.classes.length > 4">
                <div class="flexcolumn" v-for="cls in data.classes" :key="cls._id">
                  <ClassCard :feedClass="cls" />
                </div>
              </masonry>
              <div class="flexcolumn" v-for="cls in data.classes" :key="cls._id" v-else>
                <ClassCard :feedClass="cls" />
              </div>
            </div>
            <h4 class="text-center " v-else>No class found!</h4>
          </div>
        </div>
      </div>

      <div data-w-tab="Tab 5" v-if="currentTab === 'people'" class="w-tab-pane w--tab-active">
        <div class="justify-start-stretch">
          <div class="page-section tab">
            <div class="flex-row" v-if="data.users.length">
              <masonry :cols="{default: 5, 1600: 4, 1300: 3, 900: 2, 500: 1}" class="masonary" v-if="data.users.length > 4">
                <div class="flexcolumn" v-for="user in data.users" :key="user._id">
                  <!-- <ClassCard :feedClass="feed" v-if="!feed.postType" /> -->
                  <profile-card :user="user" :profileLink="true" />
                </div>
              </masonry>
               <div class="flexcolumn" v-for="user in data.users" :key="user._id" v-else>
                  <!-- <ClassCard :feedClass="feed" v-if="!feed.postType" /> -->
                  <profile-card :user="user" :profileLink="true" />
                </div>
            </div>
            <h4 class="text-center " v-else>No profile found!</h4>
          </div>
        </div>
      </div>

    </div>
    <loading :color="'#8446e8'" :active.sync="isFeteching" :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
  import ClassCard from "@/components/Feeds/ClassCard.vue";
  import ProjectCard from "@/components/Feeds/ProjectCard.vue";
  import QuestionCard from "@/components/Feeds/QuestionCard.vue";
  import ProfileCard from "@/components/Profile/ProfileCard.vue";

  import Loading from "vue-loading-overlay";

  export default {
    components: {
      ClassCard,
      ProjectCard,
      QuestionCard,
      Loading,
      ProfileCard
    },
    data() {
      return {
        currentTab: "project",
        isFeteching: true,
        fullPage: true,
        data: {
          users: [],
          projects: [],
          questions: [],
          classes: []
        }
      };
    },
    watch: {
      $route(to, from) {
        this.searchData();
      }
    },
    created() {
      this.searchData();
    },

    methods: {
      changeTab(tabName) {
        this.currentTab = tabName;
      },
      searchData() {
        this.$store.dispatch("post/search", this.query).then(
          res => {
            this.isFeteching = false;
            this.data = res.data;
            this.$eventHub.$emit("searched", res.data);
          },
          err => {
            console.error(err);
          }
        );
      }
    },
    computed: {
      query() {
        return this.$route.query.query;
      }
    }
  };
</script>
<style lang="scss" scoped>
.text-center {
  text-align: center;
}
</style>
