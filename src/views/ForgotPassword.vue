<template>
   <div class="modal-wrapper" @click="closeReset">
    <div class="_100-vh center">
      <div class="login-wrapper" @click.stop="doNothing">
        <div class="div-block-93">
          <div class="div-block-95">
            <div>
              <div class="_15px-bottom-padding">
                <h1 class="heading-39">Higher education <br>for the digital age.</h1>
              </div>
            </div>
            <div class="_15px-bottom-padding">
              <div class="div-block-100"></div>
            </div>
            <!-- <div class="text-block-12">Sign in and start learning <br>the most in demand skills</div> -->
          </div>
        </div>
        <div class="div-block-94">
          <div class="_40px-pad-wrap stretch">
            <div class="_40px-bottom-margin center">
                <img src="../assets//wordmark.svg" class="wordmark" />
                </div>
            <div class="form-block-5 w-form">
              <form v-if="!successMessage" @submit.prevent="handleSubmit" id="email-form" name="email-form" data-name="Email Form" class="form-4">
               <img src="../assets/email.svg" class="pwd-icon email" />
                <input type="email" v-model="email" class="text-field-3 w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" id="email" required="">
               <!-- <img src="../assets/password.svg" class="pwd-icon" />
                <input type="password" v-model="password" class="text-field-3 w-input" maxlength="256" name="password" data-name="password" placeholder="Password" id="password" required=""> -->
                <input type="submit" :disabled="submitted || !email" value="Reset Password" data-wait="Please wait..." class="submit-button-4 w-button">
                </form>
              <div class="w-form-done block" v-if="successMessage">
                <div>{{successMessage}}</div>
              </div>
              <div class="w-form-fail block" v-if="resetError">
                <div>{{resetError}}</div>
              </div>
            </div>

            <div class="_10px-botttom-margin">
              <div class="div-block-96">
                <div class="div-block-97"></div>
                <div class="text-block-9">or</div>
                <div class="div-block-97"></div>
              </div>
            </div>
            <div class="div-block-98">
              <div class="div-block-99">
                 <a href="#" @click.prevent="openLogin" class="link-4">
                    Login
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      submitted: false,
      resetError: null,
      successMessage:''
    };
  },

  methods: {
    handleSubmit(e) {
      this.submitted = true;
      const { email } = this;
      const { dispatch } = this.$store;
      if (email) {
        dispatch("authentication/forgetPassword", { email }).then(
          response => {
            console.log(response.data);
            this.successMessage = response.data.message;
          },
          error => {
            this.submitted = false;
            this.resetError = error.response.data.message;
          }
        );
      }
    },
    closeReset(){
      this.$store.dispatch('setResetpasswordForm', false)
    },
    doNothing() {},
    openLogin() {
      this.closeReset();
      this.$store.dispatch("setLoginForm", true);
    }
  }
};
</script>
