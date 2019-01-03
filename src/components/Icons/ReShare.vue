<template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.25 20">
  <defs>
  </defs>
  <g id="Group_4349" data-name="Group 4349" transform="translate(4563 538)">
    <path id="XMLID_4_" :class="classObject" d="M10,0l3.75,3.875L10,7.5Z" transform="translate(-4560.5 -538)"/>
    <path id="XMLID_3_" :class="classObject" d="M2.5,9.5,0,12V4.5A2.507,2.507,0,0,1,2.5,2h10V4.5H2.5Z" transform="translate(-4563 -537.5)"/>
    <path id="XMLID_2_" :class="classObject" d="M3.75,17.5,0,13.625,3.75,10Z" transform="translate(-4563 -535.5)"/>
    <path id="XMLID_1_" :class="classObject" d="M13,16H3V13.5H13v-5L15.5,6v7.5A2.507,2.507,0,0,1,13,16Z" transform="translate(-4562.25 -536.5)"/>
  </g>
</svg>

</template>
<script>
export default {
  props:['active'],
  computed:{
    classObject(){
      if(this.active){
        return {
          'cls-1': true
        }
      } else {
        return {'inactive': true}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
svg:hover {
  g {
    path {
    fill: #3e99f4 !important;
    }
  }
}
.inactive {
  fill: #bcbcbc !important;
}
.cls-1 {
  fill: #3e99f4 !important;
}
.cls-2 {
  fill: #fff !important;
}
</style>
