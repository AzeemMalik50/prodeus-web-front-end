<template>
<div class="modal-wrapper" @click.self="closeDialog()">
      <div class="_100-vh"  @click.self="closeDialog()">
      <div class="flexcolumn edit">
 <div class="card">
          <div class="_40-side-padding edit">
            <div class="_30-px-top-bottom">
              <div class="flex-space-between">
                <h1 class="heading-4">Account Settings</h1>
              </div>
            </div>
            <!-- <div class="_40px-bottom-margin center">
        <input type="file"  name="myImage" accept="image/x-png,image/gif,image/jpeg" id="profileImage" @change="fileSelect($event.target.name, $event.target.files);" class="input-file" hidden>
         <img :src="profilePic" v-if="profilePic" class="add-picture" width="30" alt="" @click="chooseFile()">
         <img src="images/photo-camera.svg" v-else class="add-picture" width="30" alt="" @click="chooseFile()">

            </div> -->
            <div class="w-form">
              <form id="email-form-3" name="email-form-3" data-name="Email Form 3" v-if="!submitted">

                <!-- <div class="_20px-bottom-margin">
                  <input type="password" class="portfolio _20px-bottom-margin w-input" v-model="creds.oldPassword"  name="old" data-name="old" placeholder="Old password" id="old" required="">
                  </div> -->
                <div class="_20px-bottom-margin">
                  <input type="password" class="portfolio _20px-bottom-margin w-input" v-model="creds.newPassword"  name="new" data-name="new" placeholder="New password" id="new" required=""></div>
                <div class="_40px-bottom-margin">
                  <input type="password" class="portfolio _20px-bottom-margin w-input" v-model="creds.confirmPassword"  name="confirm" data-name="confirm" placeholder="Confirm password" id="confirm" required=""></div>
              </form>
              <div class="w-form-done block" v-if="successMessage">
                <div>{{successMessage}}</div>
              </div>
              <div class="w-form-fail block" v-if="formError">
                <div>{{formError}}</div>
              </div>
               <div class="w-form-fail block" v-for="err in errors" :key="err">
                <div>{{err}}</div>
              </div>
            </div>
          </div>
          <div class="div-block-141"><a href="#" @click.prevent="closeDialog()" class="link-6 grey">Back</a>
          <a href="#" @click.prevent="handelSubmit()" v-if="!submitted" class="link-6">Save</a></div>
        </div>
      </div>
      </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      submitted: false,
      successMessage: "",
      errors: [],
      creds: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      }
    };
  },
  created() {},
  computed: {
    formError() {
      let pwdLength =
        this.creds.newPassword.length < 8 &&
        this.creds.confirmPassword.length > 1;
      if (pwdLength) {
        return "Password must be 8 characters long!";
      } else if (this.creds.newPassword !== this.creds.confirmPassword) {
        return "New password and Confirm password must be same!";
      } else {
        return null;
      }
    }
  },
  methods: {
    closeDialog() {
      this.$store.dispatch("setProfileSettingForm", false);
    },
    handelSubmit() {
      if (this.checkForm()) {
        this.$store.dispatch("profile/updateSettings", this.creds).then(
          res => {
           this.submitted = true;
           this.successMessage = res.data.message;
          },
          err => {
            this.submitted = false;
            console.log(err);
          }
        );
      }
    },
    checkForm: function() {
      this.errors = [];

      // if (!this.creds.oldPassword) {
      //   this.errors.push("Old password required.");
      // }
      if (!this.creds.newPassword) {
        this.errors.push("New password required.");
      }
      if (!this.creds.confirmPassword) {
        this.errors.push("Confirm password required.");
      }
      if (!this.errors.length) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
