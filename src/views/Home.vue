<template>
  <div class="home">
    <Header/>
    <div class="page-section">
      <router-view></router-view>
    </div>
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
