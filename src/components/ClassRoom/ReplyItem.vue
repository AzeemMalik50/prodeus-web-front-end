<template>
  <div class="message-wrap" v-if="!isDeleted">
    <div class="message-content-wrap">
      <div class="_10px-botttom-margin">
        <div class="reply-wrap" v-if="!enableEdit">
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
              <edit-menu :onDel="deleteDiscussion" :onEdit="openEdit" :menuStyle="{top: '35px',right: '10px'}" :iconStyle="{top: '10px',right: '10px'}" />
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
         <div class="_20px-bottom-margin" v-if="enableEdit" v-on-clickaway="disableEdit">
          <edit-comment-input :ref="'edit-comment' + discussItem._id" :discId="discussItem._id + 'edit'" :discItem="discussItem" :onSubmit="onSubmitEdit" />
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
import { mixin as clickaway } from "vue-clickaway";
export default {
  name: "reply-item",
  props: ["discussItem", "level"],
  mixins: [clickaway],
  data() {
    return {
      isDeleted: false,
      currentLevel: "1",
      enableEdit: false,
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
      showReply: false,
      isEdit: false
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
    disableEdit() {
      this.enableEdit = false;
    },
    deleteDiscussion() {
      this.$store.dispatch("discussion/deleteDiscussion", this.discussItem).then(
        resp => {
          this.isDeleted = true;
        },
        err => {
          console.error(err);
        }
      );
    },
    openEdit() {
      this.enableEdit = true;
      this.$nextTick(() => {
        this.$refs["edit-comment" + this.discussItem._id].setFocus();
      });
    },
    visibleInput() {
      this.showReply = true;
      this.$nextTick(() => {
        this.$refs["comment" + this.discussItem._id].setFocus();
      });
      // this.$nextTick(() => {
      //   this.$refs[this.discussItem._id].focus();
      // });
    },
    onSubmitEdit() {
      this.enableEdit = false;
      let payload = {
        _id: this.discussItem._id,
        body: this.discussItem.body,
        media: this.discussItem.media
      };

      this.$store
        .dispatch("discussion/editDiscussion", payload)
        .then(resp => {}, err => {});
    },
    onSubmit() {
      if (this.discus.body && this.discus.type) {
        let disc = JSON.parse(JSON.stringify(this.discus));
        if (!disc.media.mediaId) {
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
    },
    visibelEdit() {
      this.isEdit = true;
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
    },
    isCreater() {
      return (
        this.discussItem &&
        this.discussItem.user &&
        this.currentUser._id === this.discussItem.user._id
      );
    }
  }
};
</script>

<style lang="scss" scoped>
// .edit-menu {
//   top: 35px !important;
//   right: 10px !important;
// }

// .menu-icon {
//   top: 10px !important;
//   right: 10px !important;
// }

.edit-container {
  position: relative;
}
</style>
