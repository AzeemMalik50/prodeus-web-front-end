<template>
     <div class="modal-wrapper">
    <div class="_100-vh center">
      <div class="addpost-modal">
        <div class="card add">
          <div class="signifier" :class="getClass"></div>
          <div class="_30px-bottom-margin">
            <div class="form-block-4 w-form">
              <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                  <input type="text" class="text-field-2 w-input" maxlength="256" name="title" data-name="title" placeholder="Write a title…" id="title">
                   
                  </form>
                  <quill-editor v-model="content" :options="config" ref="myQuillEditor">
                      </quill-editor>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div class="_10px-botttom-margin">
            <h1 class="heading-37">ADD CONTENT</h1>
          </div>
          <div class="_40px-bottom-margin">
             <Group1 class="group-icon image-16" />
             <Group2 class="group-icon image-17" />
             <Group3 class="group-icon image-18" />
             <Group4 class="group-icon image-19" />
          </div>
          <div class="div-block-92"><a class="link outline" :class="getClass">Choose Category</a><a class="link grey">Submit</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Group1 from '../assets/Group-5511.svg';
import Group2 from '../assets/Group-5508.svg';
import Group3 from '../assets/Group-5514.svg';
import Group4 from '../assets/Group-5517.svg';

export default {
    components: {
        Group1,
        Group2,
        Group3,
        Group4        
    },
    data() {
        return {
            content:"",
             config: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "link"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"]
          ]
        }
      }
        }
    },
    created(){
      console.log(this.$router.history.current.name)
    },
    computed: {
      getClass(){
        const cRoute = this.$router.history.current.name;
        if(cRoute === 'project') {
          return {'project': true}
        }else {
          return {'question': true}
        }
      }
    }
}
</script>
<style lang="scss" scoped>
.group-icon  {
    height: 40px;;
}
.quill-editor {
    margin-top: 20px;
}
</style>
