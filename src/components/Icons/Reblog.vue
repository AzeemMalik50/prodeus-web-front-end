<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
  </defs>
  <g id="Group_5400" data-name="Group 5400" transform="translate(-1036 -635)">
    <circle id="Ellipse_1125" data-name="Ellipse 1125" :class="classObject" cx="16" cy="16" r="16" transform="translate(1036 635)"/>
    <g id="Group_5379" data-name="Group 5379" transform="translate(1046 644)">
      <path id="XMLID_4_" class="cls-2" d="M10,0l2.711,2.712L10,5.25Z" transform="translate(-0.962 0)"/>
      <path id="XMLID_3_" class="cls-2" d="M1.808,7.25,0,9V3.75A1.785,1.785,0,0,1,1.808,2h7.23V3.75H1.808Z" transform="translate(0 -0.25)"/>
      <path id="XMLID_2_" class="cls-2" d="M2.711,15.25,0,12.537,2.711,10Z" transform="translate(0 -1.25)"/>
      <path id="XMLID_1_" class="cls-2" d="M10.23,13H3V11.25h7.23V7.75L12.038,6v5.25A1.785,1.785,0,0,1,10.23,13Z" transform="translate(-0.289 -0.75)"/>
    </g>
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
    circle {
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
