<template>
  <div id="app">
    <router-view/>
    <Login  v-if="isOpenLogin"/>
    <SignUp v-if="isOpenSignup" />
    <forgot-password v-if="isOpenResetPassword" />
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import ForgotPassword from "./views/ForgotPassword";

export default {
components:{
  Login,
  SignUp,
  ForgotPassword
},
computed: {
   ...mapState({
      isOpenLogin: state => state.isOpenLogin,
      isOpenSignup: state => state.isOpenSignup,
      isOpenResetPassword: state => state.isOpenResetPassword
    })
}
}
</script>

<style lang="scss">
#app{
  margin-bottom: 50px;
}
svg {
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
  .fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */

 {
  opacity: 0;
}
.cursor-pointer {
  cursor: pointer;
}
.ql-container{
    //border-bottom: 2px solid #8446e8 !important;
    border-bottom-right-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
}

.ql-toolbar {
 // border-top-left-radius: 5px!important;
  //  border-top-right-radius: 5px!important;
}
//loader overlay
.vld-overlay.is-full-page {
    z-index: 100000 !important;
}
</style>
