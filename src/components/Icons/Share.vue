<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
  </defs>
  <g id="Group_6152" data-name="Group 6152" transform="translate(-1004 -635)">
    <path id="Path_13440" data-name="Path 13440" class="first-path" :class="classObject"  d="M16,0A16,16,0,1,1,0,16,16,16,0,0,1,16,0Z" transform="translate(1004 635)"/>
    <path id="share" class="cls-2" d="M15.68,69.04a.538.538,0,0,1-.166.394l-4.48,4.48a.56.56,0,0,1-.954-.394V71.28H8.12q-.857,0-1.536.053a11.088,11.088,0,0,0-1.347.188,5.008,5.008,0,0,0-1.164.372,4.109,4.109,0,0,0-.923.608,3.047,3.047,0,0,0-.7.884A4.755,4.755,0,0,0,2.026,74.6a7.443,7.443,0,0,0-.153,1.584q0,.481.044,1.076a1.808,1.808,0,0,0,.022.206,1.787,1.787,0,0,1,.022.232.326.326,0,0,1-.074.219A.255.255,0,0,1,1.68,78a.3.3,0,0,1-.245-.149.986.986,0,0,1-.114-.192q-.052-.114-.118-.263l-.092-.21A10.507,10.507,0,0,1,0,73.24a7.966,7.966,0,0,1,.464-2.914Q1.881,66.8,8.12,66.8h1.96V64.56a.557.557,0,0,1,.954-.394l4.48,4.48A.538.538,0,0,1,15.68,69.04Z" transform="translate(1012 580)"/>
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
    .first-path {
    fill: #22283a !important;
    }
  }
}
.inactive {
  fill: #bcbcbc !important;
}
.cls-1 {
  fill: #22283a;
}
.cls-2 {
  fill: #fff;
}
</style>
