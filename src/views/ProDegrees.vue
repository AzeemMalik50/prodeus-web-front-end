<template>
  <div @click="closeSideMenu">
    <div data-collapse="medium" data-animation="over-right" data-duration="400" class="navbar-3 w-nav">
      <div class="div-block-2">
        <router-link to="/app" class="w-nav-brand"><img src="../assets/Prodeus-Logo-White.svg" height="36" alt="" class="image-44"></router-link>
        <nav role="navigation" class="nav-menu-3 w-nav-menu">
          <router-link to="/learning" class="nav-link-2 w-nav-link">Learning</router-link>
          <router-link to="/teaching" class="nav-link-2 w-nav-link">Teaching</router-link>
          <router-link to="/prodegrees" class="nav-link-2 w-nav-link" :class="{'w--current': $router.name == 'home-degrees'}">ProDegrees</router-link>
          <a href="#" @click.prevent="openLogin" class="nav-link-3 w-nav-link">Login</a>
        </nav>
        <div class="menu-button w-nav-button" @click.stop="toggleSideMenu">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
    <div data-collapse="medium" data-animation="default" data-duration="400" data-w-id="63b108a1-19eb-6641-a06b-7fed91a3e3c6" class="navbar-4 w-nav" data-ix="display-none">
      <div class="div-block-2">
        <a href="homepage.html" class="w-nav-brand"><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c61d222da78f067b8dd07a7_logoAsset%202.svg" alt="" class="image-44"></a>
        <nav role="navigation" class="nav-menu-3 w-nav-menu">
          <router-link to="/learning" class="nav-link-2 dark w-nav-link w--current">Learning</router-link>
          <router-link to="/teaching" class="nav-link-2 dark w-nav-link">Teaching</router-link>
          <router-link to="/prodegrees" class="nav-link-2 dark w-nav-link">ProDegrees</router-link>
          <a href="#" @click.prevent="openLogin" class="nav-link-3 dark w-nav-link">Login</a>
        </nav>
        <div class="menu-button w-nav-button">
          <div class="icon-3 w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
    <div class="hero prodegrees" data-ix="display-nav">
      <div class="content alt">
        <div class="vert-top-left">
          <div class="_40px-bottom">
            <h1 class="heading">Peer certified<br>degrees</h1>
          </div><a href="#" @click.prevent="openSignUp" class="button-4 w-button">Register for our Free Private Beta</a>
          <div class="text-block-19 dark">Public Enrollment coming June 2019</div>
        </div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4dcca9dfbd6c294925ff5b_peercertifiedAsset%2010.svg" alt="" class="image-45 degrees"></div>
    </div>
    <div class="section-8 alt" data-ix="display-nav">
      <div class="div-block-11">
        <div class="_30px-bottom">
          <h1 class="heading-50 white center">Power to the peers</h1>
        </div>
        <div class="text-block-20 _30px-bottom white _420">Prodeus and the ProDegree are built on the power of peer review. We believe that through sharing our unique experience and opinion we can make learning easier, more social and more accessible for everyone.</div>
      </div><img src="../assets/peer-degreesArtboard-1.svg" height="450" alt="" class="image-59"><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e4a4d34853988d3caac3e_clouds%20right.svg" width="302" alt="" class="image-52"><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e4a4c7c1ca408b50634c4_clouds%20left.svg"
        width="331" alt="" class="image-53"></div>
    <div class="section-5">
      <div class="content-wrap vert alt">
        <div class="_30px-bottom">
          <h1 class="heading-50 center">How do ProDegrees work?</h1>
        </div>
        <div class="text-block-20 _30px-bottom center">Prodeus provides multiple pathways to showcase expertise and learning. Earn credits from completing eligible classes, getting positive feedback on your projects and answering question from the community.</div>
        <h1 class="heading-54">Earn credits by</h1>
        <div class="div-block-181 alt">
          <div class="div-block-180">
            <div class="text-block-24">Sharing Your Work</div>
            <div class="text-block-25 projects">50 Likes  |  1 Credit</div>
          </div>
          <div class="div-block-180">
            <div class="text-block-24">Answering Questions</div>
            <div class="text-block-25 questions">5 Upvotes  |  1 Credit</div>
          </div>
          <div class="div-block-180">
            <div class="text-block-24">Completing Classes</div>
            <div class="text-block-25 class">30 Mins  |  5 Credits</div>
          </div>
        </div>
      </div>
    </div>
    <section id="highered" class="section-4 alt">
      <div class="content-wrap left">
        <div class="div-block-4 left">
          <div class="_30px-bottom">
            <h1 class="heading-50">Peer Certification</h1>
          </div>
          <div class="_30px-bottom">
            <div class="text-block-20 _30px-bottom">Only eligible classes offer credit to students, and it’s the students themselves who determine their eligibility.</div>
          </div>
          <div class="text-block-22">Students rate and review classes based on class effectiveness, enjoyability and how engaged the instructor is. This helps students make more informed decisions while teachers learn how to create better classes moving forward.</div>
        </div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4f5bce5bff5dcd7162c4c9_peersAsset%2012.svg" height="483" alt="" class="image-60"></div>
    </section>
    <div class="section-9">
      <div class="div-block-182">
        <div class="div-block-4 center right _540">
          <div class="_30px-bottom">
            <h1 class="heading-50 right white">Eligibility <br>Requirements</h1>
          </div>
          <div class="_30px-bottom">
            <div class="text-block-20 _30px-bottom right white _2">All classes must meet minimum requirements to offer credit to students and payment for instructors</div>
          </div>
        </div><img src="../assets/peercertAsset-1.svg" alt="" class="image-61"></div>
    </div>
    <section id="highered" class="section-4">
      <div class="content-wrap left alt">
        <div class="div-block-4 left">
          <div class="_30px-bottom">
            <h1 class="heading-50">Build up your expertise</h1>
          </div>
          <div class="text-block-20 _30px-bottom">ProDegrees reflect your progress from apprenticeship to mastery. You can earn degrees by interacting with content that interests you or actively taking classes and earn an advanced degree within four months.</div>
        </div><img src="../assets/1Asset-1.svg" alt="" class="image-64"><img src="../assets/credits-bottomAsset-3.svg" alt="" class="image-63"><img src="../assets/fullAsset-1.svg" alt="" class="image-62"></div>
    </section>
    <div class="section-7">
      <a href="#" class="link-block-5 w-inline-block"><img src="../assets/logoAsset-2.svg" alt=""></a>
      <div class="div-block-189">
        <a href="https://twitter.com/weareprodeus" target="_blank" class="w-inline-block"><img src="../assets/twitter.svg" width="20" alt=""></a>
        <a href="https://www.facebook.com/weareprodeus/" target="_blank" class="w-inline-block"><img src="../assets/facebook.svg" width="20" alt=""></a>
        <a href="https://www.instagram.com/weareprodeus/" target="_blank" class="w-inline-block"><img src="../assets/instagram.svg" width="20" alt=""></a>
      </div>
      <div class="text-block-26">© 2019 Prodeus. All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isSideMenuOpen: false
      };
    },
    methods: {
      toggleSideMenu() {
        this.isSideMenuOpen = !this.isSideMenuOpen;
      },
      doNothing() {},
      closeSideMenu() {
        this.isSideMenuOpen = false;
      },
      openLogin() {
        this.$store.dispatch('setLoginForm', true)
      },
      openSignUp() {
        this.$store.dispatch('setSignUpForm', true)
      }
    }
  };
</script>