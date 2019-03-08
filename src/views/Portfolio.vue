<template>
<div>
     <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs" >
    <div class="tab-navbar w-tab-menu">
      <a data-w-tab="Tab 1" class="tab-page w-inline-block w-tab-link" :class="{'w--current': isDetail}" @click="changeTab('detail')">
        <div>Details</div>
      </a>
      <a data-w-tab="Tab 2" class="tab-page w-inline-block w-tab-link" :class="{'w--current': isFeed}" @click="changeTab('feed')">
        <div>Feed {{profileForm}}</div>
      </a>
      <!-- <a data-w-tab="Tab 3" class="tab-page w-inline-block w-tab-link" :class="{'w--current': isShowCase}" @click="changeTab('showCase')">
        <div>Showcase</div>
      </a> -->
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
            <!-- <transition-group  name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }"> -->
              <detail :user="profile"  v-show="isDetail" key="detail" />
              <ProfileFeeds  v-show="isFeed" key="feeds"/>
              <show-case v-show="isShowCase" key="showCase" />
              <pro-degrees v-show="isProDegree" key="proDegree"/>
            <!-- </transition-group> -->

              <!-- recent projects -->
              <!-- <recent-projects /> -->

            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="modal-wrapper" v-if="isEditOpen" @click.self="closeDialog()">
      <div class="_100-vh"  @click.self="closeDialog()">
      <div class="flexcolumn edit">
<basic-info-form :user="JSON.parse(JSON.stringify(this.profile))" v-if="isFormOpen(basicInfo)" />
<about-me-form :user="JSON.parse(JSON.stringify(this.profile))"  v-if="isFormOpen(aboutMe)"/>
<education-form :user="JSON.parse(JSON.stringify(this.profile))"  v-if="isFormOpen(education)" />
<work-experience-form :user="JSON.parse(JSON.stringify(this.profile))"  v-if="isFormOpen(work)"/>
      </div>
    </div>
    </div>
     </div>

    <Loading :color="'#8446e8'" :active.sync="!profile._id" :is-full-page="true"></Loading>

  </div>
</template>
<script>
import { mapGetters, mapState} from "vuex";
import Detail from "../components/Profile/Detail";
import ProfileFeeds from "../components/Profile/ProfileFeeds";
import ProDegrees from "../components/Profile/ProDegrees";
import ShowCase from "../components/Profile/ShowCase";
import RecentProjects from "../components/Profile/RecentProjects";
import ProfileCard from "../components/Profile/ProfileCard";
import AboutMeForm from "../components/Profile/AboutMeForm";
import BasicInfoForm from "../components/Profile/BasicInfoForm";
import EducationForm from "../components/Profile/EducationForm";
import WorkExperienceForm from "../components/Profile/WorkExperienceForm";
import Loading from "vue-loading-overlay";


export default {
  props:['userId'],
  components: {
    Loading,
    Detail,
    ProfileFeeds,
    ProDegrees,
    ShowCase,
    RecentProjects,
    ProfileCard,
    AboutMeForm,
    BasicInfoForm,
    EducationForm,
    WorkExperienceForm
  },
  data() {
    return {
      curTab: "detail",
      // isEditOpen: false,
      basicInfo: '',
      aboutMe: '',
      education: '',
      work: '',
      profileFormData: {}
    };
  },
  created() {
    this.$store.dispatch("profile/getProfile", this.userId);
     this.basicInfo = this.PROFILE_FORMS.BASIC_INFO;
      this.aboutMe = this.PROFILE_FORMS.ABOUT_ME;
      this.education = this.PROFILE_FORMS.EDUCATION;
      this.work = this.PROFILE_FORMS.WORK;
    window.addEventListener("keyup", this.closeEditForm);
    this.profileFormData = JSON.parse(JSON.stringify(this.profile));
  },
  methods: {
    changeTab(tab) {
      this.curTab = tab;
    },
    isFormOpen(formName) {
      if(this.profileForm === formName) {
        return true;
      } else {
        return false;
      }
    },
     closeEditForm(e) {
      /*  press escape to close modal */
      if (e.keyCode === 27) {
       this.closeDialog();
      }
    },
    closeDialog() {
      if (confirm("Are you sure to exit form!")) {
          this.$store.dispatch("profile/setProfileForm", null);
          this.$store.dispatch("profile/resetFormData");
        }
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
    isEditOpen(){
      return this.profileForm;
    },
   ...mapState({
      PROFILE_FORMS: state => state.profile.PROFILE_FORMS,
      profileForm: state => state.profile.profileForm,
      profile: state => state.profile.profile
    }),
  }
};
</script>
