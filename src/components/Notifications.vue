<template>
 <div class="div-block-104">
        <div class="div-block-105">
          <h1 class="heading-41">Notifications</h1>
        </div>
        <img src="../assets/Path-13444.svg" height="26" alt="" class="image-27 notified">
        <div class="div-block-106">
          <div class="div-block-111">
            <h1 class="heading-6 grey">NEW</h1>
          </div>
          <notification-message v-for="notify in newNotifs" :key="notify._id" :notification="notify" />
          <!-- <div class="div-block-107" :class="{unread: !notify.read}" v-for="notify in newNotifs" :key="notify._id" @click="goToNotification(notify)">
            <div class="flex-space-between">
              <div class="div-block-109">
                <img :src="profilePic(notify.from)" class="profile-picture _38px" />
              </div>
              <div class="div-block-108">
                <div class="text-block-13"><strong>{{notify.from.fullName}}</strong>{{ " " + notify.actionMessage + " "}} <strong class="bold-text"> {{notify.referenceDoc.title | length(60)}}</strong></div>
                <div class="horiz-left-align-justify-atart">
                  <img src="../assets/student.svg" v-if="notify.docType === 'Classes'" height="12" alt="" class="image-25">
                  <h6 class="_10-side-margins">{{notify.createdAt | moment("from", "now")}}</h6>
                </div>
              </div>
              {{getImage(notify.referenceDoc.img)}}
              <div class="div-block-110">
                <img :src="notify.image || getImage(notify.referenceDoc.img, notify)" alt=""></div>
            </div>
          </div> -->
           <div class="div-block-111">
            <h1 class="heading-6 grey">EARLIER</h1>
          </div>
          <notification-message v-for="notify in earlierNotifs" :key="notify._id" :notification="notify" />

           <!-- <div class="div-block-107" :class="{unread: !notify.read}" v-for="notify in earlierNotifs" :key="notify._id" @click="goToNotification(notify)">
            <div class="flex-space-between">
              <div class="div-block-109">
                <img :src="profilePic(notify.from)" class="profile-picture _38px" />
              </div>
              <div class="div-block-108">
                <div class="text-block-13"><strong>{{notify.from.fullName}}</strong>{{ " " + notify.actionMessage + " "}} <strong class="bold-text"> {{notify.referenceDoc.title | length(60)}}</strong></div>
                <div class="horiz-left-align-justify-atart">
                  <img src="../assets/student.svg" v-if="notify.docType === 'Classes'" height="12" alt="" class="image-25">
                  <h6 class="_10-side-margins">{{notify.createdAt | moment("from", "now")}}</h6>
                </div>
              </div>
              <div class="div-block-110">
                <img  :src="getImage(notify.referenceDoc.img)" alt=""></div>
            </div>
          </div> -->
          <!-- <div class="div-block-107 unread">
            <div class="flex-space-between">
              <div class="div-block-109">
                <div class="profile-picture _38px"></div>
              </div>
              <div class="div-block-108">
                <div class="text-block-13"><strong>Paul Walker</strong> commented on your Question &quot;What artistic period did Monet paint his masterpiece...&quot;</div>
                <div class="horiz-left-align-justify-atart">
                  <img src="../assets/Group-4427.svg" height="12" alt="" class="image-25">
                  <h6 class="_10-side-margins">24h</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="div-block-107 unread">
            <div class="flex-space-between">
              <div class="div-block-109">
                <div class="profile-picture _38px"></div>
              </div>
              <div class="div-block-108">
                <div class="text-block-13"><strong>Paul Walker</strong> enrolled in your class <strong class="bold-text">A Brief History of Typography and ...</strong></div>
                <div class="horiz-left-align-justify-atart">
                  <img src="../assets/student.svg" height="12" alt="" class="image-25">
                  <h6 class="_10-side-margins">24h</h6>
                </div>
              </div>
              <div class="div-block-110">
                <img src="../assets/IMG_0479.png" srcset="images/IMG_0479-p-500.png 500w, images/IMG_0479-p-800.png 800w, images/IMG_0479.png 960w" sizes="56px" alt="" class="image-26"></div>
            </div>
          </div>
          <div class="div-block-111">
            <h1 class="heading-6 grey">EARLIER</h1>
          </div>
          <div class="div-block-107">
            <div class="flex-space-between">
              <div class="div-block-109">
                <div class="profile-picture _38px"></div>
              </div>
              <div class="div-block-108">
                <div><strong>Paul Walker</strong> liked your post <strong class="text-block-13">A Brief History of Typography and ...</strong></div>
                <div class="horiz-left-align-justify-atart">
                  <img src="../assets/like.svg" height="12" alt="" class="image-25">
                  <h6 class="_10-side-margins">24h</h6>
                </div>
              </div>
              <div class="div-block-110">
                <img src="../assets/fortune.jpg" alt=""></div>
            </div>
          </div>
          <div class="div-block-107">
            <div class="flex-space-between">
              <div class="div-block-109">
                <div class="profile-picture _38px"></div>
              </div>
              <div class="div-block-108">
                <div class="text-block-13"><strong>Paul Walker</strong> liked your post <strong class="bold-text">A Brief History of Typography and ...</strong></div>
                <div class="horiz-left-align-justify-atart">
                  <img src="../assets/like.svg" height="12" alt="" class="image-25">
                  <h6 class="_10-side-margins">24h</h6>
                </div>
              </div>
              <div class="div-block-110">
                <img src="../assets/fortune.jpg" alt=""></div>
            </div>
          </div>
          <div class="div-block-107">
            <div class="flex-space-between">
              <div class="div-block-109">
                <div class="profile-picture _38px"></div>
              </div>
              <div class="div-block-108">
                <div class="text-block-13"><strong>Paul Walker</strong> liked your post <strong class="bold-text">A Brief History of Typography and ...</strong></div>
                <div class="horiz-left-align-justify-atart">
                  <img src="../assets/like.svg" height="12" alt="" class="image-25">
                  <h6 class="_10-side-margins">24h</h6>
                </div>
              </div>
              <div class="div-block-110">
                <img src="../assets/fortune.jpg" alt=""></div>
            </div>
          </div>
          <div class="div-block-107">
            <div class="flex-space-between">
              <div class="div-block-109">
                <div class="profile-picture _38px"></div>
              </div>
              <div class="div-block-108">
                <div class="text-block-13"><strong>Paul Walker</strong> commented on your Question &quot;What artistic period did Monet paint his masterpiece...&quot;</div>
                <div class="horiz-left-align-justify-atart">
                  <img src="../assets/Group-4427.svg" height="12" alt="" class="image-25">
                  <h6 class="_10-side-margins">24h</h6>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
</template>
<script>
import { mapState } from "vuex";
import NotificationMessage from "./Notifications/NotificationMessage";
export default {
  name: "notifications",
  components: {
    NotificationMessage
  },
  created() {
    this.$store.dispatch("notification/getNotifications");
  },

  computed: {
    ...mapState({
      notifications: state => state.notification.notifications
    }),
    newNotifs() {
      return this.notifications ? this.notifications.slice(0, 5) : [];
    },
    earlierNotifs() {
      return this.notifications ? this.notifications.slice(5) : [];
    }
  }
};
</script>

