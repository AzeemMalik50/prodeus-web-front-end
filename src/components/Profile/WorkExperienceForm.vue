<template>
   <div class="card">
          <div class="_40-side-padding edit">
            <div class="_30-px-top-bottom">
              <div class="flex-space-between">
                <h1 class="heading-4">Work Experience</h1>
              </div>
            </div>
            <div class="w-form">
              <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                <div>
                  <div class="space-between nowrap _20px-bottom-margin _1">
                    <input v-model="workData.workExperience[selectedWorkIndex].title" type="text" class="portfolio w-input" maxlength="256" name="Title" data-name="Title" placeholder="Title" id="Title" required="">
                    <div class="div-block-139"></div>
                    <div class="div-block-142 cursor-pointer" @click="chooseFile()">
        <input type="file"  name="myImage" accept="image/x-png,image/gif,image/jpeg" id="logoImage" @change="fileSelect($event.target.name, $event.target.files);" class="input-file" hidden>
         <img :src="showLogo" v-if="showLogo" class="logo" width="30" height="30" alt="" >
                      <div v-else class="text-block-15">Logo</div>
                    </div>
                  </div>
                </div>
                <div class="_20px-bottom-margin">
                  <input v-model="workData.workExperience[selectedWorkIndex].company" type="text" class="portfolio _20px-bottom-margin w-input" maxlength="256" name="Company" data-name="Company" placeholder="Company" id="Company" required=""></div>
                <div>
                   <div class="_20px-bottom-margin">
                  <input v-model="workData.workExperience[selectedWorkIndex].location" type="text" class="portfolio _20px-bottom-margin w-input" maxlength="256" name="location" data-name="Location" placeholder="Company Location" id="location" required="">
                  </div>
                  <div class="space-between nowrap _20px-bottom-margin">
                    <div class="div-block-143">
                      <label for="Year-3" class="field-label">From</label>
                      <input type="date" v-model="workData.workExperience[selectedWorkIndex].from" class="select-field w-select date" />

                      <div class="horiz-left-align-justify-atart">
                        <div class="div-block-144 horiz-left-align-justify-atart padding-border-none">
                          <input type="checkbox" v-model="workData.workExperience[selectedWorkIndex].currentlyWorkHere" class="currently" />
                          <!-- <img src="images/bluecheck.svg" height="12" alt="" class="image-37"> -->
                          </div>
                        <div class="text-block-16">I currently work here</div>
                      </div>
                    </div>
                    <div class="div-block-139"></div>
                    <div class="div-block-143" v-if="!workData.workExperience[selectedWorkIndex].currentlyWorkHere">
                      <label for="Year-4" class="field-label">Until</label>
                      <input type="date" id="toDate"  :value="workData.workExperience[selectedWorkIndex].to" @input="checkDate($event.target.valueAsDate)" class="select-field w-select date" />
                        </div>
                  </div>
                </div>
                <div class="_20px-bottom-margin">
                  <textarea v-model="workData.workExperience[selectedWorkIndex].description"  id="Job-Description" name="Job-Description" placeholder="Write a detailed description of your role here..." maxlength="5000" data-name="Job Description" class="portfolio about _20px-bottom-margin w-input">
                    </textarea></div>
                <div class="div-block-53">
                  <div class="text-block-3">Required</div>
                  <div class="div-block-54"><img src="../../assets/White-Check.svg" width="8" alt=""></div>
                </div>
                <div class="div-block-53">
                  <div class="text-block-3">Required</div>
                  <div class="div-block-54"><img src="../../assets/White-Check.svg" width="8" alt=""></div>
                </div>
                <div class="div-block-53">
                  <div class="text-block-3">Required</div>
                  <div class="div-block-54"><img src="../../assets/White-Check.svg" width="8" alt=""></div>
                </div>
                <div class="div-block-53">
                  <div class="text-block-3">Required</div>
                  <div class="div-block-54"><img src="../../assets/White-Check.svg" width="8" alt=""></div>
                </div>
              </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail block" v-for="err in errors" :key="err">
                <div>{{err}}</div>
              </div>
            </div>
          </div>
          <div class="div-block-141">
            <a href="#" class="link-6 grey" @click.prevent="closeDialog(true)">Cancel</a>
            <a href="#" class="link-6 grey" @click.prevent="deleteWork()">Delete</a>
            <a href="#" class="link-6" @click.prevent="saveWork()">Save</a>
            </div>
    <Loading :color="'#8446e8'" :active.sync="submitting" :is-full-page="true"></Loading>
        </div>
