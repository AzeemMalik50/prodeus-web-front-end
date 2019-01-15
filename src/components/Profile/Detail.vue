<template>
  <div class="flexcolumn double empty">
    <div class="card">
      <div class="_40-side-padding">
        <div class="_30-px-top-bottom">
          <div class="flex-space-between">
            <h1 class="heading-4">About me</h1>
            <img src="../../assets/pencil-edit-button.svg" v-if="loggedInUser._id === user._id" @click="openForm(PROFILE_FORMS.ABOUT_ME)" width="14" alt="">
          </div>
        </div>
        <div class="_30px-bottom-margin">
          <div class="underline"></div>
        </div>
        <div class="_30px-bottom-margin">
          <p>{{user.biography}} </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="_40-side-padding">
        <div class="_30-px-top-bottom">
          <div class="flex-space-between">
            <h1 class="heading-4">Education</h1>
            <!-- <img src="../../assets/Add-Post.svg" v-if="loggedInUser._id === user._id" @click="OpenNewEducation()" width="14" alt=""> -->
          </div>
        </div>
        <div class="_30px-bottom-margin">
          <div class="underline"></div>
        </div>
        <div class="_30px-bottom-margin" v-for="(edu, index) in profile.education" :key="index">
          <div class="horiz-left-align-justify-atart">
            <div class="_30px-right-pad"><img src="../../assets/Logo.svg" width="40" height="40" alt=""></div>
            <div class="flex-space-between">
              <div class="div-block-51">
                <div class="_5px-bottom-margin">
                  <h1 class="heading-6 dark">{{edu.degree}}</h1>
                </div>
                <div class="_5px-bottom-margin">
                  <h1 class="heading-23">{{edu.fieldOfStudy}}</h1>
                </div>
                <div class="_5px-bottom-margin">
                  <h1 class="paragraph-2 grey"> {{ !edu.currentlyAttend ? new Date(edu.from).getFullYear() +' - '+ new Date(edu.to).getFullYear(): '(c.' +new Date(edu.from).getFullYear()+')'}}</h1>
                </div>
              </div>
              <!-- <img src="../../assets/pencil-edit-button.svg" v-if="loggedInUser._id === user._id" @click="openEducation(PROFILE_FORMS.EDUCATION, index)" height="14" alt=""> -->
              </div>
          </div>
        </div>
        <!-- <div class="_30px-bottom-margin">
                        <div class="horiz-left-align-justify-atart">
                          <div class="_30px-right-pad"><img src="../../assets/Logo.svg" width="40" height="40" alt=""></div>
                          <div class="div-block-51">
                            <div class="_5px-bottom-margin">
                              <h1 class="heading-6 dark">EXPERT</h1>
                            </div>
                            <div class="_5px-bottom-margin">
                              <h1 class="heading-23">Web Development</h1>
                            </div>
                            <div class="_5px-bottom-margin">
                              <h1 class="paragraph-2 grey">(c. 2016)</h1>
                            </div>
                          </div>
                        </div>
                      </div> -->
        <!-- <div class="_30px-bottom-margin">
                        <div class="horiz-left-align-justify-atart">
                          <div class="_30px-right-pad"><img src="../../assets/Logo.svg" width="40" height="40" alt=""></div>
                          <div class="div-block-51">
                            <div class="_5px-bottom-margin">
                              <h1 class="heading-6 dark">BACHELOR OF FINE ARTS</h1>
                            </div>
                            <div class="_5px-bottom-margin">
                              <h1 class="heading-23">Political Science</h1>
                            </div>
                            <div class="_5px-bottom-margin">
                              <h1 class="paragraph-2 grey">2013 - 2018</h1>
                            </div>
                          </div>
                        </div>
                      </div> -->
      </div>
      <div class="div-block-141 center" v-if="loggedInUser._id === user._id"><a href="#" class="link-7"  @click.stop="OpenNewEducation()" >Add Education</a></div>

    </div>
    <div class="card">
      <div class="_40-side-padding">
        <div class="_30-px-top-bottom">
          <div class="flex-space-between">
            <h1 class="heading-4">Work Experience</h1>
            <!-- <img src="../../assets/Add-Post.svg" v-if="loggedInUser._id === user._id" @click="OpenNewWork()" width="14" alt=""> -->
          </div>
        </div>
        <div class="_30px-bottom-margin">
          <div class="underline"></div>
        </div>
        <div class="_40px-bottom-margin" v-for="(work, index) in profile.workExperience" :key="index+work.title">
          <div class="div-block-123">
            <div>
              <div class="space-between">
                <div class="vert-justify-start-align-left min-width-400">
                  <div class="_10px-botttom-margin">
                    <h1 class="heading-4">{{work.title}}</h1>
                  </div>
                  <div class="_10px-botttom-margin">
                    <div class="heading-18 blue">{{work.company}}, {{work.location}}</div>
                  </div>
                  <div class="_10px-botttom-margin">
                    <div class="heading-18"> {{months[new Date(work.from).getMonth()] + ' ' + new Date(work.from).getFullYear()}} – {{work.currentlyWorkHere ?'Present' : months[new Date(work.to).getMonth()] + ' ' + new Date(work.to).getFullYear()}} {{duration(work.from, work.to,
                      work.currentlyWorkHere)}}
                      <!-- ({{work.currentlyWorkHere ? work.from | duration('subtract', new Date()) :  work.from | duration('subtract', work.to)}}) -->
                    </div>
                  </div>
                </div>
                <div class="align-right-justify-start max-80">
                  <img v-if="work.logo" :src="companyLogo(work.logo)" class="company-pic">
                  <div v-else class="company-pic"></div>
                </div>
              </div>
              <p>{{work.description}}</p>
            </div>
            <div class="div-block-122">
              <img src="../../assets/pencil-edit-button.svg" v-if="loggedInUser._id === user._id" @click="openForm(PROFILE_FORMS.WORK)" width="14" height="14" alt=""></div>
          </div>
        </div>
      </div>
      <div class="div-block-141 center" v-if="loggedInUser._id === user._id"><a href="#"  @click.stop="OpenNewWork()" class="link-7">Add Work Experience</a></div>

    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapState
  } from "vuex";
  import moment from 'moment-timezone';

  export default {
    props: ["user"],
    data() {
      return {
        months: ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ]
      };
    },
    methods: {
      duration(from, to, iscurrent) {
        if (!to || iscurrent) {
          to = new Date();
        }
        to = new Date(to);
        from = new Date(from);
        var diff = Math.floor(to.getTime() - from.getTime());
        var day = 1000 * 60 * 60 * 24;

        var days = Math.floor(diff / day);
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);

        var message = "" //from.toDateString();
        // message += ""
        if (months > 0) {
          message += months + " months "
        }
        // message += days + " days "
        if (years > 0) {
          if (yearr == 1) {
            message += years + "year )"
          } else {
            message += years + "years )"
          }
        }
        if (message) {
          let start = "(";
          start += message;
          message = start;
        }
        return message
      },
      openForm(formName) {
        this.$store.dispatch("profile/setProfileForm", formName);
      },
      openEducation(formName, index) {
        this.$store.dispatch("profile/setEducationIndex", index);
        this.$store.dispatch("profile/setProfileForm", formName);
      },
      OpenNewEducation() {
        let newEducation = {
          school: "",
          degree: "",
          fieldOfStudy: "",
          from: new Date().toISOString().split("T")[0],
          to: new Date().toISOString().split("T")[0],
          currentlyAttend: false
        };
        let edus = this.profile.education;
        this.$store.dispatch("profile/addNewEducation", newEducation);
        this.$store.dispatch("profile/setEducationIndex", edus.length - 1);

        this.$store.dispatch(
          "profile/setProfileForm",
          this.PROFILE_FORMS.EDUCATION
        );
      },
      OpenNewWork() {
        let newWorkExperience = {
          title: "",
          company: "",
          location: "",
          description: "",
          logo: "",
          from: new Date().toISOString().split("T")[0],
          to: new Date().toISOString().split("T")[0],
          currentlyWorkHere: false
        };
        let workExperience = this.profile.workExperience;
        this.$store.dispatch("profile/addNewWorkExperience", newWorkExperience);
        this.$store.dispatch(
          "profile/setWorkExperienceIndex",
          workExperience.length - 1
        );

        this.$store.dispatch("profile/setProfileForm", this.PROFILE_FORMS.WORK);
      },
      companyLogo(logoId) {
        return process.env.VUE_APP_API_BASE_URL + "/media/" + logoId
      }
    },
    computed: {
      ...mapState({
        loggedInUser: state => state.authentication.user,
        PROFILE_FORMS: state => state.profile.PROFILE_FORMS,
        profileForm: state => state.profile.notifications,
        profile: state => state.profile.profile
      })
    }
  };
</script>

<style lang="scss" scoped>
  .min-width-400 {
    min-width: 400px;
  }
</style>

