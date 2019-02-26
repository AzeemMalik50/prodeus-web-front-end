<template>
<div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
    <div class="tab-navbar alt w-tab-menu">
      <a data-w-tab="Tab 4" class="tab-page catalog w-inline-block w-tab-link" @click="selectTab('art')" :class="{'w--current': currentTab == 'art'}">
        <div class="div-block-150 active"><img src="../assets/Group-5838.svg" height="18" alt=""></div>
        <div>Art &amp; Design</div>
      </a>
      <a data-w-tab="Tab 5" class="tab-page catalog w-inline-block w-tab-link" @click="selectTab('technology')"  :class="{'w--current': currentTab == 'technology'}">
        <div class="div-block-150 active _1"><img src="../assets/code.svg" height="16" alt=""></div>
        <div>Technology</div>
      </a>
      <a data-w-tab="Tab 6" class="tab-page catalog w-inline-block w-tab-link" @click="selectTab('bussiness')"  :class="{'w--current': currentTab == 'bussiness'}">
        <div class="div-block-150 active _2"><img src="../assets/line-chart-2.svg" height="10" alt=""></div>
        <div>Business</div>
      </a>
      <a data-w-tab="Tab 7" class="tab-page catalog w-inline-block w-tab-link" @click="selectTab('academic')"  :class="{'w--current': currentTab == 'academic'}">
        <div class="div-block-150 active _3"><img src="../assets/glasses.svg" height="16" alt=""></div>
        <div>Academics</div>
      </a>
    </div>
    <div class="tabs-content w-tab-content">
      <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 250 }">
      <div data-w-tab="Tab 4" class="w-tab-pane w--tab-active" v-if="currentTab == 'art'">
        <div class="justify-start-stretch">
          <div class="page-section tab alt">
            <div class="div-block-186" @click="openFeeds('3D Design')">
              <div class="div-block-187 _1"></div>
              <div class="div-block-188">
                <h1 class="heading-56">3D Design</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Animation')">
              <div class="div-block-187 _2"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Animation</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Architecture')">
              <div class="div-block-187 _3"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Architecture</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Fashion Design')">
              <div class="div-block-187 _4"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Fashion Design</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Fine Art')">
              <div class="div-block-187 _5"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Fine Art</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Game Design')">
              <div class="div-block-187 _6"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Game Design</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Graphic Design')">
              <div class="div-block-187 _7"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Graphic Design</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Identity Design')">
              <div class="div-block-187 _8"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Identity Design</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Illustration')">
              <div class="div-block-187 _9"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Illustration</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Music')">
              <div class="div-block-187 _10"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Music</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Music Production')">
              <div class="div-block-187 _11"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Music Production</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Photography')">
              <div class="div-block-187 _13"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Photography</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Product Design')">
              <div class="div-block-187 _14"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Product Design</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Typography')">
              <div class="div-block-187 _15"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Typography</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('UI/UX Design')">
              <div class="div-block-187 _16"></div>
              <div class="div-block-188">
                <h1 class="heading-56">UI/UX Design</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Videography')">
              <div class="div-block-187 _17"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Videography</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Web Design')">
              <div class="div-block-187 _12"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Web Design</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Writing')">
              <div class="div-block-187 _18"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Writing</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-w-tab="Tab 5" class="w-tab-pane w--tab-active" v-if="currentTab == 'technology'">
        <div class="justify-start-stretch">
          <div class="page-section tab alt">
            <div class="div-block-186" @click="openFeeds('Blockchain')">
              <div class="div-block-187 _19"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Blockchain</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Cybersecurity')">
              <div class="div-block-187 _20"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Cybersecurity</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Data Science')">
              <div class="div-block-187 _21"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Data Science</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Databases')">
              <div class="div-block-187 _22"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Databases</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('E-Commerce<')">
              <div class="div-block-187 _23"></div>
              <div class="div-block-188">
                <h1 class="heading-56">E-Commerce</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Game Development')">
              <div class="div-block-187 _24"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Game Development</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Mobile App Development')">
              <div class="div-block-187 _25"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Mobile App Development</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Web Development')">
              <div class="div-block-187 _26"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Web Development</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-w-tab="Tab 6" class="w-tab-pane w--tab-active" v-if="currentTab == 'bussiness'">
        <div class="justify-start-stretch">
          <div class="page-section tab alt">
            <div class="div-block-186" @click="openFeeds('Advertising')">
              <div class="div-block-187 _28"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Advertising</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Accounting')">
              <div class="div-block-187 _27"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Accounting</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Branding')">
              <div class="div-block-187 _29"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Branding</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Business Law')">
              <div class="div-block-187 _30"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Business Law</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Cryptocurrency')">
              <div class="div-block-187 _31"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Cryptocurrency</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Data & Analytics')">
              <div class="div-block-187 _32"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Data &amp; Analytics</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Entrepreneurship')">
              <div class="div-block-187 _33"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Entrepreneurship</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Finance')">
              <div class="div-block-187 _34"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Finance</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Growth Hacking')">
              <div class="div-block-187 _35"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Growth Hacking</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Human Resources')">
              <div class="div-block-187 _36"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Human Resources</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Management')">
              <div class="div-block-187 _37"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Management</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Marketing')">
              <div class="div-block-187 _38"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Marketing</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Productivity ')">
              <div class="div-block-187 _39"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Productivity </h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Public Relations')">
              <div class="div-block-187 _40"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Public Relations</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Search Engine Optimization')">
              <div class="div-block-187 _41"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Search Engine Optimization</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Social Media')">
              <div class="div-block-187 _42"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Social Media</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-w-tab="Tab 7" class="w-tab-pane w--tab-active" v-if="currentTab == 'academic'">
        <div class="justify-start-stretch">
          <div class="page-section tab alt">
            <div class="div-block-186" @click="openFeeds('Anthropology')">
              <div class="div-block-187 _43"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Anthropology</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Archaeology')">
              <div class="div-block-187 _44"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Archaeology</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Arts')">
              <div class="div-block-187 _45"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Arts</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Astronomy')">
              <div class="div-block-187 _46"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Astronomy</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Biology')">
              <div class="div-block-187 _47"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Biology</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Chemistry')">
              <div class="div-block-187 _48"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Chemistry</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Earth Science')">
              <div class="div-block-187 _49"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Earth Science</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Economics')">
              <div class="div-block-187 _50"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Economics</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Engineering')">
              <div class="div-block-187 _51"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Engineering</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Geography')">
              <div class="div-block-187 _52"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Geography</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('History')">
              <div class="div-block-187 _53"></div>
              <div class="div-block-188">
                <h1 class="heading-56">History</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Languages')">
              <div class="div-block-187 _54"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Languages</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Law')">
              <div class="div-block-187 _55"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Law</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Mathematics')">
              <div class="div-block-187 _56"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Mathematics</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Political Science')">
              <div class="div-block-187 _57"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Political Science</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Philosophy')">
              <div class="div-block-187 _58"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Philosophy</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Physics')">
              <div class="div-block-187 _59"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Physics</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Psychology')">
              <div class="div-block-187 _60"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Psychology</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Sociology')">
              <div class="div-block-187 _61"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Sociology</h1>
              </div>
            </div>
            <div class="div-block-186" @click="openFeeds('Theology')">
              <div class="div-block-187 _62"></div>
              <div class="div-block-188">
                <h1 class="heading-56">Theology</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapGetters, createNamespacedHelpers, mapState } from "vuex";

export default {
  data() {
    return {
      currentTab: "art"
    };
  },
  created() {
    this.$store.dispatch("categories/getCategories");
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
    },
    openFeeds(category) {
      let foundCategory = this.allCategories.find(c => c.name === category);
      let catid = 404;
      if (foundCategory) {
        catid = foundCategory._id;
      }
      this.$router.push({
        name: "catg-feed",
        params: {
          categoryId: catid
        }
      });
    }
  },
  computed: {
    ...mapState({
      allCategories: state => state.categories.allCategories
    })
  }
};
</script>
