<template>
<svg xmlns="http://www.w3.org/2000/svg" :style="getStyle" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
  <defs>

    <clipPath id="clip-path">
      <rect id="Rectangle_5687" data-name="Rectangle 5687" style="fill: #fff;" class="cls-1" width="14" height="11.659"/>
    </clipPath>
  </defs>
  <g id="Group_6200" data-name="Group 6200" transform="translate(-423 -656)">
    <circle id="Ellipse_1152" data-name="Ellipse 1152" class="cls-2" style="fill: #3ebae8;" cx="16" cy="16" r="16" transform="translate(423 656)"/>
    <g id="twitter" transform="translate(432 665.9)">
      <g id="Group_3917" data-name="Group 3917" transform="translate(0 0.1)">
        <g id="Group_3916" data-name="Group 3916" class="cls-3" style="clip-path: url(#clip-path); fill: #fff;">
          <path id="Path_6104" data-name="Path 6104" class="cls-1" style="fill: #fff;" d="M13.786,1.35a5.559,5.559,0,0,1-.962.323A2.958,2.958,0,0,0,13.615.409a.158.158,0,0,0-.233-.183,5.578,5.578,0,0,1-1.47.609.332.332,0,0,1-.094.013.394.394,0,0,1-.26-.1A3.01,3.01,0,0,0,9.57,0a3.207,3.207,0,0,0-.954.149,2.922,2.922,0,0,0-1.967,2.1,3.263,3.263,0,0,0-.07,1.107.125.125,0,0,1-.025.085.107.107,0,0,1-.085.038H6.457A7.914,7.914,0,0,1,1.029.583.158.158,0,0,0,.769.6a3.01,3.01,0,0,0,.49,3.662A2.628,2.628,0,0,1,.572,4a.157.157,0,0,0-.235.137A3.024,3.024,0,0,0,2.1,6.919H2.033a2.876,2.876,0,0,1-.507-.047.157.157,0,0,0-.178.2A3.015,3.015,0,0,0,3.732,9.129a5.578,5.578,0,0,1-3.112.945H.271a.228.228,0,0,0-.225.174.24.24,0,0,0,.115.264,8.275,8.275,0,0,0,4.156,1.12,8.352,8.352,0,0,0,3.551-.754,7.877,7.877,0,0,0,2.6-1.946,8.567,8.567,0,0,0,1.592-2.666A8.431,8.431,0,0,0,12.6,3.349V3.3a.517.517,0,0,1,.192-.4,5.867,5.867,0,0,0,1.2-1.316.164.164,0,0,0-.2-.239Zm0,0" transform="translate(-0.036 -0.004)"/>
        </g>
      </g>
    </g>
  </g>
</svg>

</template>
<script>
export default {
  props:['cStyle'],
  computed:{
    getStyle(){
return this.cStyle || {
  height: '32px'
}
    }
  }
}
</script>
<style scoped>
      .cls-1 {
        fill: #fff;
      }

      .cls-2 {
        fill: #3ebae8;
      }

      .cls-3 {
        clip-path: url(#clip-path);
      }
    </style>