<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
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
</style>
