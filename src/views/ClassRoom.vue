<template>
<div>
<div class="page-section" v-if="currentClass && currentClass.trailer">
    <div class="flex-row dashboard _1">
      <div class="flexcolumn triple">
        <div class="vert-justify-start-align-left classroom">
          <div class="_10px-botttom-margin">
            <h1 class="heading-42 _20px-bottom-margin">{{currentClass.title}}</h1>
          </div>
          <div class="_20px-bottom-margin">
            <h2 class="heading-6">{{currentClass.category}}</h2>
          </div>
        </div>
      </div>
      <div class="flexcolumn classroom _1">
        <div class="align-right-justify-start classroom">
          <div class="align-right-justify-start classroom">
            <div class="div-block-128">
              <div class="_10px-botttom-margin">
                <h1 class="heading-2">{{currentClass.instructor.fullName}}</h1>
              </div>
              <h2 class="heading-6 center">Instructor</h2>
            </div>
            <div class="div-block-127">
              <!-- <div class="profile-picture _50"></div> -->
              <div class="profile-picture _50">
          <img :src="profilePic" class="link-block-3 w-inline-block profile-pic" />
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-row dashboard _1">
      <div class="flexcolumn triple">
        <div class="trailer">
          <div class="play">
            <img src="../assets/play.svg" width="16" alt="">
            <ProdeusPlayer v-if="videoUrl"  :videoUrl="videoUrl(currentClass.lessons[currentLessonIndex].media)" />
            </div>
        </div>
        <div class="_20px-bottom-margin">
          <div class="flex-space-between">
            <h1 class="heading-2 grey">Discussion</h1>
            <div class="div-block-121">
              <div class="div-block-113 project side"><img src="../assets/add-white.svg" height="20" alt="" class="image-29">
                <div class="text-block-14">Make a comment</div>
              </div>
              <div class="div-block-113 question side"><img src="../assets/add-white.svg" height="20" width="20" alt="" class="image-29">
                <div class="text-block-14">Ask a question</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="_10px-pad-wrapper">
            <div class="flex-space-between">
              <div class="_20-right">
                <div class="horiz-left-align-justify-atart">
                  <div class="profile-picture _30"></div>
                </div>
              </div>
              <div class="align-right-justify-start">
                <div class="form-block-3 w-form">
                  <form id="email-form" name="email-form" data-name="Email Form"><input type="text" class="comment-block w-input" maxlength="256" name="Comment-2" data-name="Comment 2" placeholder="Write comment here" id="Comment-2"></form>
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
        </div>
        <div data-duration-in="500" data-duration-out="250" data-easing="ease-in-out" class="tabs-3 w-tabs">
          <div class="tabs-menu classroom w-tab-menu">
            <a data-w-tab="Tab 1" class="tab-link-tab-2 all w-inline-block w-tab-link w--current">
              <div>All</div>
              <div class="notification all">4</div>
            </a>
            <a data-w-tab="Tab 2" class="tab-link-tab-2 project w-inline-block w-tab-link">
              <div>Comments</div>
              <div class="notification project">4</div>
            </a>
            <a data-w-tab="Tab 3" class="tab-link-tab-2 question w-inline-block w-tab-link">
              <div>Questions</div>
              <div class="notification question">4</div>
            </a>
            <a data-w-tab="Tab 4" class="tab-link-tab-2 class w-inline-block w-tab-link">
              <div>Announcements</div>
              <div class="notification class">4</div>
            </a>
          </div>
          <div class="tabs-content-2 w-tab-content">
            <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
              <div class="_100-percent-justify-start">
                <div class="_10px-botttom-margin">
                  <div class="flex-space-between">
                    <div class="horiz-left-align-justify-atart">
                      <div class="profile-picture _30"></div>
                      <div class="_10-side-margins">
                        <h1 class="heading-35">James Daniel Harr</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="_10px-botttom-margin">
                  <p class="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
                <div class="_10px-botttom-margin">
                  <div class="left-align">
                    <div class="_16-px-right-margin">
                      <h6 class="heading-18">Like</h6>
                    </div>
                    <div class="_16-px-right-margin">
                      <h6 class="heading-18">Reply</h6>
                    </div>
                    <div class="_16-px-right-margin">
                      <h6 class="heading-18">• 24h</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="_20px-bottom-margin">
                <div class="flex-space-between">
                  <div class="_20-right">
                    <div class="horiz-left-align-justify-atart">
                      <div class="profile-picture _30"></div>
                    </div>
                  </div>
                  <div class="align-right-justify-start">
                    <div class="form-block-3 w-form">
                      <form id="email-form" name="email-form" data-name="Email Form"><input type="text" class="comment-block w-input" maxlength="256" name="Comment" data-name="Comment" placeholder="Write comment here" id="Comment"></form>
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
              <div class="message-wrap">
                <div class="profile-picture _30"></div>
                <div class="message-content-wrap">
                  <div class="_10px-botttom-margin">
                    <div class="left-align">
                      <h6 class="heading-17">Will Cairns</h6>
                    </div>
                  </div>
                  <div class="_10px-botttom-margin">
                    <p class="paragraph-4 reply">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  </div>
                  <div class="_10px-botttom-margin">
                    <div class="left-align">
                      <div class="_16-px-right-margin">
                        <h6 class="heading-18">Like</h6>
                      </div>
                      <div class="_16-px-right-margin">
                        <h6 class="heading-18">Reply</h6>
                      </div>
                      <div class="_16-px-right-margin">
                        <h6 class="heading-18">• 24h</h6>
                      </div>
                    </div>
                  </div>
                  <div class="_10px-botttom-margin">
                    <div class="reply-wrap">
                      <div class="profile-picture _28"></div>
                      <div class="message-content-wrap">
                        <div class="_10px-botttom-margin">
                          <div class="left-align">
                            <h6 class="heading-17">Will Cairns</h6>
                          </div>
                        </div>
                        <div class="_10px-botttom-margin">
                          <p class="paragraph-4 reply">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        </div>
                        <div class="_10px-botttom-margin">
                          <div class="left-align">
                            <div class="_16-px-right-margin">
                              <h6 class="heading-18">Like</h6>
                            </div>
                            <div class="_16-px-right-margin">
                              <h6 class="heading-18">Reply</h6>
                            </div>
                            <div class="_16-px-right-margin">
                              <h6 class="heading-18">• 24h</h6>
                            </div>
                          </div>
                        </div>
                        <div class="_10px-botttom-margin">
                          <div class="reply-wrap">
                            <div class="profile-picture _28"></div>
                            <div class="message-content-wrap">
                              <div class="_10px-botttom-margin">
                                <div class="left-align">
                                  <h6 class="heading-17">Will Cairns</h6>
                                </div>
                              </div>
                              <div class="_10px-botttom-margin">
                                <p class="paragraph-4 reply">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                              </div>
                              <div class="_10px-botttom-margin">
                                <div class="left-align">
                                  <div class="_16-px-right-margin">
                                    <h6 class="heading-18">Like</h6>
                                  </div>
                                  <div class="_16-px-right-margin">
                                    <h6 class="heading-18">Reply</h6>
                                  </div>
                                  <div class="_16-px-right-margin">
                                    <h6 class="heading-18">• 24h</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="_10px-botttom-margin"></div>
                </div>
              </div>
              <div class="message-wrap">
                <div class="profile-picture _30"></div>
                <div class="message-content-wrap">
                  <div class="_10px-botttom-margin">
                    <div class="left-align">
                      <h6 class="heading-17">Will Cairns</h6>
                    </div>
                  </div>
                  <div class="_10px-botttom-margin">
                    <p class="paragraph-4 reply">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  </div>
                  <div class="_10px-botttom-margin">
                    <div class="left-align">
                      <div class="_16-px-right-margin">
                        <h6 class="heading-18">Like</h6>
                      </div>
                      <div class="_16-px-right-margin">
                        <h6 class="heading-18">Reply</h6>
                      </div>
                      <div class="_16-px-right-margin">
                        <h6 class="heading-18">• 24h</h6>
                      </div>
                    </div>
                  </div>
                  <div class="_10px-botttom-margin">
                    <div class="reply-wrap">
                      <div class="profile-picture _28"></div>
                      <div class="message-content-wrap">
                        <div class="_10px-botttom-margin">
                          <div class="left-align">
                            <h6 class="heading-17">Will Cairns</h6>
                          </div>
                        </div>
                        <div class="_10px-botttom-margin">
                          <p class="paragraph-4 reply">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        </div>
                        <div class="_10px-botttom-margin">
                          <div class="left-align">
                            <div class="_16-px-right-margin">
                              <h6 class="heading-18">Like</h6>
                            </div>
                            <div class="_16-px-right-margin">
                              <h6 class="heading-18">Reply</h6>
                            </div>
                            <div class="_16-px-right-margin">
                              <h6 class="heading-18">• 24h</h6>
                            </div>
                          </div>
                        </div>
                        <div class="_10px-botttom-margin"></div>
                      </div>
                    </div>
                  </div>
                  <div class="_10px-botttom-margin"></div>
                </div>
              </div>
              <div class="_100-percent-justify-start">
                <div class="_10px-botttom-margin">
                  <div class="flex-space-between">
                    <div class="horiz-left-align-justify-atart">
                      <div class="profile-picture _30"></div>
                      <div class="_10-side-margins">
                        <h1 class="heading-35">James Daniel Harr</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="_10px-botttom-margin">
                  <p class="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
                <div class="_10px-botttom-margin">
                  <div class="left-align">
                    <div class="_16-px-right-margin">
                      <h6 class="heading-18">Like</h6>
                    </div>
                    <div class="_16-px-right-margin">
                      <h6 class="heading-18">Reply</h6>
                    </div>
                    <div class="_16-px-right-margin">
                      <h6 class="heading-18">• 24h</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 2" class="w-tab-pane"></div>
            <div data-w-tab="Tab 3" class="w-tab-pane"></div>
            <div data-w-tab="Tab 4" class="w-tab-pane"></div>
          </div>
        </div>
      </div>
      <div class="flexcolumn classroom">
        <div class="card">
          <div class="div-block-125">
            <div class="flex-space-between">
              <h2 class="heading-6 white">Lessons</h2>
              <div class="text-block white">{{currentClass.totalDuration | duration }}</div>
            </div>
          </div>
          <div class="div-block-124">
            <div class="lessonblock" v-for="(lesson, index) in currentClass.lessons" :key="lesson._id" :class="{active: index === currentLessonIndex, white: index !== currentLessonIndex}" @click="currentLessonIndex = index">
              <div class="div-block-9">
                <div class="div-block-7 classroom">
                  <div class="_5px-bottom-margin">
                    <h2 class="heading-6" :class="{white: index === currentLessonIndex}">Lesson {{lesson.lessonNumber}}</h2>
                  </div>
                  <h1 class="heading-4" :class="{white: index === currentLessonIndex}"> {{lesson.title.length <= 33 ?lesson.title : lesson.title.slice(30)+'...'}}</h1>
                </div>
              </div>
              <div class="div-block-8">
                <div class="text-block" :class="{white: index === currentLessonIndex}">2:15</div>
                <img v-if="index === currentLessonIndex" src="../assets/assignment_required_active.svg" height="16" alt="" class="image-2">
                <img v-else src="../assets/Assignment.svg" height="16" alt="" class="image-2">
                </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="_30px-pad-wrap _10px-botttom-margin">
            <div class="_20px-bottom-margin">
              <div class="flex-space-between">
                <h2 class="heading-6 grey">Lesson {{currentLesson.lessonNumber}}</h2>
                <div v-if="currentLesson.teacherAssignment" class="text-block-6">Assignment {{currentLesson.teacherAssignment.isrequired ? 'Required' :'Optional'}}</div>
              </div>
            </div>
            <div class="_20px-bottom-margin">
              <h1 class="heading-40 left-align left">{{currentLesson.title}}</h1>
            </div>
            <div class="div-block-80">
              <div class="_10px-botttom-margin">
                <h1 class="heading-31">Lesson Description</h1>
              </div>
              <div class="_20px-bottom-margin">
                <p class="paragraph-6" v-html="currentLesson.description">
                  </p>
              </div>
              <div v-if="currentLesson.teacherAssignment">
              <div class="_10px-botttom-margin">
                <h1 class="heading-31">Assignement Guidelines</h1>
              </div>
              <div class="_20px-bottom-margin">
                <p class="paragraph-6" v-html="currentLesson.teacherAssignment.guidelines">
                  </p>
              </div>
              <div class="_10px-botttom-margin">
                <h1 class="heading-31">Attached Files</h1>
              </div>
              <div class="div-block-82" v-for="attach in currentLesson.teacherAssignment.media" :key="attach._id">
                <img src="../assets/file.svg" height="15" alt="" class="image-11">
                <div class="div-block-81">
                  <a class="link-2 cursor-pointer" :href="url(attach.originalName)" :download="attach.originalName">{{attach.originalName}}</a>
                  <div class="text-block-6">346KB</div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="div-block-126"><a href="#" class="link">Submit Assignment</a></div>
        </div>
        <div class="card"><img src="../assets/fortune.jpg" alt="" class="image-31">
          <div class="_20px-pad-wrapper">
            <div class="profile-picture post"></div>
            <div class="_20px-margin">
              <h2 class="heading-6 center project">Art &amp; Design History</h2>
            </div>
            <div class="_30px-bottom-margin">
              <h1 class="heading-4 center">A Brief History of Typography &amp; Handlettering</h1>
            </div>
            <div class="flex-space-around"><img src="../assets/heart.svg" height="16" alt=""><img src="../assets/reblog.svg" height="20" alt=""><img src="../assets/comment.svg" height="16" alt=""><img src="../assets/share.svg" height="16" alt=""></div>
          </div>
        </div>
        <div class="card"><img src="../assets/fortune.jpg" alt="">
          <div class="_20px-pad-wrapper">
            <div class="profile-picture post"></div>
            <div class="_20px-margin">
              <h2 class="heading-6 center project">Art &amp; Design History</h2>
            </div>
            <div class="_30px-bottom-margin">
              <h1 class="heading-4 center">A Brief History of Typography &amp; Handlettering</h1>
            </div>
            <div class="flex-space-around"><img src="../assets/heart.svg" height="16" alt=""><img src="../assets/reblog.svg" height="20" alt=""><img src="../assets/comment.svg" height="16" alt=""><img src="../assets/share.svg" height="16" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <Loading :color="'#8446e8'" :active.sync="!currentClass.trailer" :is-full-page="true"></Loading>
