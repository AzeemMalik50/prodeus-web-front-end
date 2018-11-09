<template>
    <div class="flex-space-between">
                    <div class="_20-right">
                      <div class="horiz-left-align-justify-atart">
                        <div class="profile-picture _30"></div>
                      </div>
                    </div>
                    <div class="align-right-justify-start">
                      <div class="form-block-3 w-form">
                        <form id="email-form" name="email-form" data-name="Email Form">
                            <Attachment class="attach"/>
                          <input type="text" class="comment-block w-input" maxlength="256" name="Comment-3"
                          data-name="Comment 3" placeholder="Write comment here" id="Comment-3"></form>
                        <div class="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div class="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                    </div>
                  </div>
</template>
<script>
import Attachment from "@/assets/attachment.svg";

export default {
    components: {
        Attachment
    }
}
</script>
<style lang="scss" scoped>


.attach {
    height: 14px;
        top: 36px;
    position: relative;
    left: 95%;
}
</style>
