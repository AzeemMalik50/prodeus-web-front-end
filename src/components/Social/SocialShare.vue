<template>
            <social-sharing :url="data.url" :title="data.title"
            :description="data.texrt"
            :quote="data.title" hashtags="prodeus"
            :twitter-user="loggedInUser.fullName"
            :networks="overriddenNetworks"
             inline-template>
                <div class="social-share-wrap">
                  <network network="facebook" class="network">
                    <facebook />
                  </network>
                  <network network="twitter" class="network">
                    <twitter />
                  </network>
                  <network network="pinterest" class="network">
                    <pintrest />
                  </network>
                  <network network="dribbble" class="network">
                    <dribbble />
                  </network>
                </div>
              </social-sharing>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:['data', 'cStyle'],
    data(){
      return {
  overriddenNetworks: {
            "dribbble": {
              "sharer": "https://dribbble.com/",
              "type": "popup"
            },
          }
      }
    },
     computed: {
    ...mapState({
      loggedInUser: state => state.authentication.user,
      getStyles() {
        return this.cStyle
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.social-share-wrap {
  span {
    margin-right: 10px !important;
  }
}
#share-facebook {
    margin-right: 10px !important;
}
.modal {
  height: 40px;
}
</style>
