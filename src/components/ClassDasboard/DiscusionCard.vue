<template>
  <div class="card _10px-botttom-padding" :class="cardClasses">
    <div class="_20px-pad-wrapper">
      <div class="_20px-margin">      
      <div class="message-wrap">
        <div class="profile-picture _38px" :class="dpClasses"></div>
        <div class="message-content-wrap">
          <div class="_10px-botttom-margin">
            <div class="left-align">
              <h6 class="heading-17">Will Cairns</h6>
              <div class="_10-side-margins">
                <h6 class="heading-18">10:52 in Lesson 2</h6>
              </div>
            </div>
          </div>
          <div class="_10px-botttom-margin">
            <p class="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
              id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
          <div class="_10px-botttom-margin">
            <div class="left-align">
              <div class="_16-px-right-margin">
                <h6 class="heading-18">Like</h6>
              </div>
              <div class="_16-px-right-margin">
                <h6 class="heading-18">Reply</h6>
              </div>
              <div class="_16-px-right-margin">
                <h6 class="heading-18">• 24h</h6>
              </div>
            </div>
          </div>
            <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">          
          <div v-if="hideReply" class="left-align">
            <div class="_16-px-right-margin" @click="showReply()">
              <img src="@/assets/replies.svg" class="reply" />
            </div>
            <div class="message-profile-wrap cursor-pointer" @click="showReply()">
              <div class="div-block-32"></div>
              <div class="div-block-32 offset-1"></div>
              <div class="div-block-32 offset-2"></div>
            </div>
            <div class="_16-px-right-margin cursor-pointer" @click="showReply()">
              <h6 class="heading-18 black">Ethan Muir Replied • 4 Replies • 13h</h6>
            </div>
          </div>
          <reply v-else>
            <reply>
            </reply>
          </reply>
            </transition>
        </div>
      </div>
      </div>
<comment-input />
    </div>


  </div>
</template>

<script>
import Replies from "@/assets/replies.svg";
import Reply from "@/components/ClassDasboard/Reply.vue";
import CommentInput from "@/components/ClassDasboard/CommentInput.vue";


export default {
  props: ["cardClasses", "dpClasses"],
  components: {
    Replies,
    Reply,
    CommentInput
  },
  data(){
    return {
      hideReply: true
    }
  },
  methods:{
    showReply(){
      this.hideReply = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.reply {
  height: 9px;
  .cls-1 {
    fill: none;
    stroke: #bcbcbc;
  }
  .cls-2 {
    fill: #bcbcbc;
  }
}
</style>
