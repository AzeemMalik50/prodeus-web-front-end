<template>
<div class="edit-container">
   <div class="div-block-117 menu-icon" :style="icon">
     <!-- <img src="@/assets/Menu.svg" width="4" @click.stop="toggelMenu" alt=""> -->
     <menu-icon @click.native.stop="toggelMenu" />
      </div>
         <div class="edit-menu" :style="menu" v-if="isMenuOpen" v-on-clickaway="closeMenu" >
          <div class="div-block-112 bb-none" @click.stop="editMethod">
            <div class="horiz-left-align-justify-atart">
              </div>
              <img src="@/assets/pencil-edit-button.svg" class="m-r-10" width="10" alt="">
              <a href="#" @click.stop="editMethod" class="link-5">Edit</a></div>
          <div class="div-block-112 bb-none" @click.stop="deleteMethod">
            <div class="horiz-left-align-justify-atart">
              </div>
              <img src="@/assets/Trash.svg" class="m-r-10" width="10" alt="">
              <a href="#" @click.stop="deleteMethod" class="link-5">Delete</a></div>
       </div>
</div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  props: ["iconStyle", "menuStyle", "onEdit", "onDel"],
  mixins: [clickaway],
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggelMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.getElementsByTagName("BODY")[0].click();
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    editMethod() {
      this.isMenuOpen = false;
      if (this.onEdit) {
        this.onEdit();
      }
    },
    deleteMethod() {
      this.isMenuOpen = false;
      if (this.onDel) {
        this.onDel();
      }
    }
  },
  computed: {
    icon() {
      if (this.iconStyle) {
        return this.iconStyle;
      } else {
        return {
          right: "15px",
          top: "25px"
        };
      }
    },
    menu() {
      if (this.menuStyle) {
        return this.menuStyle;
      } else {
        return {
          top: "46px",
          right: "15px"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-menu {
  position: absolute;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: auto;
  float: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border-radius: 5px 5px;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
.bb-none {
  border-bottom: none !important;
  cursor: pointer;
}
.m-r-10 {
  margin-right: 10px;
}
.bb-none:hover {
  background-color: rgba(128, 128, 128, 0.2);
}
.edit-container {
  display: inherit;
  z-index: 999 !important;
}
.menu-icon {
  position: absolute;
  // right: 20px;
  // top: 25px;
}
</style>
