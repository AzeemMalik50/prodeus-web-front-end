<template>
  <div class="home">
    <Header/>
      <transition
        name="fade"
        mode="out-in">
      <router-view></router-view>
      </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
export default {
  name: 'home',
  components: {
    Header
  }
};
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
