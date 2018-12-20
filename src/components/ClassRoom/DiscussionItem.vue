<template>
 <div class="tabs-content-2 w-tab-content">
              <!-- main comment -->
              <div class="_100-percent-justify-start">
                <div class="_10px-botttom-margin">
                  <div class="flex-space-between">
                    <div class="horiz-left-align-justify-atart">
                     <user-thumbnail :user="discussItem.user" />
                      <div class="_10-side-margins">
                        <h1 class="heading-35">{{discussItem.user.fullName}}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="_10px-botttom-margin">
                  <p class="paragraph-4">
                    {{discussItem.body}}
                    </p>
                </div>
                <div class="_10px-botttom-margin">
                  <div class="left-align">
                    <div class="_16-px-right-margin cursor-pointer">
                      <!-- <h6 class="heading-18 discus-hover">Like</h6> -->
                  <disc-like :discussItem="discussItem" />
                    </div>
                    <div class="_16-px-right-margin cursor-pointer" @click="visibleInput()">
                      <h6 class="heading-18 discus-hover">Reply</h6>
                    </div>
                    <div class="_16-px-right-margin">
                      <h6 class="heading-18">• 24h</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="_20px-bottom-margin">
                <div class="flex-space-between">
                  <div class="_20-right">
                    <div class="horiz-left-align-justify-atart">
                      <!-- <div class="profile-picture _30"></div> -->
                     <user-thumbnail :user="currentUser" />
                    </div>
                  </div>
                  <div class="align-right-justify-start">
                    <div class="form-block-3 w-form">
                      <form id="email-form" name="email-form" data-name="Email Form">
                        <input type="text" ref="comment1" v-on:keydown.enter.prevent='onSubmit' v-model="discus.body" class="comment-block w-input" maxlength="256" name="Comment" data-name="Comment" placeholder="Write comment here" id="Comment"></form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<reply-item v-for="disc in discussItem.replies" :key="disc._id" :discussItem="disc"  >
  <!-- <reply-item >
    <reply-item />
  </reply-item> -->
</reply-item>
              <!-- <div class="message-wrap">
                <div class="profile-picture _30"></div>
                <div class="message-content-wrap">
                  <div class="_10px-botttom-margin">
                    <div class="left-align">
                      <h6 class="heading-17">Will Cairns</h6>
                    </div>
                  </div>
                  <div class="_10px-botttom-margin">
                    <p class="paragraph-4 reply">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
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
                  <div class="_10px-botttom-margin">
                    <div class="reply-wrap">
                      <div class="profile-picture _28"></div>
                      <div class="message-content-wrap">
                        <div class="_10px-botttom-margin">
                          <div class="left-align">
                            <h6 class="heading-17">Will Cairns</h6>
                          </div>
                        </div>
                        <div class="_10px-botttom-margin">
                          <p class="paragraph-4 reply">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
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
                        <div class="_10px-botttom-margin">
                          <div class="reply-wrap">
                            <div class="profile-picture _28"></div>
                            <div class="message-content-wrap">
                              <div class="_10px-botttom-margin">
                                <div class="left-align">
                                  <h6 class="heading-17">Will Cairns</h6>
                                </div>
                              </div>
                              <div class="_10px-botttom-margin">
                                <p class="paragraph-4 reply">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- comment type -->

            </div>
          <!-- </div> -->
</template>
<script>
import {mapState} from 'vuex';
import ReplyItem from './ReplyItem';

export default {
  components: {
    ReplyItem
  },
  props:['discussItem'],
  data() {
    return {
       discus: {
        body: "",
        type: "",
        parent: ""
      },
      showReply: false
    }
  },
  created() {
    this.discus.parent = this.discussItem._id;
    this.discus.type = this.discussItem.type;
  },
  methods: {
     visibleInput() {
      this.showReply = true;
    },
       onSubmit(){
      if(this.discus.body && this.discus.type){
        this.$store.dispatch('discussion/createDiscussion', this.discus)
        .then(resp=>{
          this.discussItem.replies.push(resp.data)
          this.discus.body = '';
          console.log(resp);
        }, err=>{
        })
      }
    }
  },
  computed: {
      ...mapState({
      currentUser: state => state.authentication.user
    }),
  }
}
</script>
