<template>
  <div>
  <div class="modal-wrapper">
    <div class="_100-vh">
      <div data-duration-in="300" data-duration-out="100" class="tabs-2 w-tabs">
        <div class="class-progress-horiz w-tab-menu">
          <a data-w-tab="Tab 1" class="tab-link-tab-1 w-inline-block w-tab-link" @click="changeTab('class-info')"
          :class="{'w--current': selectedTab=='class-info'}">
            <div class="div-block-40">
              <div class="text-block-2 white">1</div>
            </div>
            <div class="text-block-2 white">Class info</div>
          </a>
          <a data-w-tab="Tab 2" class="tab-link-tab-2-2 w-inline-block w-tab-link" @click="changeTab('curriculum')"
          :class="{'w--current': selectedTab=='curriculum'}">
            <div class="div-block-40">
              <div class="text-block-2 white">2</div>
            </div>
            <div>Curriculum</div>
          </a>
          <a data-w-tab="Tab 3" class="tab-link-tab-3 w-inline-block w-tab-link" @click="changeTab('final-project')"
          :class="{'w--current': selectedTab=='final-project'}">
            <div class="div-block-40 inactive">
              <div class="text-block-2">3</div>
            </div>
            <div>Final</div>
          </a>
        </div>
        <div class="w-tab-content">
            <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">                    
          <div data-w-tab="Tab 1" class="w-tab-pane" v-if="selectedTab=='class-info'" :key="selectedTab"
          :class="{'w--tab-active': selectedTab=='class-info'}">
            <div class="add-class-block">
              <div class="div-block-56">
                <h1 class="heading-4 white">1</h1>
              </div>
              <div class="_40-side-padding">
                <div class="_30-px-top-bottom">
                  <h1 class="heading-4">Class info</h1>
                </div>
              </div>
              <div class="_40-side-padding">
                <div class="w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" class="form">
                    <div class="_30px-bottom-margin"><input type="text" class="form-text w-input" maxlength="256" name="Class-title-2" data-name="Class Title 2" placeholder="Title" id="Class-title-2" required=""></div>
                    <div class="_30px-bottom-margin">
                      <quill-editor v-model="content" :options="config" ref="myQuillEditor">
                      </quill-editor>
                    </div>
                    <div class="_30px-bottom-margin">
                      <select id="field-2" name="field-2" required="" data-name="Field 2" class="form-text w-select">
                        <option value="">Select a category</option>
                        <option value="First">First Choice</option>
                        <option value="Second">Second Choice</option>
                        <option value="Third">Third Choice</option>
                        </select>
                   
                        </div>
                    <div class="_30px-bottom-margin">
                      <input type="text" class="form-text w-input" maxlength="256" name="skills-2" data-name="Skills 2" placeholder="Skills" id="skills-2" required="">
                      </div><input type="submit" value="Submit" data-wait="Please wait..." class="submit-button w-button">
                    <div class="difficulty">
                      <div class="_20px-bottom-margin">
                        <h1 class="heading-18 center">Select Difficulty</h1>
                      </div>
                      <div class="difficult-buttons">
                        <div class="difficulty-button" v-for="dif in difficulties" :key="dif" @click="setDifficulty(dif)">
                          <div class="heading-5 button" :class="{'unselected': difficulty != dif, 'selected':difficulty != dif}">{{dif}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="_30px-bottom-margin"></div>
                  </form>
                  <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="align-right">
              <div class="button">
                <h1 class="form-button">Next</h1>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 2" class="w-tab-pane" v-if="selectedTab=='curriculum'" :key="selectedTab"
          :class="{'w--tab-active': selectedTab=='curriculum'}">
            <div class="add-class-block">
              <div class="div-block-56">
                <h1 class="heading-4 white">2</h1>
              </div>
              <div class="_40-side-padding">
                <div class="_30-px-top-bottom">
                  <h1 class="heading-4">Curriculum</h1>
                </div>
              </div>
              <div class="curriculum-block">
                <div class="div-block-46">
                  <div class="lesson-container">
                    <h1 class="heading-22 complete">Trailer</h1>
                    <CheckLine class="image-8 check" />
                    </div>
                  <div class="lesson-container">
                    <h1 class="heading-22 complete">Lesson 1</h1>
                    <CheckLine class="image-8 check" />                    
                    </div>
                  <div class="lesson-container">
                    <h1 class="heading-22">Lesson 2</h1>
                  </div>
                  <div class="lesson-container">
                    <h1 class="heading-22">Lesson 3</h1>
                  </div>
                  <div class="lesson-container">
                    <h1 class="heading-22">Lesson 4</h1>
                  </div>
                  <div class="lesson-container">
                    <h1 class="heading-22">Lesson 5</h1>
                  </div>
                  <div class="lesson-container">
                    <h1 class="heading-22 add-lesson">+ Add Lesson</h1>
                  </div>
                </div>
                <div class="_20px-pad-wrapper">
                  <div class="_100-percent-justify-start">
                    <div class="_30px-bottom-margin">
                      <div class="flex-space-between">
                        <h1 class="heading-4">Lesson 1</h1>
                        <div class="button top-padding">
                          <h1 class="form-button">Upload Video</h1>
                        </div>
                      </div>
                    </div>
                    <div class="w-form">
                      <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
                        <div class="_30px-bottom-margin"><input type="text" class="form-text w-input" maxlength="256" name="lesson-title-2" data-name="Lesson Title 2" placeholder="Title" id="lesson-title-2" required=""></div>
                        <div class="_30px-bottom-margin">
                             <quill-editor v-model="content" :options="config" ref="myQuillEditor">
                      </quill-editor>
                            </div><input type="submit" value="Submit" data-wait="Please wait..." class="submit-button-2 w-button"></form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                    <div class="button secondary" @click="toggleAssignment()">
                      <h1 class="form-button purple">{{hasAssignment ? 'Assignment' : 'Add Assignment'}}</h1>
                    </div>
            <transition v-if="hasAssignment" name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">                                        
                    <div class="assignment w-form">
                      <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="form-3 border-none">
                        <div class="div-block-53">
                          <div class="text-block-3">Required</div>
                          <div class="div-block-54 cursor-pointer" :class="{'active': isChecked}" @click="isChecked = !isChecked">
                            <WhiteCheck v-if="isChecked"  class="check"/>
                            </div>
                        </div>
                        <!-- <textarea id="lesson-description-2" name="lesson-description-2" placeholder="Lesson description"
                        maxlength="5000" data-name="Lesson Description 2" required=""
                        class="form-text description assignment w-input"></textarea> -->
                         <quill-editor v-model="content" :options="config" ref="myQuillEditor">
                      </quill-editor>
                        <!-- <div class="_50px-block border">
                          <div class="text-block-4">Attach Files</div>
                        </div> -->
                        <FileUpload />
                        
                        <input type="submit" value="Submit" data-wait="Please wait..." class="submit-button-2 w-button"></form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
            </transition>
                  </div>
                </div>
              </div>
              <div class="_40-side-padding">
                <div class="_20-px-top-bottom-padding">
                  <div class="align-right">
                    <div class="button outline">
                      <h1 class="form-button outline">Next Lesson</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="align-right">
              <div class="button inactive">
                <h1 class="form-button">Next</h1>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 3" class="w-tab-pane" v-if="selectedTab=='final-project'" :key="selectedTab"
          :class="{'w--tab-active': selectedTab=='final-project'}">
            <div class="add-class-block">
              <div class="div-block-56">
                <h1 class="heading-4 white">3</h1>
              </div>
              <div class="_40-side-padding">
                <div class="_30-px-top-bottom">
                  <h1 class="heading-4">Final Project</h1>
                </div>
              </div>
                <div class="_20px-pad-wrapper">
              
              <div class="_40-side-padding">
                <div class="assignment w-form">
                      <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="form-3 border-none">
                    <div class="_30px-bottom-margin"><input type="text" class="form-text w-input" maxlength="256" name="Final-Title-2" data-name="Final Title 2" placeholder="Title" id="Final-Title-2" required=""></div>
                      <quill-editor v-model="content" :options="config" ref="myQuillEditor">
                      </quill-editor>
                        <FileUpload />
                        <input type="submit" value="Submit" data-wait="Please wait..." class="submit-button-2 w-button"></form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
              </div>
                </div>
            </div>
            <div class="_40px-bottom-margin">
              <div class="button" @click="closeAddClass()">
                <h1 class="form-button">Preview &amp; Publish</h1>
              </div>
            </div>
          </div>
            </transition>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import CheckLine from "../assets/check-line.svg";
import WhiteCheck from "../assets/White-Check.svg";
import FileUpload from "../components/CreateClasss/FileUpload";

export default {
  components: {
    CheckLine,
    WhiteCheck,
    FileUpload
  },
  data() {
    return {
      selectedTab: "class-info",
      content: "<h2>I am Example</h2>",
      hasAssignment: false,
      difficulties: ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
      difficulty: "BEGINNER",
      isChecked: true,
      files:[],
      config: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "link"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"]
          ]
        }
      }
    };
  },
  methods: {
    changeTab(tab) {
      this.selectedTab = tab;
    },
    toggleAssignment() {
      this.hasAssignment = !this.hasAssignment;
    },
    setDifficulty(dif) {
      this.difficulty = dif;
    },
    closeAddClass(){
  this.$store.dispatch('changeCreateClass', false);      
    }
  },

};
</script>

<style lang="scss" scoped>

.w-select {
  background-image: none !important;
}
.difficulty-button,
.button {
  cursor: pointer;
}
.check {
  height: 8px;
}
.border-none {
  border: none;
}
.border {
  border: 1px solid #d9d9d9 !important;
}
.div-block-54 {
  &.active {
    background-color: #8446e8;
  }
}
</style>
