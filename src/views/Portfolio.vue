<template>
     <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
    <div class="tab-navbar w-tab-menu">
      <a data-w-tab="Tab 1" class="tab-page w-inline-block w-tab-link" :class="{'w--current': isDetail}" @click="changeTab('detail')">
        <div>Details</div>
      </a>
      <a data-w-tab="Tab 2" class="tab-page w-inline-block w-tab-link" :class="{'w--current': isFeed}" @click="changeTab('feed')">
        <div>Feed</div>
      </a>
      <a data-w-tab="Tab 3" class="tab-page w-inline-block w-tab-link" :class="{'w--current': isShowCase}" @click="changeTab('showCase')">
        <div>Showcase</div>
      </a>
      <a data-w-tab="Tab 4" class="tab-page w-inline-block w-tab-link" :class="{'w--current': isProDegree}" @click="changeTab('proDegrees')">
        <div>ProDegrees</div>
      </a>
    </div>
    <div class="tabs-content w-tab-content" v-if="profile.local">
      <div data-w-tab="Tab 2" class="w-tab-pane w--tab-active">
        <div class="justify-start-stretch">
          <div class="page-section tab">
            <div class="flex-row">
              <!-- user pic -->

              <profile-card :user="profile" />
            <transition-group  name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">
              <detail  v-show="isDetail" key="detail" />
              <feeds  v-show="isFeed" key="feeds"/>
              <show-case v-show="isShowCase" key="showCase" />
              <pro-degrees v-show="isProDegree" key="proDegree"/>
            </transition-group>

              <!-- recent projects -->
              <recent-projects />

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Loading :color="'#8446e8'" :active.sync="!profile" :is-full-page="true"></Loading> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Detail from "../components/Profile/Detail";
import Feeds from "../components/Profile/Feeds";
import ProDegrees from "../components/Profile/ProDegrees";
import ShowCase from "../components/Profile/ShowCase";
import RecentProjects from "../components/Profile/RecentProjects";
import ProfileCard from "../components/Profile/ProfileCard";

export default {
  components: {
    Detail,
    Feeds,
    ProDegrees,
    ShowCase,
    RecentProjects,
    ProfileCard
  },
  data() {
    return {
      curTab: "detail"
    };
  },
  created() {
    this.$store.dispatch("profile/getProfile");
  },
  methods: {
    changeTab(tab) {
      this.curTab = tab;
    }
  },
  computed: {
    isDetail() {
      return this.curTab === "detail";
    },
    isFeed() {
      return this.curTab === "feed";
    },
    isShowCase() {
      return this.curTab === "showCase";
    },
    isProDegree() {
      return this.curTab === "proDegrees";
    },
    ...mapGetters({ profile: "profile/profile" })
  }
};
</script>
