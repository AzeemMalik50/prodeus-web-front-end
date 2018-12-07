<template>
    <div class="_50px-block border files">
        <input type="file" multiple id="assignmentFiles"
        @change="filesChange($event.target.name, $event.target.files);" hidden>
        <div class="text-block-4 assignment" @click="chooseFiles()">
            Attach Files</div>
        <div class="attached-item" v-for="(file,index) in attachedFiles" :key="file.name">
            <img src="../../assets/attachment.svg" class="attachment" />
            <span>{{file.name.length < 35 ? file.name : file.name.slice(0, 35)+'...'}}</span>
             <img @click="removeAttachItem(index)" src="../../assets/Trash.svg" class="trash"  />
        </div>
    </div>
</template>

<script>
export default {
  props: ["attachObject"],
  data() {
    return {
      attachedFiles: []
    };
  },
  methods: {
    chooseFiles: function() {
      document.getElementById("assignmentFiles").click();
    },
    toArray(fileList) {
      return Array.prototype.slice.call(fileList);
    },
    filesChange(fieldName, fileList) {
      if (!fileList.length) return;
      fileList = this.toArray(this.attachedFiles).concat(
        this.toArray(fileList)
      );
      this.attachObject.isUploading = true;
      this.attachedFiles = fileList;
      this.attachObject.files = this.attachedFiles;
      this.attachObject.isUploaded = false;
      let assignment = new FormData();
      for (let i = 0; i < this.attachObject.files.length; i++) {
        assignment.append("prodeusFiles", this.attachObject.files[i]);
      }
      this.$store.dispatch("classes/uploadFiles", assignment).then(
        assigns => {
          if (assigns) {
            this.attachObject.media = assigns.data;
          }
          this.attachObject.isUploading = false;
        },
        err => {
          console.error(err);
        }
      );
    },
    removeAttachItem(index) {
      this.attachObject.isModified = true;
      this.attachedFiles = Array.from(this.attachedFiles, x => x);
      // for (let i = 0; i < this.files.length; i++) {
      this.attachedFiles.splice(index, 1);
      this.attachObject.files = this.attachedFiles;

      // }
    }
  }
};
</script>
<style lang="scss" scoped>
.trash {
  // height: 12px;
  // position: absolute;
  // right: 13px;
  height: 12px;
  position: absolute;
  right: 23px;
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
