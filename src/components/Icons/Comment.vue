<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
  </defs>
  <g id="Group_5402" data-name="Group 5402" transform="translate(-1004 -635)">
    <circle id="Ellipse_1123" data-name="Ellipse 1123" :class="classObject"  cx="16" cy="16" r="16" transform="translate(1004 635)"/>
    <g id="Group_4427" data-name="Group 4427">
      <path id="XMLID_1_" class="cls-2" d="M12.051,0H1.722A1.727,1.727,0,0,0,0,1.722V13.773l3.443-3.443h8.608a1.727,1.727,0,0,0,1.722-1.722V1.722A1.727,1.727,0,0,0,12.051,0Z" transform="translate(1013.113 644)"/>
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
    fill: #ebcb4d !important;
    }
  }
}
.inactive {
  fill: #bcbcbc !important;
}
.cls-1 {
  fill: #ebcb4d !important;
}
.cls-2 {
  fill: #fff !important;
}
</style>
