<template>
  <div>
      <div data-collapse="medium" data-animation="over-right" data-duration="400" class="navbar-3 w-nav">
    <div class="div-block-2">
      <router-link to="/" class="w-nav-brand"><img src="../assets/Prodeus-Logo-White.svg" height="36" alt="" class="image-44"></router-link>
      <nav role="navigation" class="nav-menu-3 w-nav-menu">
               <router-link to="/learning" class="nav-link-2 w-nav-link" :class="{'w--current': $router.name == 'home-learn'}">Learning</router-link>
       <router-link to="/teaching"  class="nav-link-2 w-nav-link">Teaching</router-link>
       <router-link to="/prodegrees"  class="nav-link-2 w-nav-link">ProDegrees</router-link>
       <router-link to="/login"  class="nav-link-3 w-nav-link">Login</router-link>
        </nav>
      <div class="menu-button w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
  <!-- <div data-collapse="medium" data-animation="default" data-duration="400" data-w-id="63b108a1-19eb-6641-a06b-7fed91a3e3c6" class="navbar-4 w-nav" data-ix="display-none">
    <div class="div-block-2"><a href="homepage.html" class="w-nav-brand"><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c61d222da78f067b8dd07a7_logoAsset%202.svg" alt="" class="image-44"></a>
      <nav role="navigation" class="nav-menu-3 w-nav-menu"><a href="homepage-learn.html" class="nav-link-2 dark w-nav-link w--current">Learning</a><a href="homepage-teach.html" class="nav-link-2 dark w-nav-link">Teaching</a><a href="homepage-degrees.html" class="nav-link-2 dark w-nav-link">ProDegrees</a><a href="#" class="nav-link-3 dark w-nav-link">Login</a></nav>
      <div class="menu-button w-nav-button">
        <div class="icon-3 w-icon-nav-menu"></div>
      </div>
    </div>
  </div> -->
  <div class="hero learn" data-ix="display-nav">
    <div class="content">
      <div class="vert-top-left">
        <div class="_40px-bottom">
          <h1 class="heading">A whole new<br>way to learn</h1>
        </div><router-link to="/sign-up" class="button-4 w-button">Register for our Free Private Beta</router-link>
        <div class="text-block-19 dark">Public Enrollment coming June 2019</div>
      </div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e50f57c1ca42a61063ab9_factoryAsset%2024.svg" alt="" class="image-45 learn"></div>
  </div>
  <div class="section-8">
    <div class="div-block-11">
      <div class="_30px-bottom">
        <h1 class="heading-50 white center">Self Guided Learning</h1>
      </div>
      <div class="text-block-20 _30px-bottom white _420">With an Immersive classroom experience, real-world projects and a community of lifelong learners Prodeus makes self-guided education simple and intuitive.</div>
    </div><img src="../assets/clouds-right.svg" width="302" alt="" class="image-52"><img src="../assets/clouds-left.svg" width="331" alt="" class="image-53"><img src="../assets/Group-6860.svg" alt="" class="image-56"><img src="../assets/Path-30785.svg" alt="" class="image-54"><img src="../assets/Group-7675.svg" alt="" class="image-55"><img src="../assets/searchAsset-1.svg" width="300" alt="" class="image-51"><img src="../assets/Path-30784.svg" alt="" class="image-50"></div>
  <section id="highered" class="section-4">
    <div class="content-wrap left">
      <div class="div-block-4 left">
        <div class="_30px-bottom">
          <h1 class="heading-50">Learn by Doing</h1>
        </div>
        <div class="_30px-bottom">
          <div class="text-block-20 _30px-bottom">Learning should be real and practical not passive and abstract.</div>
        </div>
        <div class="text-block-22">That’s why all of our classes end with a final project to apply your skills and get feedback from your peers. This gives you the chance to build new connections and build your portfolio along the way.</div>
      </div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e1c6b7c1ca463f705f79f_teachingAsset%2016.svg" alt="" class="image-46"></div>
  </section>
  <section id="highered" class="section-4 alt">
    <div class="content-wrap right"><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e1ed6e346b77422b15511_ondemandAsset%2020.svg" alt="" class="image-46 alt">
      <div class="div-block-4 right">
        <div class="_30px-bottom">
          <h1 class="heading-50 right">On-Demand Learning</h1>
        </div>
        <div class="_30px-bottom">
          <div class="text-block-20 _30px-bottom right">All our classes are simply structured and pre-recorded so you can finish them on your own time.</div>
        </div>
        <div class="text-block-22 right">At Prodeus you can take a class in almost anything.  Search through our catalog, find classes that interest you and enroll in as many as you want. Follow along with the video lessons and reach out to your instructors and classmates whenever you have questions.</div>
      </div>
    </div>
  </section>
  <section id="highered" class="section-4">
    <div class="content-wrap left">
      <div class="div-block-4 left">
        <div class="_30px-bottom">
          <h1 class="heading-50">In Class Discussion</h1>
        </div>
        <div class="_30px-bottom">
          <div class="text-block-20 _30px-bottom">Time-based discussion bring students together to collaborate and engage with each other in real time.</div>
        </div>
        <div class="text-block-22">As you go through the video lessons you can view the feedback from past and present students with time-based comments. If a question hasn’t already been answered or there’s something you’d like to discuss more, you can easily post a comment.</div>
      </div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4e218fc49ea6a1ebb1ee8c_discussionAsset%201.svg" alt="" class="image-46"></div>
  </section>
  <div class="section-7">
    <div data-animation="slide" data-duration="500" data-infinite="1" class="slider-2 w-slider">
      <div class="mask w-slider-mask">
        <div class="slide-2 w-slide">
          <div class="div-block-179">
            <div class="div-block-178"></div>
            <div class="div-block-10 w-clearfix">
              <h1 class="heading-53">Build a Social Networking Platform w/ Messenger</h1>
              <div class="text-block-23">Prodeus makes it simple and affordable to learn the most in demand skills, connect with your professional peers and get the degree you need to build a better life.</div><img src="../assets/arrow.svg" height="18" alt="" class="image-57"></div>
          </div>
          <div class="div-block-179">
            <div class="div-block-178"></div>
            <div class="div-block-10 w-clearfix">
              <h1 class="heading-53">Build a Social Networking Platform w/ Messenger</h1>
              <div class="text-block-23">Prodeus makes it simple and affordable to learn the most in demand skills, connect with your professional peers and get the degree you need to build a better life.</div><img src="../assets/arrow.svg" height="18" alt="" class="image-57"></div>
          </div>
        </div>
        <div class="w-slide">
          <div class="div-block-179">
            <div class="div-block-178"></div>
            <div class="div-block-10 w-clearfix">
              <h1 class="heading-53">Build a Social Networking Platform w/ Messenger</h1>
              <div class="text-block-23">Prodeus makes it simple and affordable to learn the most in demand skills, connect with your professional peers and get the degree you need to build a better life.</div><img src="../assets/arrow.svg" height="18" alt="" class="image-57"></div>
          </div>
        </div>
        <div class="w-slide">
          <div class="div-block-179">
            <div class="div-block-178"></div>
            <div class="div-block-10 w-clearfix">
              <h1 class="heading-53">Build a Social Networking Platform w/ Messenger</h1>
              <div class="text-block-23">Prodeus makes it simple and affordable to learn the most in demand skills, connect with your professional peers and get the degree you need to build a better life.</div><img src="../assets/arrow.svg" height="18" alt="" class="image-57"></div>
          </div>
        </div>
      </div>
      <div class="left-arrow-3 w-slider-arrow-left">
        <div class="w-icon-slider-left"></div>
      </div>
      <div class="right-arrow-3 w-slider-arrow-right">
        <div class="w-icon-slider-right"></div>
      </div>
      <div class="slide-nav-2 w-slider-nav w-slider-nav-invert w-round"></div>
    </div><a href="#" class="link-block-5 w-inline-block"><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c61d222da78f067b8dd07a7_logoAsset%202.svg" alt=""></a></div>

  </div>
</template>
<script>
export default {

}
</script>