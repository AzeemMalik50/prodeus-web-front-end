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
            <div class="_10px-botttom-margin  reply" :class="{'paragraph-4':hasMedia, 'reply': hasMedia }">
              <div v-if="hasMedia">
                <img v-if="discussItem.media.type==='image'" :src="getMedia(discussItem.media.mediaId)" />
                <video v-if="discussItem.media.type==='video'" class="width-100" controls :src="getMedia(discussItem.media.mediaId)"></video>
              </div>
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
                <div class="_16-px-right-margin cursor-pointer discus-hover" @click="visibleInput()" v-if="deepLevel < 3">
                  <h6 class="heading-18 discus-hover">Reply</h6>
                </div>
                <div class="_16-px-right-margin">
                  <h6 class="heading-18">• {{discussItem.createdAt | moment("from", "now", true)}}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <reply-item v-for="disc in discussItem.replies" :key="disc._id" :discussItem="disc" :limitReached="true" :level="currentLevel">
        </reply-item>
        <div class="_20px-bottom-margin" v-if="showReply">
          <comment-input :ref="'comment' + discussItem._id" :discId="discussItem._id" :discItem="discus" :onSubmit="onSubmit" />
        </div>
        <!-- <slot> </slot> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "reply-item",
  props: ["discussItem", "level"],
  data() {
    return {
      currentLevel: "1",
      discus: {
        body: "",
        type: "",
        parent: "",
        media: {
          mediaId: "",
          type: ""
        },
        selectedMedia: {
          mediaType: "",
          file: null
        }
      },
      showReply: false
    };
  },
  created() {
    let level = this.level;
    if (!level) {
      level = "0";
    }
    this.currentLevel = (parseInt(level) + 1).toString();
    this.discus.parent = this.discussItem._id;
    this.discus.type = this.discussItem.type;
  },
  methods: {
    visibleInput() {
      this.showReply = true;
      this.$nextTick(() => {
        this.$refs["comment" + this.discussItem._id].setFocus();
      });
      // this.$nextTick(() => {
      //   this.$refs[this.discussItem._id].focus();
      // });
    },
    onSubmit() {
      if (this.discus.body && this.discus.type) {
         let disc = JSON.parse(JSON.stringify(this.discus));
        if(!disc.media.mediaId){
          delete disc.media;
        }
        this.$store.dispatch("discussion/createDiscussion", disc).then(
          resp => {
            this.discussItem.replies.push(resp.data);
            this.discus.body = "";
            this.discus.media.mediaId = "";
            this.showReply = false;
          },
          err => {}
        );
      }
    },
    getMedia(mediaId) {
      return this.$apiBaseUrl + "/media/" + mediaId;
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.authentication.user
    }),
    deepLevel() {
      return parseInt(this.currentLevel);
    },
    hasMedia() {
      return this.discussItem.media && this.discussItem.media.mediaId;
    }
  }
};
</script>
