<template>
    <div class="_50px-block border files">
        <input type="file" multiple id="attachFiles" @change="filesChange($event.target.name, $event.target.files);" class="input-file" hidden>
        <div class="text-block-4 assignment" @click="chooseFiles()">
            Attach Files</div>
        <div class="attached-item" v-for="(file,index) in files" :key="file.name">
            <Attachment class="attachment" />
            <span>{{file.name.length < 35 ? file.name : file.name.slice(0, 35)+'...'}}</span>
            <span @click="removeAttachItem(index)" class="trash">
             <Trash class="trash"  />
            </span>
        </div>
    </div>
</template>

<script>
import Attachment from "@/assets/attachment.svg";
import Trash from "@/assets/Trash.svg";
export default {
  components: {
    Attachment,
    Trash
  },
  data() {
    return {
      files: []
    };
  },
  methods: {
    chooseFiles: function() {
      document.getElementById("attachFiles").click();
    },
    filesChange(fieldName, fileList) {
      if (!fileList.length) return;
      this.files = fileList;
    },
    removeAttachItem(index) {
      this.files = Array.from(this.files, x => x);
      this.files.splice(Number(index), 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.trash {
  height: 12px;
  position: absolute;
  right: 25px;

}
.attachment {
  height: 12px;
}
.files {
  display: inherit !important;
  height: auto !important;
  padding: 12px;
}
.text-block-4 {
  &.assignment {
    display: inline;
    cursor: pointer;
  }
}
.attached-item {
  padding: 10px !important;
  height: 40px !important;
  margin-top: 12px !important;
  margin-bottom: 0px !important;
  -webkit-box-flex: 0 !important;
  -ms-flex: 0 auto !important;
  flex: 0 auto !important;
  border-style: none !important;
  border-bottom-width: 1px !important;
  border-bottom-color: #8446e8 !important;
  border-radius: 5px !important;
  background-color: #f4f4f5 !important;
  color: #bcbcbc !important;
  span {
    text-decoration: underline;
    margin-left: 5px;
  }
}
</style>