</template>
<script>
import { mapState } from "vuex";
import Loading from "vue-loading-overlay";

export default {
  props: ["user"],
   components: {
    Loading
  },
  data() {
    return {
      submitting: false,
      newLogo: null,
      workData: {
        workExperience: []
      },
      errors: []
    };
  },
  created() {
    this.workData.workExperience = JSON.parse(
      JSON.stringify(this.profile.workExperience)
    );
    this.workData.workExperience[this.selectedWorkIndex].from = new Date(
      this.currentWork.from
    )
      .toISOString()
      .split("T")[0];
    this.workData.workExperience[this.selectedWorkIndex].to = new Date(
      this.currentWork.to
    )
      .toISOString()
      .split("T")[0];
  },
  methods: {
    closeDialog(resetForm) {
      if (resetForm) {
        this.$store.dispatch("profile/resetFormData");
      }
      this.$store.dispatch("profile/setProfileForm", null);
    },
    saveWork() {
      if (this.checkForm()) {
        this.submitting = true;
        if (this.newLogo) {
          let formData = new FormData();
          formData.append("prodeusFiles", this.newLogo);
          this.$store.dispatch("classes/uploadFiles", formData).then(
            media => {
              this.workData.workExperience[this.selectedWorkIndex].logo = media.data[0];
              this.$store.dispatch("profile/updateProfile", this.workData);
              this.closeDialog();
            },
            err => {
              this.submitting = false;
              console.error(err);
            }
          );
        } else {
          if(!this.currentWork.logo) {
            delete this.workData.workExperience[this.selectedWorkIndex].logo
          }
          this.$store.dispatch("profile/updateProfile", this.workData);
          this.closeDialog();
        }
      }
    },
    deleteWork() {
      this.workData.workExperience = this.workData.workExperience.splice(
        this.selectedWorkIndex,
        1
      );
      this.$store.dispatch("profile/updateProfile", this.workData);
      this.closeDialog();
    },
    checkForm: function() {
      this.errors = [];

      if (!this.currentWork.title) {
        this.errors.push("Title required.");
      }
      if (!this.currentWork.company) {
        this.errors.push("Company required.");
      }
      if (!this.currentWork.description) {
        this.errors.push("Job description required.");
      }
      if (!this.currentWork.from) {
        this.errors.push("From Date required.");
      }

      if (this.currentWork.currentlyWorkHere) {
        if (!this.currentWork.from) {
          this.errors.push("To Date required.");
        }
      } else {
        if (!this.currentWork.from || !this.currentWork.to) {
          this.errors.push("Date required.");
        }
      }
      if (!this.errors.length) {
        return true;
      } else {
        return false;
      }
    },
    checkDate(toDate) {
      let from = new Date(this.currentWork.from);
      let to = new Date(toDate);
      if (+from <= +to) {
        this.workData.workExperience[this.selectedWorkIndex].to = toDate;
      } else {
        // toDate = this.workData.workExperience[this.selectedWorkIndex].from;
        document.getElementById("toDate").value = this.workData.workExperience[
          this.selectedWorkIndex
        ].from;
      }
    },
    chooseFile() {
      document.getElementById("logoImage").click();
    },
    fileSelect(fieldName, fileList) {
      if (!fileList.length) return;
      this.newLogo = event.target.files[0];
    }
  },
  computed: {
    showLogo() {
      if (this.newLogo) {
        return URL.createObjectURL(this.newLogo);
      } else if (this.currentWork.logo) {
        return (
          process.env.VUE_APP_API_BASE_URL + "/media/" + this.currentWork.logo
        );
      } else {
        return null;
      }
    },
    ...mapState({
      selectedWorkIndex: state => state.profile.PROFILE_FORMS.selectedWorkIndex,
      PROFILE_FORMS: state => state.profile.PROFILE_FORMS,
      profileForm: state => state.profile.notifications,
      profile: state => state.profile.profile
    }),
    currentWork() {
      return this.workData.workExperience[this.selectedWorkIndex];
    }
  }
};
</script>
<style lang="scss" scoped>
.date {
  border-radius: 5px;
}
.currently {
  height: 18px;
  width: 150px;
}
.padding-border-none {
  padding: 0;
  border: none;
}
.select-field {
  width: 235px;
}
.logo {
  width: 55px;
  height: 50px;
  border-radius: 50%;
}
</style>

