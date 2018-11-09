<template>
    <!-- <div class="_10px-botttom-margin"> -->
        <div class="reply-wrap">
            <div class="profile-picture _28"></div>
            <div class="message-content-wrap">
                <div class="_10px-botttom-margin">
                    <div class="left-align">
                        <h6 class="heading-17">Will Cairns</h6>
                        <div class="_10-side-margins">
                            <h6 v-if="!isProjectOpen" class="heading-18">10:52 in Lesson 2</h6>
                        </div>
                    </div>
                </div>
                <div class="_10px-botttom-margin">
                    <p class="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                        cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
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
                <slot></slot>
                <!-- <div class="_10px-botttom-margin">
                    <div class="reply-wrap">
                        <div class="profile-picture _28"></div>
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
                                <p class="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus
                                    nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
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
                        </div>
                    </div>
                </div> -->
               
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
     computed: {
    ...mapGetters(["isProjectOpen"])
  }
};
</script>
