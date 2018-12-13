<template>
    <div class="modal-wrapper">
    <div class="_100-vh center">
      <div class="login-wrapper">
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
              <form @submit.prevent="handleSubmit" id="email-form" name="email-form" data-name="Email Form" class="form-4" v-if="isValidUrl && !successMessage">
                <img src="../assets/password.svg" class="pwd-icon" />
                <input type="password" v-model="password" class="text-field-3 w-input" maxlength="256" name="password" data-name="password" placeholder="New Password" id="password" required="">
               <img src="../assets/password.svg" class="pwd-icon" />
                <input type="password" v-model="confirmPassword" class="text-field-3 w-input" maxlength="256" name="password" data-name="password" placeholder="Confirm Password" id="confirmPassword" required="">
                <input type="submit" :disabled="submitted || !passwordValidation" value="Save" data-wait="Please wait..." class="submit-button-4 w-button">
                </form>

                <form @submit.prevent="gotoLogin()" v-if="successMessage" class="form-4">
                <input type="submit" value="Login" data-wait="Please wait..." class="submit-button-4 w-button">
                </form>
              <div class="w-form-done block" v-if="successMessage">
                <div>{{successMessage}}</div>
              </div>
              <div class="w-form-fail block" v-if="resetError">
                <div>{{resetError}}</div>
              </div>
            </div>
            <div class="_20px-bottom-margin">
              <div class="flex-space-between">
                <div class="div-block-101">
                  <router-link class="link-4" :to="{name: 'login'}">
                    Login
                 </router-link>
                </div>
                <div class="div-block-101 right">
                  <div>
                 <router-link class="link-4" :to="{name: 'forgot-password'}">
                    Forgot password?
                 </router-link>
                    </div>
                </div>
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
      resetToken: "",
      password: "",
      confirmPassword: "",
      successMessage: "",
      submitted: false,
      resetError: null,
      isValidUrl: true
    };
  },
  created() {
    this.resetToken = this.$route.query.resetToken;
  },
  computed: {
    passwordValidation() {
      let pwdLength = this.password.length < 8 && this.confirmPassword.length > 1;
      if (pwdLength) {
        this.resetError = "Password must be 8 characters long!";
        return false;
      } else if (this.password !== this.confirmPassword ) {
        this.resetError =  "Password and Confirm password should be same!";
        return false;
      } else {
        this.resetError = "";
        return true;
      }
    }
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      const { password, confirmPassword } = this;
      const { dispatch } = this.$store;
      if (this.passwordValidation) {
        dispatch("authentication/resetForgetPassword", {
          password,
          confirmPassword,
          resetToken : this.resetToken
        }).then(
          response => {
            console.log(response.data);
            this.successMessage = response.data.message;
          },
          error => {
            this.isValidUrl = false;
            this.submitted = false;
            this.resetError = error.response.data.message;
          }
        );
      }
    },
    gotoLogin(){
      this.$router.push({name:'login'});
    }
  }
};
</script>
<style lang="scss" scoped>
.checkbox {
  font-size: 18px;
}
.wordmark {
  height: 32px;
  .cls-1 {
    fill: #22283a;
  }

  .cls-2 {
    fill: #e04859;
  }

  .cls-3 {
    fill: #ebcb4d;
  }

  .cls-4 {
    fill: #3ea7f4;
  }
}
.fb-icon {
  height: 18px;
  .cls-1 {
    fill: #fff;
  }
}
.google-icon {
  height: 18px;
  .cls-1 {
    fill: #4285f4;
  }

  .cls-2 {
    fill: #34a853;
  }

  .cls-3 {
    fill: #fbbc05;
  }

  .cls-4 {
    fill: #ea4335;
  }

  .cls-5 {
    fill: none;
  }
}
.pwd-icon {
  height: 18px;
  position: relative;
  top: 36px;
  padding-left: 20px;
  &.email {
    height: 12px;
    top: 36px;
  }
}
.text-field-3 {
  padding-left: 45px !important;
}
.link-4 {
  color: #bcbcbc;
  text-decoration: none;
}
</style>