</div>
</template>
<script>
import { mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import ProdeusPlayer from "@/components/Video/ProdeusPlayer.vue";
export default {
  props: ["id"],
  components: {
    Loading,
    ProdeusPlayer
  },
  data() {
    return {
      currentLessonIndex: 0
    };
  },
  created() {
    this.$store.dispatch("classes/getClass", this.id);
  },

  computed: {
    currentLesson() {
      return this.currentClass.lessons[this.currentLessonIndex];
    },
    profilePic() {
      if (this.currentClass.instructor.img) {
        return (
          process.env.VUE_APP_API_BASE_URL +
          "/media/" +
          this.currentClass.instructor.img.id
        );
      } else if (
        this.currentClass.instructor.facebook &&
        this.currentClass.instructor.facebook.img
      ) {
        return this.currentClass.instructor.facebook.img;
      } else if (
        this.currentClass.instructor.google &&
        this.currentClass.instructor.google.img
      ) {
        return this.currentClass.instructor.google.img;
      } else {
        return null;
      }
    },
    ...mapGetters({
      currentClass: "classes/currentClass"
    })
  },
  methods: {
    videoUrl(id) {
      return process.env.VUE_APP_API_BASE_URL + "/media/" + id;
    },
    downloadFile(file) {
      let link = document.createElement("a");
      link.href =
        process.env.VUE_APP_API_BASE_URL + "/media/" + file.originalName;
      link.setAttribute("download", file.originalName);
      // link.download = file.originalName;
      link.click();
    },
    url(id) {
      return process.env.VUE_APP_API_BASE_URL + "/media/" + id;
    }
  }
};
</script>
