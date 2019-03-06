<template>
 <div class="card">
          <div class="_40-side-padding edit">
            <div class="_30-px-top-bottom">
              <div class="flex-space-between">
                <h1 class="heading-4">Basic info</h1>
              </div>
            </div>
            <div class="_40px-bottom-margin center">
        <input type="file"  name="myImage" accept="image/x-png,image/gif,image/jpeg" id="profileImage" @change="fileSelect($event.target.name, $event.target.files);" class="input-file" hidden>
         <img :src="profilePic" v-if="profilePic" class="add-picture" width="30" alt="" @click="chooseFile()">
         <img src="images/photo-camera.svg" v-else class="add-picture" width="30" alt="" @click="chooseFile()">

            </div>
            <div class="w-form">
              <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                <div>
                  <div class="space-between nowrap _20px-bottom-margin">
                    <input type="text" class="portfolio w-input" v-model="eUser.firstName" maxlength="256" name="Name" data-name="Name" placeholder="First Name" id="Name-2" required="">
                    <div class="div-block-139"></div>
                    <input type="text" class="portfolio w-input" v-model="eUser.lastName" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="Last Name" id="Last-Name" required=""></div>
                </div>
                <div class="_20px-bottom-margin">
                  <input type="email" class="portfolio _20px-bottom-margin w-input" v-model="eUser.local.email" maxlength="256" name="Email" data-name="Email" placeholder="Email" id="Email" required=""></div>
                <div class="_20px-bottom-margin">
                  <input type="tel" class="portfolio _20px-bottom-margin w-input" v-model="eUser.phone" maxlength="256" name="Phone-Number" data-name="Phone Number" placeholder="Phone Number" id="Phone-Number" required=""></div>
                <div class="_40px-bottom-margin">
                  <input type="text" class="portfolio _20px-bottom-margin w-input" v-model="eUser.location" maxlength="256" name="Location-2" data-name="Location 2" placeholder="Location" id="Location-2" required=""></div>
              </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
               <div class="w-form-fail block" v-for="err in errors" :key="err">
                <div>{{err}}</div>
              </div>
            </div>
          </div>
          <div class="div-block-141"><a href="#" @click.prevent="closeDialog()" class="link-6 grey">Cancel</a>
          <a href="#" @click.prevent="handelSubmit()" class="link-6">Save</a></div>
    <Loading :color="'#8446e8'" :active.sync="submitting" :is-full-page="true"></Loading>
        </div>
</template>
<script>
import Loading from "vue-loading-overlay";
export default {
  props: ["user"],
  components: {
    Loading
  },
  data() {
    return {
      submitting: false,
      newImage: null,
      errors: [],
      eUser: {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        fullName: this.user.fullName,
        local: {
          email: this.user.local.email,
          img: this.user.local.img
        },
        phone: this.user.phone,
        location: this.user.location
      }
    };
  },
  created() {
    let nameArray = this.eUser.fullName.split(" ");
    if (!this.eUser.firstName) {
      this.eUser.firstName = nameArray.length > 0 ? nameArray[0] : "";
    }
    if (!this.eUser.lastName) {
      this.eUser.lastName = nameArray.length > 1 ? nameArray[1] : "";
    }
  },
  computed: {
    profilePic() {
      if (this.newImage) {
        return URL.createObjectURL(this.newImage);
      } else if (this.user.local.img) {
      let user = JSON.parse(localStorage.getItem('user'));
        return (
          process.env.VUE_APP_API_BASE_URL + "/media/" + this.user.local.img+ "?at="+user.accessToken
        );
      } else if (this.user.facebook && this.user.facebook.img) {
        return this.user.facebook.img;
      } else if (this.user.google && this.user.google.img) {
        return this.user.google.img;
      } else {
        return null;
      }
    }
  },
  methods: {
    closeDialog() {
      // if (confirm("Are you sure to exit form!")) {
      this.$store.dispatch("profile/setProfileForm", null);
      // }
    },
    fileSelect(fieldName, fileList) {
      if (!fileList.length) return;
      this.newImage = event.target.files[0];
    },
    chooseFile() {
      document.getElementById("profileImage").click();
    },
    handelSubmit() {
      if (this.checkForm()) {
        this.submitting = true;
        if (this.newImage) {
          let formData = new FormData();
          formData.append("prodeusFiles", this.newImage);
          this.$store.dispatch("classes/uploadFiles", formData).then(
            media => {
              this.eUser.local.img = media.data[0];
              this.eUser.fullName =
                this.eUser.firstName + " " + this.eUser.lastName;
              this.$store.dispatch("profile/updateProfile", this.eUser);
              this.closeDialog();
            },
            err => {
              this.submitting = false;
              console.error(err);
            }
          );
        } else {
          this.eUser.fullName =
            this.eUser.firstName + " " + this.eUser.lastName;
          this.$store.dispatch("profile/updateProfile", this.eUser);
          this.closeDialog();
        }
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkForm: function() {
      this.errors = [];

      if (!this.eUser.firstName || !this.eUser.firstName) {
        this.errors.push("Name required.");
      }
      if (!this.eUser.local.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.eUser.local.email)) {
        this.errors.push("Valid email required.");
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
