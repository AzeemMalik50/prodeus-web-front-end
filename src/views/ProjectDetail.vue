<template>
  <div class="modalwrapper" v-if="project && project.user" @click.self="goBack()">
    <div class="post-wrapper">
      <div class="post-content-wrap width-100 " id="project" @click.self="doNothing()">
        <div class="div-block-84">
          <div class="back-wrap cursor-pointer" @click="goBack()">
            <img src="../assets/left-arrow.svg" height="16" alt="" class="image-13">
            <a href="#" class="link-3">Back</a>
          </div>
        </div>
        <edit-menu v-if="isCreater" :onDel="deletePost" :onEdit="editProject" :menuStyle="{top: '50px',right: '20px'}" :iconStyle="{top: '30px',right: '20px'}" />
        <div class="post-head">
          <div class="_20px-bottom-margin">
            <h1 class="heading-1">{{project.title}}</h1>
          </div>
          <div class="_30px-bottom-margin">
            <h2 class="heading-32">{{project.category}}</h2>
          </div>
          <div class="div-block-86">
            <comment @click.native="addComment()" height="32" :active="comm" />
            <heart @click.native="likeProject()" height="32" :active="liked" />
            <reblog v-if="!isAssignment" height="32" @click.native.stop="reblogProject" :active="reblogged" />
            <share v-if="!isAssignment" @click.native="openShare" height="32" :active="share" />
          </div>
        </div>
        <div v-for="cont in project.content" :key="cont._id" class="margin-top-10">
          <img v-if="cont.type==='image'" :src="getMedia(cont.media)" />
          <video v-if="cont.type==='video'" class="width-100" controls :src="getMedia(cont.media)"></video>
          <div v-if="cont.type==='text'" v-html="cont.body"></div>
        </div>
        <div v-if="isAssignment && project.media && project.media.length" class="w-100">
           <div class="_10px-botttom-margin">
                    <h1 class="heading-afile">Attached Files</h1>
                  </div>
                  <div class="div-block-82" v-for="attach in project.media" :key="attach._id">
                    <img src="../assets/file.svg" height="15" alt="" class="image-11">
                    <div class="div-block-81">
                      <a class="link-2 cursor-pointer" :href="url(attach.originalName)" :download="attach.originalName">
                        {{attach.originalName.length < 35 ? attach.originalName : attach.originalName.slice(0, 35)+'...'}}
                        </a>
                      <!-- <div class="text-block-6">346KB</div> -->
                    </div>
                  </div>
        </div>

        <div class="_30px-top-bottom-20-side-padding width-100">
          <div class="_40px-bottom-margin center">
            <h1 class="heading-1">Comments ({{project.discussions.length}})</h1>
          </div>
          <div class="_20px-bottom-margin">
            <comment-input :ref="'postComment'" :discId="'postComment'+project._id" :discItem="discus" :onSubmit="onSubmit" />

          </div>
          <div class="_20px-bottom-margin"></div>
          <reply-item v-for="disc in project.discussions" :key="disc._id" :discussItem="disc">
          </reply-item>
        </div>
      </div>
      <div class="flexcolumn post" @click.self="doNothing()">
        <div class="_40px-bottom-margin">
          <div class="space-between">
            <div class="vert-justify-start-align-left">
              <div class="_10px-botttom-margin">
                <h1 v-if="project.user" class="heading-10">{{project.user.fullName}}</h1>
              </div>
              <a href="#" v-if="isConnected" @click.prevent="disConnect()" class="tag blue">Connected</a>
              <a href="#" v-else @click.prevent="connect()" class="tag outline"> Connect </a>

            </div>
            <user-thumbnail :user="project.user" :myClass="'profile-picture _50'" />
          </div>
        </div>
        <div class="vert-justify-start-align-left">
          <div class="_10px-botttom-margin">
            <h1 class="heading-33">{{project.title}}</h1>
          </div>
          <div class="_20px-bottom-margin">
            <h2 class="heading-34 project">{{project.category}}</h2>
          </div>
              <edit-menu v-if="isCreater" :onDel="deletePost" :onEdit="editProject" :menuStyle="{top: '160px',right: '25px'}" :iconStyle="{top: '140px',right: '25px'}" />
        </div>
        <div class="_20px-bottom-margin" v-if="isAssignment">
          <h2 class="heading-6 grey">Assignment</h2>
        </div>
        <div class="_20px-bottom-margin">
          <div class="text-block-6">Published on {{project.createdAt | moment("MMMM Do, YYYY")}}</div>
        </div>
        <div v-if="isAssignment && isInstructor && isInReview" class="div-block-146">
          <a href="#" @click.prevent="rejectAssignment()" class="link grey">Decline</a>
          <a href="#" @click.prevent="approveAssignment()" class="link">Approve</a>
        </div>
         <div v-if="isInstructor" class="div-block-146">
          <a  class="link grey" v-if="isRejected">Declined</a>
          <a class="link" v-if="isAprroved">Approved</a>
        </div>
        <div class="flex-space-around" v-else>
          <div class="left-align"><img src="../assets/Group-5403.svg" class="cursor-auto" width="20" height="20" alt="">
            <div class="text-block-7">{{project.views}}</div>
          </div>
          <div class="left-align"><img src="../assets/Group-5401.svg" class="cursor-auto" width="20" height="20" alt="">
            <div class="text-block-7">{{project.likes.length}}</div>
          </div>
          <div class="left-align">
            <img src="../assets/Group-5402.svg" width="20" class="cursor-auto" height="20" alt="">
            <div class="text-block-7">{{project.discussions.length}}</div>
          </div>
          <div class="left-align"><img src="../assets/Group-5400.svg" class="cursor-auto" width="20" height="20" alt="">
            <div class="text-block-7">{{project.reBlogs.length}}</div>
          </div>
        </div>
        <div class="social-share-wrap" v-if="!isAssignment">
          <socail-share :data="socialShareData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
