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
            <div class="text-block-12">Sign in and start learning <br>the most in demand skills</div>
          </div>
        </div>
        <div class="div-block-94">
          <div class="_40px-pad-wrap stretch">
            <div class="_40px-bottom-margin center">
                <wordmark class="wordmark" />
                </div>
            <div class="form-block-5 w-form">
              <form @submit.prevent="handleSubmit" id="email-form" name="email-form" data-name="Email Form" class="form-4">
               <Email class="pwd-icon email" />
                <input type="email" v-model="email" class="text-field-3 w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" id="email" required="">
               <Password class="pwd-icon" />
                <input type="password" v-model="password" class="text-field-3 w-input" maxlength="256" name="password" data-name="password" placeholder="Password" id="password" required="">
                <input type="submit" :disabled="submitted || !email || !password" value="Sign in" data-wait="Please wait..." class="submit-button-4 w-button">
                </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail" v-if="loginError">
                <div>{{loginError}}</div>
              </div>
            </div>
            <div class="_20px-bottom-margin">
              <div class="flex-space-between">
                <div class="div-block-101">
                    <input type="checkbox" class="image-22 checkbox" />
                  <div>Remember me</div>
                </div>
                <div class="div-block-101 right">
                  <div>Forgot password?</div>
                </div>
              </div>
            </div>
            <div class="_10px-botttom-margin">
              <div class="div-block-96">
                <div class="div-block-97"></div>
                <div class="text-block-9">or</div>
                <div class="div-block-97"></div>
              </div>
            </div>
            <div class="_20px-bottom-margin">
              <div class="flex-space-between">
                <div class="social-sign-in facebook">
                    <facebook class="fb-icon image-20" />
                  <div class="text-block-10">Sign in with Facebook</div>
                </div>
                <div class="social-sign-in">
                    <google class="google-icon image-21" />
                  <div>Sign in with Google</div>
                </div>
              </div>
            </div>
            <div class="div-block-98">
              <div class="div-block-99">
                <div class="text-block-11">Not a member?</div><a href="#" class="link-4">Sign up</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import google from "../assets/google.svg";
import facebook from "../assets/facebook_1.svg";
import wordmark from "../assets/wordmark.svg";
import Password from "../assets/password.svg";
import Name from "../assets/name.svg";
import Email from "../assets/email.svg";''


export default {
  components: {
    google,
    facebook,
    wordmark,
    Password,
    Name,
    Email
  },
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
      loginError: null
    };
  },
  computed: {
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    }
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      const { email, password } = this;
      const { dispatch } = this.$store;
      if (email && password) {
        dispatch("authentication/login", { email, password }).then(
          response => {
            let user = response.data.user;
            if (user.accessToken) {
              dispatch("authentication/loginSuccess", user);
              this.$router.push("/");
            }
          },
          error => {
            this.submitted = false;
            if (error.request.status === 401) {
              this.loginError =
                "The email or password you entered is not valid!";
            }
            dispatch("authentication/loginFailure", error);
          }
        );
      }
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
  top: 40px;
  padding-left: 20px;
  &.email {
    height: 12px;
    top: 36px;
  }
}
.text-field-3 {
  padding-left: 45px !important;
}
</style>
