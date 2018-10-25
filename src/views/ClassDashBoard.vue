<template>
  <div class="page-section">
    <div class="flex-row dashboard">
      <div class="flexcolumn triple">
        <div class="_20px-bottom-margin">
          <div class="flex-space-between">
            <h1 class="heading-2 grey">Community</h1>
            <h1 class="heading-4 grey">Show all</h1>
          </div>
        </div>
        <div data-duration-in="500" data-duration-out="250" data-easing="ease-in-out" class="w-tabs">
          <div class="tabs-menu w-tab-menu">
            <a data-w-tab="Tab 1" @click="selectTab('comment')" class="tab-link-tab-2 project w-inline-block w-tab-link" :class="{'w--current': currentTab == 'comment'}">
              <div>Comments</div>
              <div class="notification project">2</div>
            </a>
            <a data-w-tab="Tab 2" @click="selectTab('question')" class="tab-link-tab-2 question w-inline-block w-tab-link" :class="{'w--current': currentTab == 'question'}">
              <div>Questions</div>
              <div class="notification question">3</div>
            </a>
            <a data-w-tab="Tab 3" @click="selectTab('announcement')" class="tab-link-tab-2 class w-inline-block w-tab-link" :class="{'w--current': currentTab == 'announcement'}">
              <div>Announcements</div>
              <div class="notification class">4</div>
            </a>
          </div>
          <div class="w-tab-content">
            <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">
              <div data-w-tab="Tab 1" class="w-tab-pane" v-if="currentTab == 'comment'" :class="{'w--tab-active': currentTab == 'comment'}" :key="currentTab">
                <discusion-card v-bind="discusCardClass[currentTab]" />
                <discusion-card v-bind="discusCardClass[currentTab]" />
              </div>
              <div data-w-tab="Tab 2" class="w-tab-pane" v-if="currentTab == 'question'" :class="{'w--tab-active': currentTab == 'question'}" :key="currentTab">
                <discusion-card v-bind="discusCardClass[currentTab]" />
                <discusion-card v-bind="discusCardClass[currentTab]" />
                <discusion-card v-bind="discusCardClass[currentTab]" />
              </div>
              <div data-w-tab="Tab 3" class="w-tab-pane" v-if="currentTab == 'announcement'" :class="{'w--tab-active': currentTab == 'announcement'}" :key="currentTab">
                <discusion-card v-bind="discusCardClass[currentTab]" />
                <discusion-card v-bind="discusCardClass[currentTab]" />
                <discusion-card v-bind="discusCardClass[currentTab]" />
                <discusion-card v-bind="discusCardClass[currentTab]" />
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="flexcolumn double">
        <div class="_20px-bottom-margin">
          <h1 class="heading-2 grey center">Next Lesson</h1>
        </div>
        <div class="card nopadding">
          <div class="cover-image"><img src="../assets/Play-White.svg" height="51" alt=""></div>
          <div class="lesson-title-wrap">
            <div class="_10px-botttom-margin">
              <div class="_5px-bottom-margin">
                <h2 class="heading-6">Lesson 1</h2>
              </div>
              <h1 class="heading-4">Origins of Typography: The Fundamentals</h1>
            </div>
          </div>
        </div>
        <div class="_20px-bottom-margin">
          <h1 class="heading-2 grey center">Assignments &amp; Exams</h1>
        </div>
        <div data-duration-in="300" data-duration-out="100" class="w-tabs">
          <div class="tabs-menu w-tab-menu">
            <a data-w-tab="Tab 1" @click="changeAssignmentTab('upcoming')" :class="{'w--current': assignmentTab == 'upcoming'}"
            class="tab-link-tab-2 class w-inline-block w-tab-link">
              <div>Upcoming</div>
            </a>
            <a data-w-tab="Tab 2" @click="changeAssignmentTab('completed')" :class="{'w--current': assignmentTab == 'completed'}"
            class="tab-link-tab-2 class w-inline-block w-tab-link">
              <div>Completed</div>
            </a>
          </div>
          <div class="w-tab-content">
            <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">            
            <div v-if="assignmentTab == 'upcoming'" data-w-tab="Tab 1" class="w-tab-pane" :key="assignmentTab"
            :class="{'w--tab-active': assignmentTab == 'upcoming'}">
              <assignment-card :status="optional"/>
              <assignment-card :status="optional"/>
              <assignment-card :status="optional"/>
            </div>
            <div v-if="assignmentTab == 'completed'" data-w-tab="Tab 2" class="w-tab-pane" :key="assignmentTab"
            :class="{'w--tab-active': assignmentTab == 'completed'}">
              <assignment-card :status="inReview"/>
              <assignment-card :status="inReview"/>
              <assignment-card :status="approved"/>
              <assignment-card :status="approved"/>
            </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Replies from "@/assets/replies.svg";
import DiscusionCard from "@/components/ClassDasboard/DiscusionCard.vue";
import AssignmentCard from "@/components/ClassDasboard/AssignmentCard.vue";
export default {
  components: {
    Replies,
    DiscusionCard,
    AssignmentCard
  },
  data() {
    return {
      optional:'Optional',
      approved: 'approved',
      inReview:'In Review',
      currentTab: "comment",
      assignmentTab:'upcoming',
      discusCardClass: {
        comment: {
          cardClasses: [""],
          dpClasses: ["project"]
        },
        question: {
          cardClasses: [""],
          dpClasses: ["question"]
        },
        announcement: {
          cardClasses: ["announcement"],
          dpClasses: [""]
        }
      }
    };
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
    },
    changeAssignmentTab(tab) {
      this.assignmentTab = tab;
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
  .fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */
  
 {
  opacity: 0;
}
</style>
