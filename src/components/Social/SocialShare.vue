<template>
            <social-sharing :url="data.url" :title="data.title"
            :description="data.texrt"
            :quote="data.title" hashtags="prodeus"
            :twitter-user="loggedInUser.fullName"
            :networks="overriddenNetworks"
             inline-template>
                <div class="social-share-wrap">
                  <network network="facebook">
                    <facebook />
                  </network>
                  <network network="twitter">
                    <twitter/>
                  </network>
                  <network network="pinterest">
                    <pintrest />
                  </network>
                  <network network="dribbble">
                    <dribbble/>
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

