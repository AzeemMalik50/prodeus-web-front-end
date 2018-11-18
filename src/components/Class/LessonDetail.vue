<template>
    <div class="lesson-info-wrap">
        <div class="div-block-80">
            <div class="_10px-botttom-margin">
                <h1 class="heading-31">Lesson Description</h1>
            </div>
            <div class="_20px-bottom-margin">
                <p class="paragraph-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                    cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div class="_10px-botttom-margin">
                <h1 class="heading-31">Assignement Guidelines</h1>
            </div>
            <div class="_20px-bottom-margin">
                <p class="paragraph-6"  v-html="lesson.description">
                    </p>
            </div>
            <div class="_10px-botttom-margin">
                <h1 class="heading-31">Attached Files</h1>
            </div>
            <div class="div-block-82">
                <File class="image-11" />
                <div class="div-block-81"><a href="#" class="link-2">Latin typography.zip</a>
                    <div class="text-block-6">346KB</div>
                </div>
            </div>
            <div class="div-block-82">
                <File class="image-11" />
                <div class="div-block-81"><a href="#" class="link-2">Latin typography.zip</a>
                    <div class="text-block-6">346KB</div>
                </div>
            </div>
        </div>
        <div class="div-block-79">
            <PlayWhite class="play" />
        </div>
    </div>
</template>

<script>
import PlayWhite from "@/assets/Play-White.svg";
import File from "@/assets/file.svg";

export default {
  components: {
    PlayWhite,
    File
  },
  props:['lesson']
};
</script>


<style lang="scss" scoped>
.image-11 {
  height: 15px;
  .cls-1 {
    fill: #0d0d0d;
  }
}

.playt {
  height: 40px;
  .cls-1 {
    fill: #fff;
  }
  .cls-2 {
    fill: #8446e8;
  }
}
</style>
