<template>
  <div @click="closeSideMenu">
    <div data-collapse="medium" data-animation="over-right" data-duration="400" class="navbar-3 w-nav">
      <div class="div-block-2">
        <router-link to="/" class="w-nav-brand"><img src="../assets/Prodeus-Logo-White.svg" height="36" alt="" class="image-44"></router-link>
        <nav role="navigation" class="nav-menu-3 w-nav-menu">
          <router-link to="/learning" class="nav-link-2 w-nav-link">Learning</router-link>
          <router-link to="/teaching" class="nav-link-2 w-nav-link" :class="{'w--current': $router.name == 'home-teach'}">Teaching</router-link>
          <router-link to="/prodegrees" class="nav-link-2 w-nav-link">ProDegrees</router-link>
          <a href="#" @click.prevent="openLogin" class="nav-link-3 w-nav-link">Login</a>
        </nav>
        <div class="menu-button w-nav-button" @click.stop="toggleSideMenu">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>



      <div @click.stop="doNothing" class="w-nav-overlay" v-if="isSideMenuOpen" data-wf-ignore="" style="height: 5495.97px; display: block; width: 200px;">
        <nav role="navigation" class="nav-menu-3 w-nav-menu w--nav-menu-open" style="transform: translateX(0px) translateY(0px); height: 5495.97px; transition: transform 400ms ease 0s;">
          <router-link to="/learning" class="nav-link-2 w-nav-link w--nav-link-open">Learning</router-link>
          <router-link to="/teaching" class="nav-link-2 w-nav-link w--nav-link-open">Teaching</router-link>
          <router-link to="/prodegrees" class="nav-link-2 w-nav-link w--nav-link-open">ProDegrees</router-link>
          <a href="#" @click.prevent="openLogin" class="nav-link-3 w-nav-link w--nav-link-open">Login</a>
        </nav>
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
    <div class="hero teach" data-ix="display-nav">
      <div class="content">
        <div class="vert-top-left">
          <div class="_40px-bottom">
            <h1 class="heading">Learning<br>is earning</h1>
          </div><a href="#" @click.prevent="openSignUp" class="button-4 w-button">Register for our Free Private Beta</a>
          <div class="text-block-19 dark">Public Enrollment coming June 2019</div>
        </div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e2996c49ea6f8c8b1f56a_teachAsset%2023.svg" alt="" class="image-45 teach"></div>
    </div>
    <div class="section-8 alt">
      <div class="div-block-11">
        <div class="_30px-bottom">
          <h1 class="heading-50 white center">Anyone can teach</h1>
        </div>
        <div class="text-block-20 _30px-bottom white _420">At Prodeus, we believe that everyone has knowledge to share. Create a class using our simple format, engage with your students and earn income every month.</div>
      </div><img src="../assets/clouds-right.svg" width="302" alt="" class="image-52"><img src="../assets/clouds-left.svg" width="331" alt="" class="image-53"><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e1c6b7c1ca463f705f79f_teachingAsset%2016.svg"
        alt="" class="image-58"></div>
    <section id="highered" class="section-4">
      <div class="content-wrap left">
        <div class="div-block-4 left">
          <div class="_30px-bottom">
            <h1 class="heading-50">Simple Class Structure</h1>
          </div>
          <div class="_30px-bottom">
            <div class="text-block-20 _30px-bottom">Record your class easily in the <br>comfort of your own home.</div>
          </div>
          <div class="text-block-22">Classes range from 15-60 minutes long and have a minimum of 5 lessons which help to break each class into digestible chunks. You can even add assignments to every lesson so students can practice as they go along.</div>
        </div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e27c7e346b7e3b3b15f19_structureAsset%2022.svg" alt="" class="image-46"></div>
    </section>
    <section id="highered" class="section-4">
      <div class="content-wrap right"><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e263a348539783bca8618_earningAsset%203.svg" alt="" class="image-46 alt">
        <div class="div-block-4 right">
          <div class="_30px-bottom">
            <h1 class="heading-50 right">Learning is Earning</h1>
          </div>
          <div class="_30px-bottom">
            <div class="text-block-20 _30px-bottom right">Get paid every month for every new <br>student who takes your class.</div>
          </div>
          <div class="text-block-22 right">Student memberships get pooled and distributed to every Prodeus instructor based on the total amount of eligible class-time watched by their students. <br>Your earnings automatically get deposited every week.</div>
        </div>
      </div>
    </section>
    <section id="highered" class="section-4">
      <div class="content-wrap left">
        <div class="div-block-4 left">
          <div class="_30px-bottom">
            <h1 class="heading-50">Project Based Classes</h1>
          </div>
          <div class="_30px-bottom">
            <div class="text-block-20 _30px-bottom">All classes end with a class project to give your students a way to apply the skills they’ve just learned.</div>
          </div>
          <div class="text-block-22">Once you approve their project they receive the credits from your class and can add it to their showcase and share it with the community to get feedback.</div>
        </div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4deac0a29a8f3bb0efce37_learnanywhereAsset%2013.svg" alt="" class="image-46"></div>
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