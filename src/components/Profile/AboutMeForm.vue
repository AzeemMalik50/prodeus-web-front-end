<template>
 <div class="card">
          <div class="_40-side-padding edit">
            <div class="_30-px-top-bottom">
              <div class="flex-space-between">
                <h1 class="heading-4">About me</h1>
              </div>
            </div>
            <div class="w-form">
              <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                <div class="_20px-bottom-margin">
                  <textarea id="About-me" name="About-me" v-model="eUser.biography" placeholder="Tell us a little about yourself..." maxlength="5000" data-name="About me" required="" class="portfolio about w-input">
                    </textarea></div>
              </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div class="div-block-141"><a href="#" @click.prevent="closeDialog()" class="link-6 grey">Cancel</a><a href="#" @click.prevent="saveForm()" class="link-6">Save</a></div>
        </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      eUser: {
        biography: ""
      }
    };
  },
  created() {
    this.eUser.biography = this.user.biography;
  },
  methods: {
    closeDialog() {
      // if (confirm("Are you sure to exit form!")) {
      this.$store.dispatch("profile/setProfileForm", null);
      // }
    },
    saveForm(){
      if(this.eUser.biography){
        this.$store.dispatch('profile/updateProfile', this.eUser);
        this.closeDialog();
      }
    }
  }
};
</script>