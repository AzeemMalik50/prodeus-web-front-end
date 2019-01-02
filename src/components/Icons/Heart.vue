<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
  </defs>
  <g id="Group_5401" data-name="Group 5401" transform="translate(-1036 -635)">
    <circle id="Ellipse_1125" data-name="Ellipse 1125"  :class="classObject"  cx="16" cy="16" r="16" transform="translate(1036 635)"/>
    <path id="XMLID_1_" class="cls-2" d="M14,3.559A3.8,3.8,0,0,0,10.15,0,3.967,3.967,0,0,0,7.088,1.513,3.967,3.967,0,0,0,4.025,0C2.012,0,0,1.69,0,3.559H0c0,4.716,7,9.787,7,9.787H7s7-5.16,7-9.787Z" transform="translate(1045.116 644.5)"/>
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
    fill: #e04859 !important;
    }
  }
}
.inactive {
  fill: #bcbcbc !important;
}
.cls-1 {
  fill: #e04859 !important;
}
.cls-2 {
  fill: #fff !important;
}
</style>
