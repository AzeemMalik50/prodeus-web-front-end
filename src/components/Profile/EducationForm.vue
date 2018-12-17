<template>
 <div class="card">
          <div class="_40-side-padding edit">
            <div class="_30-px-top-bottom">
              <div class="flex-space-between">
                <h1 class="heading-4">Education</h1>
              </div>
            </div>
            <div class="w-form">
              <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                <div class="_20px-bottom-margin">
                  <input type="text" v-model="educationData.education[selectedEducationIndex].school" class="portfolio _20px-bottom-margin w-input" maxlength="256" name="School" data-name="School" placeholder="School" id="School" required=""></div>
                <div class="_20px-bottom-margin">
                  <input type="text" v-model="educationData.education[selectedEducationIndex].degree" class="portfolio _20px-bottom-margin w-input" maxlength="256" name="Degree" data-name="Degree" placeholder="Degree" id="Degree" required=""></div>
                <div class="_20px-bottom-margin">
                  <input type="text" v-model="educationData.education[selectedEducationIndex].fieldOfStudy" class="portfolio _20px-bottom-margin w-input" maxlength="256" name="field" data-name="field" placeholder="Field of Study" id="field-3" required=""></div>
                <div>
                  <div class="space-between nowrap _20px-bottom-margin">
                    <div class="div-block-143">
                      <label for="Year-3" class="field-label">From</label>
                      <input type="date" v-model="educationData.education[selectedEducationIndex].from" class="select-field w-select date" />

                      <div class="horiz-left-align-justify-atart">
                        <div class="div-block-144 horiz-left-align-justify-atart padding-border-none">
                          <input type="checkbox" v-model="educationData.education[selectedEducationIndex].currentlyAttend" class="currently" />
                          <!-- <img src="images/bluecheck.svg" height="12" alt="" class="image-37"> -->
                          </div>
                        <div class="text-block-16">I currently attend</div>
                      </div>
                    </div>
                    <div class="div-block-139"></div>
                    <div class="div-block-143" v-if="!educationData.education[selectedEducationIndex].currentlyAttend">
                      <label for="Year-4" class="field-label">Until</label>
                      <input type="date" id="toDate"  v-model="educationData.education[selectedEducationIndex].to" class="select-field w-select date" />
                        </div>
                  </div>
                </div>
                <div class="div-block-53">
                  <div class="text-block-3">Required</div>
                  <div class="div-block-54"><img src="images/White-Check.svg" width="8" alt=""></div>
                </div>
                <div class="div-block-53">
                  <div class="text-block-3">Required</div>
                  <div class="div-block-54"><img src="images/White-Check.svg" width="8" alt=""></div>
                </div>
                <div class="div-block-53">
                  <div class="text-block-3">Required</div>
                  <div class="div-block-54"><img src="images/White-Check.svg" width="8" alt=""></div>
                </div>
                <div class="div-block-53">
                  <div class="text-block-3">Required</div>
                  <div class="div-block-54"><img src="images/White-Check.svg" width="8" alt=""></div>
                </div>
              </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
               <div class="w-form-fail block" v-for="err in errors" :key="err">
                <div>{{err}}</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div class="div-block-141">
            <a href="#" class="link-6 grey" @click.prevent="closeDialog(true)">Cancel</a>
            <a href="#" class="link-6 grey" @click.prevent="deleteEducation()">Delete</a><a href="#" @click.prevent="saveEducation()" class="link-6">Save</a></div>
</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["user"],
  data() {
    return {
      educationData: {
        education: []
      },
      errors: []
    };
  },
  created() {
    this.educationData.education = JSON.parse(
      JSON.stringify(this.profile.education)
    );
    this.educationData.education[this.selectedEducationIndex].from = new Date(this.currentEducation.from).toISOString().split('T')[0]
    this.educationData.education[this.selectedEducationIndex].to = new Date(this.currentEducation.to).toISOString().split('T')[0]
  },
  methods: {
    closeDialog(resetForm) {
      if(resetForm){
          this.$store.dispatch("profile/resetFormData");
      }
      this.$store.dispatch("profile/setProfileForm", null);
    },
    saveEducation() {
      if (this.checkForm()) {
        this.$store.dispatch("profile/updateProfile", this.educationData);
        this.closeDialog();
      }
    },
    deleteEducation(){
this.educationData.education = this.educationData.education.splice(this.selectedEducationIndex, 1);
        this.$store.dispatch("profile/updateProfile", this.educationData);
        this.closeDialog();
    },
    checkForm: function() {
      this.errors = [];

      if (!this.currentEducation.school) {
        this.errors.push("School required.");
      }
      if (!this.currentEducation.degree) {
        this.errors.push("Degree required.");
      }
      if (!this.currentEducation.from) {
        this.errors.push("From Date required.");
      }
      if (!this.currentEducation.fieldOfStudy) {
        this.errors.push("FieldOfStudy required.");
      }
       if (this.currentEducation.currentlyAttend) {
      if (!this.currentEducation.from) {
        this.errors.push("To Date required.");
      }
      } else {
        if (!this.currentEducation.from || !this.currentEducation.to){
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
      let from = new Date(this.currentEducation.from);
      let to = new Date(toDate);
      if(+from <= +to){
        this.educationData.education[this.selectedEducationIndex].to = toDate;
      } else {
        this.educationData.education[this.selectedEducationIndex].to = this.educationData.education[this.selectedEducationIndex].from;
        document.getElementById('toDate').value = this.educationData.education[this.selectedEducationIndex].from;
      }
    }
  },
  computed: {
    ...mapState({
      selectedEducationIndex: state =>
        state.profile.PROFILE_FORMS.selectedEducationIndex,
      PROFILE_FORMS: state => state.profile.PROFILE_FORMS,
      profileForm: state => state.profile.notifications,
      profile: state => state.profile.profile
    }),
    currentEducation() {
      return this.educationData.education[this.selectedEducationIndex];
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
</style>
