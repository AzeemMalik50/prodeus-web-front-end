<template>
    <div class="card _10px-botttom-padding" :class="cardClasses">
                <div class="_20px-pad-wrapper">
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
                        <p class="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
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
                      <div class="left-align">
                        <div class="_16-px-right-margin">
                            <Replies class="reply" />
                            </div>
                        <div class="message-profile-wrap">
                          <div class="div-block-32"></div>
                          <div class="div-block-32 offset-1"></div>
                          <div class="div-block-32 offset-2"></div>
                        </div>
                        <div class="_16-px-right-margin">
                          <h6 class="heading-18 black">Ethan Muir Replied • 4 Replies • 13h</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import Replies from '@/assets/replies.svg';
export default {
  props:['cardClasses', 'dpClasses'],
  components:{
    Replies
  }
    
}
</script>
<style lang="scss" scoped>
.reply {
  height: 9px;;
   .cls-1 {
        fill: none;
        stroke: #bcbcbc;
      }

      .cls-2 {
        fill: #bcbcbc;
      }
}
</style>
