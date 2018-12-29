<template>
  <div class="message-wrap">
    <div class="message-content-wrap">
      <div class="_10px-botttom-margin">
        <div class="reply-wrap">
          <!-- <div class="profile-picture _28"></div> -->
                     <user-thumbnail :user="discussItem.user" />
          <div class="message-content-wrap">
            <div class="_10px-botttom-margin">
              <div class="left-align">
                <h6 class="heading-17">{{discussItem.user.fullName}}</h6>
              </div>
            </div>
            <div class="_10px-botttom-margin">
              <p class="paragraph-4 reply">
                    {{discussItem.body}}
                </p>
            </div>
            <div class="_10px-botttom-margin">
              <div class="left-align">
                <div class="_16-px-right-margin cursor-pointer">
                  <disc-like :discussItem="discussItem" />
                  <!-- <h6 class="heading-18 discus-hover">Like</h6> -->
                </div>
                <div class="_16-px-right-margin cursor-pointer discus-hover" @click="visibleInput()">
                  <h6 class="heading-18 discus-hover">Reply</h6>
                </div>
                <div class="_16-px-right-margin">
                  <h6 class="heading-18">• {{discussItem.createdAt | moment("from", "now", true)}}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="_20px-bottom-margin" v-show="showReply">
          <div class="flex-space-between">
            <div class="_20-right">
              <div class="horiz-left-align-justify-atart">
                     <user-thumbnail :user="currentUser" />
                <!-- <div class="profile-picture _30"></div> -->
              </div>
            </div>
            <div class="align-right-justify-start">
              <div class="form-block-3 w-form">
                <form id="email-form" name="email-form" data-name="Email Form">
                  <input type="text" :ref="discussItem._id" v-on:keydown.enter.prevent='onSubmit' v-model="discus.body" class="comment-block w-input" maxlength="256" :name="discussItem._id" data-name="Comment" placeholder="Write comment here" :id="discussItem._id"></form>
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
</reply-item>
        <!-- <slot> </slot> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name:'reply-item',
  props: ["discussItem"],
  data() {
    return {
      discus: {
        body: "",
        type: "",
        parent: ""
      },
      showReply: false
    };
  },
   created() {
    this.discus.parent = this.discussItem._id;
    this.discus.type = this.discussItem.type;
  },
  methods: {
    visibleInput() {
      this.showReply = true;
      this.$nextTick(() => {
      this.$refs[this.discussItem._id].focus();
      });
    },
        onSubmit(){
      if(this.discus.body && this.discus.type){
        this.$store.dispatch('discussion/createDiscussion', this.discus)
        .then(resp=>{
          this.discussItem.replies.push(resp.data)
          this.discus.body = '';
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
};
</script>