const VueScrollTo = require("vue-scrollto");
import CreatePost from "@/views/CreatePost";
import Answers from "../components/Questions/Answers";
import ReplyItem from "../components/ClassRoom/ReplyItem";

export default {
  props: ["postId", "isAssignment"],
  components: {
    CreatePost,
    Answers,
    ReplyItem
  },
  data() {
    return {
      comm: false,
      heart: false,
      reblog: false,
      share: false,
      options: {
        container: "#project",
        easing: "ease-in",
        offset: -60,
        force: true,
        cancelable: true,
        x: false,
        y: true
      },
      socialData: {
        url: ""
      },
      project: {},
      bestAnswer: false,
      discus: {
        body: "",
        type: "Comment",
        postId: "",
        media: {
          mediaId: "",
          type: ""
        },
        selectedMedia: {
          mediaType: "",
          file: null
        }
      }
    };
  },
  created() {
    window.addEventListener("keyup", this.pressEscape);
    this.$eventHub.$on('post-deleted', this.goBack);
    this.socialData.url =
      window.location.origin + "?question=" + this.currentPostId;
    this.discus.postId = this.currentPostId;

    this.$store.dispatch(`${this.moduleType}/getPost`, this.currentPostId).then(
      post => {
        this.project = post.data;
        if (!this.isAssignment) {
          this.viewPost();
        }
        if (this.goToPostComment) {
          setTimeout(() => {
            this.addComment();
          }, 1000);
        }
      },
      err => {
        console.error(err);
      }
    );
  },
  methods: {
    deletePost() {
      this.$store.dispatch("post/deletePost", this.project).then(
        res => {
          this.$eventHub.$emit("post-deleted", this.project);
        },
        err => {
          console.error(err);
        }
      );
    },
    editProject() {
      this.$store.dispatch("post/setEditPost", this.project);
      this.$store.dispatch("toggelPostForm", true);
    },
    rejectAssignment() {
      this.$store
        .dispatch(`${this.moduleType}/updateAssignmentStatus`, {
          id: this.currentPostId,
          status: "rejected"
        })
        .then(
          res => {
            if (res.data && res.data.message == "success") {
              this.project.status = "rejected";
            }
          },
          err => {
            console.error(err);
          }
        );
    },
    approveAssignment() {
      this.$store
        .dispatch(`${this.moduleType}/updateAssignmentStatus`, {
          id: this.currentPostId,
          status: "approved"
        })
        .then(
          res => {
            if (res.data && res.data.message == "success") {
              this.project.status = "approved";
            }
          },
          err => {
            console.error(err);
          }
        );
    },
    openShare() {
      this.$store.dispatch("setSocailShareModalData", this.socialShareData);
      this.$store.dispatch("setSocailShareModal", true);
    },
    pressEscape(e) {
      if (e.keyCode === 27) {
        this.goBack();
      }
    },
    goBack() {
      let query = Object.assign({}, this.$route.query);
      delete query.project;
      this.$router.replace({
        query
      });
      // this.$router.go(-1);
      this.$store.dispatch("toggelQuestionDialog", false);
      this.$store.dispatch("toggelProjectDialog", false);
      this.$store.dispatch("toggelAssignmentDialog", false);
    },
    getMedia(mediaId) {
      return this.$apiBaseUrl + "/media/" + mediaId;
    },
    disConnect() {
      this.$store.dispatch(
        "authentication/removeConnection",
        this.project.user._id
      );
    },
    connect() {
      this.$store.dispatch(
        "authentication/addConnection",
        this.project.user._id
      );
    },
    onSubmit() {
      if (this.discus.body && this.discus.type) {
        let disc = JSON.parse(JSON.stringify(this.discus));
        if (!disc.media.mediaId) {
          delete disc.media;
        }
        this.$store.dispatch(`${this.moduleType}/addPostComment`, disc).then(
          resp => {
            this.project.discussions.push(resp.data);
            this.discus.body = "";
            this.discus.media.mediaId = "";
          },
          err => {}
        );
      }
    },
    viewPost() {
      this.$store.dispatch("post/viewPost", this.currentPostId).then(
        resp => {
          if (!this.project.views) {
            this.project.views = 1;
          } else {
            this.project.views += 1;
          }
        },
        err => {}
      );
    },
    reblogProject() {
      if (!this.reblogged) {
        this.$store.dispatch("post/reblogPost", this.project._id).then(
          resp => {
            this.project.reBlogs.indexOf(this.loggedInUser._id) === -1
              ? this.project.reBlogs.push(this.loggedInUser._id)
              : "";
          },
          err => {}
        );
      }
    },
    likeProject() {
      if (this.liked) {
        this.unLikeProject();
      } else {
        this.$store
          .dispatch(`${this.moduleType}/likePost`, this.project._id)
          .then(
            resp => {
              this.project.likes.indexOf(this.loggedInUser._id) === -1
                ? this.project.likes.push(this.loggedInUser._id)
                : "";
            },
            err => {}
          );
      }
    },
    unLikeProject() {
      this.$store
        .dispatch(`${this.moduleType}/removeLikePost`, this.project._id)
        .then(
          resp => {
            let likeIndex = this.project.likes.indexOf(this.loggedInUser._id);
            if (likeIndex > -1) {
              this.project.likes.splice(likeIndex, 1);
            }
          },
          err => {}
        );
    },
    addComment() {
      this.$nextTick(() => {
        var cancelScroll = VueScrollTo.scrollTo(
          "#postComment" + this.project._id,
          300,
          this.options
        );
        this.$refs.postComment.setFocus();
        this.$store.dispatch("setGoToPostComment", false);
      });
    },
    doNothing() {},
    downloadFile(file) {
      let link = document.createElement("a");
      link.href =
        process.env.VUE_APP_API_BASE_URL + "/media/" + file.originalName;
      link.setAttribute("download", file.originalName);
      link.click();
    },
    url(id) {
      return process.env.VUE_APP_API_BASE_URL + "/media/" + id;
    }
  },
  computed: {
    ...mapState({
      loggedInUser: state => state.authentication.user,
      currentPostId: state => state.currentPostId,
      goToPostComment: state => state.goToPostComment
    }),
    ...mapGetters({
      currentClass: "classes/currentClass"
    }),
    isInstructor() {
      return (
        this.currentClass &&
        this.currentClass.instructor &&
        this.loggedInUser._id === this.currentClass.instructor._id
      );
    },
    isConnected() {
      if (
        this.project.user &&
        this.loggedInUser.connections &&
        this.loggedInUser.connections.length > -1
      ) {
        return (
          this.loggedInUser.connections.indexOf(this.project.user._id) > -1
        );
      } else {
        return false;
      }
    },
    liked() {
      return this.project.likes.indexOf(this.loggedInUser._id) > -1;
    },
    reblogged() {
      return this.project.reBlogs.indexOf(this.loggedInUser._id) > -1;
    },
    questionText() {
      let textContent = this.project.content
        ? this.project.content.find(c => c.type === "text")
        : "";
      return textContent ? textContent.body.substring(0, 100) : "";
    },
    socialShareData() {
      return {
        url: window.location.origin + "?project=" + this.currentPostId,
        title: this.project.title,
        text: this.questionText
      };
    },
    moduleType() {
      if (this.isAssignment) {
        return "assignment";
      } else {
        return "post";
      }
    },
    isInReview() {
      return this.project.status && this.project.status === "in-review";
    },
    isAprroved() {
      return this.project.status && this.project.status === "approved";
    },
    isRejected() {
      return this.project.status && this.project.status === "rejected";
    },
    isCreater() {
      return (
        this.project &&
        this.project.user &&
        this.loggedInUser._id === this.project.user._id
      );
    }
  },
    beforeDestroy(){
    this.$eventHub.$off('post-deleted');
  }
};
</script>

<style lang="scss" scoped>
.margin-top-10 {
  margin-top: 10px;
}
.w-100 {
  width: 100%;
}
.heading-afile {
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: Roboto, sans-serif;
  color: #bcbcbc;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
}
</style>