<template>
     <div class="flexcolumn double">
                <!-- <div class="card black">
                  <div class="_40-side-padding">
                    <div class="_40-top-30-bottom">
                      <div class="flex-space-between"><img src="../../assets/white-logo.svg" height="40" alt="">
                        <div class="vert-justify-start-align-right">
                          <div class="_5px-bottom-margin">
                            <h1 class="heading-5 white-bold">EXPERT</h1>
                          </div>
                          <div class="_5px-bottom-margin">
                            <h1 class="heading-24 white right">Web Development</h1>
                          </div>
                          <h1 class="heading-18">(c. 2016)</h1>
                        </div>
                      </div>
                    </div>
                    <div class="_40px-bottom-margin">
                      <div class="underline black"></div>
                    </div>
                    <div class="_30px-bottom-margin"></div>
                    <div class="_40px-bottom-margin">
                      <div class="space-between">
                        <div class="horiz-left-align-justify-atart">
                          <div class="_30px-right-margin">
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 white-bold">108</h1>
                              </div>
                              <h1 class="heading-18">Classes completed</h1>
                            </div>
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 white-bold">108</h1>
                              </div>
                              <h1 class="heading-18">Class hours</h1>
                            </div>
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 white-bold">108</h1>
                              </div>
                              <h1 class="heading-18">Questions Answered</h1>
                            </div>
                          </div>
                          <div class="_30px-right-margin">
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 white-bold">108</h1>
                              </div>
                              <h1 class="heading-18">Classes taught</h1>
                            </div>
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 white-bold">108</h1>
                              </div>
                              <h1 class="heading-18">Projects</h1>
                            </div>
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 white-bold">108</h1>
                              </div>
                              <h1 class="heading-18">Likes received</h1>
                            </div>
                          </div>
                        </div>
                        <div><img src="../../assets/GRAPH-BLACK.svg" width="208" alt="" class="image-12"></div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <div class="card">
                  <div class="_40-side-padding">
                      <div class="empty-feed mb-15">
      <img src="../../assets/feedAsset-20.svg" class="emp-img" alt="">
        <h1 class="heading-55">There&#x27;s no degree here yet...</h1>
        <div class="div-block-113 alt cursor-pointer" @click="goToFeeds">
          <img src="../../assets/left-arrow.svg" height="20" alt="" class="image-29">
          <div class="text-block-14 alt">Enroll Class</div>
        </div>
      </div>
                    <!-- <div class="_40-top-30-bottom">
                      <div class="flex-space-between"><img src="../../assets/Logo.svg" height="40" alt="">
                        <div class="vert-justify-start-align-right">
                          <div class="_5px-bottom-margin">
                            <h1 class="heading-5 black-bold">EXPERT</h1>
                          </div>
                          <div class="_5px-bottom-margin">
                            <h1 class="heading-24">Web Development</h1>
                          </div>
                          <h1 class="heading-18">(c. 2016)</h1>
                        </div>
                      </div>
                    </div> -->
                    <div class="_40px-bottom-margin">
                      <div class="underline"></div>
                    </div>
                    <div class="_30px-bottom-margin"></div>
                    <div class="_40px-bottom-margin">
                      <div class="space-between">
                        <div class="horiz-left-align-justify-atart">
                          <div class="_30px-right-margin">
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 black-bold">{{proDegreeData.completedClassesCount}}</h1>
                              </div>
                              <h1 class="heading-18">Classes completed</h1>
                            </div>
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 black-bold">{{proDegreeData.classHours}}</h1>
                              </div>
                              <h1 class="heading-18">Class hours</h1>
                            </div>
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 black-bold">{{proDegreeData.answerCount}}</h1>
                              </div>
                              <h1 class="heading-18">Questions Answered</h1>
                            </div>
                          </div>
                          <div class="_30px-right-margin">
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 black-bold">{{proDegreeData.classesTaughtCount}}</h1>
                              </div>
                              <h1 class="heading-18">Classes taught</h1>
                            </div>
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 black-bold">{{proDegreeData.projectCounts}}</h1>
                              </div>
                              <h1 class="heading-18">Projects</h1>
                            </div>
                            <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 black-bold">{{proDegreeData.likesCount}}</h1>
                              </div>
                              <h1 class="heading-18">Likes received</h1>
                            </div>
                          </div>
                        </div>
                        <div>
                            <vc-donut
    background="white" foreground="grey"
    :size="180" unit="px" :thickness="35"
    :sections="sections" :total="totalCredits">
    <div class="_20px-bottom-margin">
                              <div class="_2-px-bottom-margin">
                                <h1 class="heading-5 black-bold">{{proDegreeData.credits}}</h1>
                              </div>
                              <h1 class="heading-18">Credits</h1>
                            </div>
  </vc-donut>
                          <!-- <img src="../../assets/graph.svg" width="208" alt=""> -->
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
  data() {
    return {
      credit: 1,
      // sections: [
      //   { label: 'Red section', value: 0, color: '#8446e8' },
      //   { label: 'Green section', value: 0, color: '#ebcb4d' },
      //   { label: 'Blue section', value: 0, color: '#61cb96' }
      // ],
      proDegreeData: {
        classesTaughtCount: 0,
        projectCounts: 0,
        likesCount: 0,
        completedClassesCount: 0,
        classHours: 0,
        answerCount: 0,
        credits: 0,
        projectCredits: 0,
        classCredits: 0,
        answersCredits: 0
      }
    };
  },
  created() {
    this.$store.dispatch("profile/getProdegreesData").then(
      res => {
        this.proDegreeData = res.data;
      },
      err => {
        console.error(err);
      }
    );
  },
  methods: {
goToFeeds() {
  this.$store.dispatch('classes/setFeedFilters', ['classes']);
  this.$router.push({name:'feed'})
}
  },
  computed: {
    totalCredits() {
      if (this.proDegreeData.credits) {
        return this.proDegreeData.credits;
      } else {
        return 1;
      }
    },
    sections() {
      return [
        {
          label: "Class Credits",
          value: this.proDegreeData.classCredits,
          color: "#8446e8",
          tooltip: true
        },
        {
          label: "Project Credits",
          value: this.proDegreeData.projectCredits,
          color: "#ebcb4d"
        },
        {
          label: "Answer Credits",
          value: this.proDegreeData.answersCredits,
          color: "#61cb96"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.mb-15 {
  margin-bottom: 15px;
}
</style>
