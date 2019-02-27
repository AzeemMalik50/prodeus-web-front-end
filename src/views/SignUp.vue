<template>
    <div class="modal-wrapper" @click="closeSignUp">
    <div class="_100-vh center">
      <div class="login-wrapper" @click.stop="doNothing">
        <div class="div-block-93">
          <div class="div-block-95">
            <div>
              <div class="_15px-bottom-padding">
                  <h1 class="heading-39">Enroll with Prodeus <br>for Free.</h1>
              </div>
            </div>
            <div class="_15px-bottom-padding">
              <div class="div-block-100"></div>
            </div>
            <div class="text-block-12">Sign up and start learning <br>the most in demand skills</div>
          </div>
        </div>
        <div class="div-block-94">
          <div class="_40px-pad-wrap stretch">
            <div class="_40px-bottom-margin center">
                <img src="../assets/facebook_1.svg" class="wordmark" />
                </div>
            <div class="form-block-5 w-form">
              <form @submit.prevent="handleSubmit" id="email-form" name="email-form" data-name="Email Form" class="form-4">
            <img src="../assets/name.svg" class="pwd-icon name"  />
              <input type="text" v-model="fullName" class="text-field-3 w-input" maxlength="256" name="name" data-name="Name" placeholder="Full name" id="name">
               <img src="../assets/email.svg" class="pwd-icon email" />
                <input type="email" v-model="email" class="text-field-3 w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" id="email" required="">
               <img src="../assets/password.svg" class="pwd-icon" />
                <input type="password" v-model="password" class="text-field-3 w-input" maxlength="256" name="password" data-name="password" placeholder="Password" id="password" required="">
                <input type="submit" :disabled="submitted || !email || !password" value="Sign up" data-wait="Please wait..." class="submit-button-4 w-button">
                </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail block" v-if="loginError">
                <div>{{loginError}}</div>
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
                <div class="social-sign-in facebook cursor-pointer" @click="auth('facebook')">
                    <img src="../assets/facebook_1.svg" class="fb-icon image-20" />
                  <div class="text-block-10">Sign up with Facebook</div>
                </div>
                <div class="social-sign-in cursor-pointer" @click="auth('google')">
                    <img src="../assets/google.svg" class="google-icon image-21" />
                  <div>Sign up with Google</div>
                </div>
              </div>
            </div>
           <div class="div-block-98">
              <p class="paragraph-7">By signing up you agree to Prodeus’ Terms of Service and Privacy Policy.</p>
              <div class="div-block-99">
                <div class="text-block-11">Already a member?</div>
                <a href="#" class="link-4" @click.prevent="openLogin">
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
      password: "",
      fullName:"",
      submitted: false,
      loginError: null
    };
  },
  computed: {

  },
  methods: {
     closeSignUp() {
      this.$store.dispatch("setSignUpForm", false);
    },
    openLogin(){
      this.closeSignUp();
      this.$store.dispatch('setLoginForm', true)
    },
    doNothing() {},
    handleSubmit(e) {
      this.submitted = true;
      const { email, password , fullName} = this;
      const { dispatch } = this.$store;
      if (email && password) {
        dispatch("authentication/signup", { email, password, fullName }).then(
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
    },
     auth(network) {
      const { dispatch } = this.$store;
      const hello = this.hello;
      hello(network)
        .login({
          scope: "email",
          force: true
        })
        .then(() => {
          const authRes = hello(network).getAuthResponse();
          if (network === "facebook") {
            dispatch("authentication/facebookAuth", authRes.access_token);
          } else {
            dispatch("authentication/googleAuth", authRes.access_token);
          }
        });
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
  top: 34px;
  padding-left: 20px;
  &.email {
    height: 12px;
  }
}
.text-field-3 {
  padding-left: 45px !important;
}
</style>
