<template>
  <div class="div-block-107" :class="{unread: !notification.read}"  @click="goToNotification()" v-if="notification.from">
            <div class="flex-space-between cursor-pointer">
              <div class="div-block-109">
                <img :src="userImage || profilePic(notification.from)" class="profile-picture _38px" />
              </div>
              <div class="div-block-108">
                <div class="text-block-13"><strong>{{notification.from.fullName}}</strong>{{ " " + notification.actionMessage + " "}} <strong class="bold-text"> {{notification.referenceDoc.title | length(60)}}</strong></div>
                <div class="horiz-left-align-justify-atart">
                  <!-- <img src="../assets/Group-4427.svg"  height="12" alt="" class="image-25"> -->
                  <img src="../../assets/student.svg" v-if="notification.docType === 'Classes'" height="12" alt="" class="image-25">
                  <h6 class="_10-side-margins">{{notification.createdAt | moment("from", "now")}}</h6>
                </div>
              </div>
              <div class="div-block-110">
                <img :src="classImage" alt=""></div>
            </div>
          </div>
</template>
<script>
export default {
  name: "notification-message",
  props: ["notification"],
  data() {
    return {
      classImage: "",
      userImage: ""
    };
  },
  created() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (this.notification.from && this.notification.from.local.img) {
      this.userImage =
        this.$apiBaseUrl +
        "/media/" +
        this.notification.from.local.img +
        "?at=" +
        user.accessToken;
    }
    this.classImage = this.notification.referenceDoc.img
      ? this.$apiBaseUrl +
        "/media/" +
        this.notification.referenceDoc.img +
        "?at=" +
        user.accessToken
      : "";
  },
  methods: {
    imageUrl() {},
    goToNotification() {
      this.notification.read = true;
      this.$store.dispatch(
        "notification/readNotification",
        this.notification._id
      );
      if (this.notification.docType === "Classes") {
        this.$router.push({
          name: "classPage",
          params: { id: this.notification.referenceDoc._id }
        });
      }
      if (this.notification.docType === "Posts") {
        let param = {};
        this.$store.dispatch("setCurrentPostId", this.notification.referenceDoc._id);
        if (
          this.notification.referenceDoc &&
          this.notification.referenceDoc.postType
        ) {
          let type = this.notification.referenceDoc.postType.toLowerCase();
          param[type] = this.notification.referenceDoc._id;
          if (type === "project") {
            this.$store.dispatch("toggelProjectDialog", true);
          }
          if (type === "question") {
            this.$store.dispatch("toggelQuestionDialog", true);
          }
        }
        this.$router.push({
          name: "feed",
          params: param
        });
      }
    },
    getImage(media, obj) {
      this.$store.dispatch("classes/getMedia", media).then(
        response => {
          obj.img = response.data;
        },
        err => {
          console.error(err);
        }
      );
    },
    profilePic(user) {
      if (user && user.facebook && user.facebook.img) {
        return user.facebook.img;
      } else if (user && user.google && user.google.img) {
        return user.google.img;
      } else {
        return null;
      }
    }
  }
};
</script>
