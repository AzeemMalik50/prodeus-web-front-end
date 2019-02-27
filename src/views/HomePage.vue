<template>
  <div @click="closeSideMenu">
    <div data-collapse="medium" data-animation="over-right" data-duration="400" class="navbar-3 w-nav">
    <div class="div-block-2">
      <router-link to="/" class="w-nav-brand"><img src="../assets/Prodeus-Logo-White.svg" height="36" alt="" class="image-44"></router-link>
      <nav role="navigation" class="nav-menu-3 w-nav-menu">
      <router-link to="/learning" class="nav-link-2 w-nav-link">Learning</router-link>
       <router-link to="/teaching"  class="nav-link-2 w-nav-link w--current">Teaching</router-link>
      <router-link to="/teaching"  class="nav-link-2 w-nav-link">ProDegrees</router-link>
       <a href="#"  @click.prevent="openLogin" class="nav-link-3 w-nav-link">Login</a>
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
    </nav></div>




  </div>
  <!-- <div data-collapse="medium" data-animation="default" data-duration="400" data-w-id="63b108a1-19eb-6641-a06b-7fed91a3e3c6" class="navbar-4 w-nav" data-ix="display-none">
    <div class="div-block-2"><a href="homepage.html" class="w-nav-brand w--current"><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c61d222da78f067b8dd07a7_logoAsset%202.svg" alt="" class="image-44"></a>
      <nav role="navigation" class="nav-menu-3 w-nav-menu"><a href="homepage-learn.html" class="nav-link-2 dark w-nav-link">Learning</a><a href="homepage-teach.html" class="nav-link-2 dark w-nav-link">Teaching</a><a href="homepage-degrees.html" class="nav-link-2 dark w-nav-link">ProDegrees</a><a href="#" class="nav-link-3 dark w-nav-link">Login</a></nav>
      <div class="menu-button w-nav-button">
        <div class="icon-3 w-icon-nav-menu"></div>
      </div>
    </div>
  </div> -->
  <div class="hero" data-ix="display-nav">
    <div class="content">
      <div class="vert-top-left">
        <div class="_40px-bottom">
          <h1 class="heading">A degree <br>shouldn’t be <br>a debt sentence</h1>
        </div><a href="#" @click.prevent="openSignUp" class="button-4 w-button">Register for our Free Private Beta</a>
        <div class="text-block-19">Public Enrollment coming June 2019</div>
      </div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4f2f84e97f837db73d53c8_mountainAsset%206.svg" alt="" class="image-45"></div>
  </div>
  <section id="highered" class="section-4">
    <div class="content-wrap left">
      <div class="div-block-4 left">
        <div class="_30px-bottom">
          <h1 class="heading-50">Higher Education for the digital age</h1>
        </div>
        <div class="_30px-bottom">
          <div class="text-block-20 _30px-bottom">Prodeus is the world’s first peer-to-peer university, a space of learning for everyone, by everyone, about almost anything.</div>
        </div><a href="#" class="link-8">Read more about Peer Certified Education</a></div><img src="../assets/higheredAsset-11.svg" alt="" class="image-46"></div>
  </section>
  <section id="debtfree" class="section-4">
    <div class="content-wrap right"><img src="../assets/debtfreeAsset-12.svg" alt="" class="image-47">
      <div class="div-block-4 right">
        <div class="_30px-bottom">
          <h1 class="heading-50 right">Debt Free Degrees</h1>
        </div>
        <div class="_30px-bottom">
          <div class="text-block-20 _30px-bottom right">At $14/mo you can earn a blockchain backed degree for the cost of a Netflix subscription.</div>
        </div><a href="#" class="link-8">Read more about the ProDegree</a></div>
    </div>
  </section>
  <div class="section-5 alt">
    <div class="content-wrap vert alt _1">
      <div class="_30px-bottom">
        <h1 class="heading-50 center">Build a better future</h1>
      </div>
      <div class="text-block-20 _30px-bottom center">Prodeus makes it simple and affordable to learn the most in demand skills, connect with your professional peers and get the degree you need to build a better life.</div>
    </div>
    <div data-animation="slide" data-duration="500" data-infinite="1" class="slider-3 w-slider">
      <div class="w-slider-mask">
        <div class="w-slide">
          <div class="catalog">
            <div class="div-block-176">
              <div class="div-block-151">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Animation</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-164">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Blockchain</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-154">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Fashion Design</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-33">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Front End Development</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-166">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Data science</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-165">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Mobile App Development</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-3 w-slide">
          <div class="catalog">
            <div class="div-block-176">
              <div class="div-block-155">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Illustration</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-167">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Marketing</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-157">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Graphic Design</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-156">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Web Design</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-43">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Cryptocurrency</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-44">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Game Development</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-slide">
          <div class="catalog">
            <div class="div-block-176">
              <div class="div-block-158">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Economics</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-160">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">History</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-159">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Political Science</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-162">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Accounting</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-161">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Philosophy</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-163">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Social Media </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-arrow-2 w-slider-arrow-left">
        <div class="icon w-icon-slider-left"></div>
      </div>
      <div class="right-arrow-2 w-slider-arrow-right">
        <div class="icon w-icon-slider-right"></div>
      </div>
      <div class="slide-nav-3 w-slider-nav w-slider-nav-invert w-round"></div>
    </div>
    <div data-animation="slide" data-duration="500" data-infinite="1" class="slider-4 w-slider">
      <div class="w-slider-mask">
        <div class="w-slide">
          <div class="catalog">
            <div class="div-block-176">
              <div class="div-block-151">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Animation</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-154">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Fashion Design</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-33">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Front End Development</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-3 w-slide">
          <div class="catalog">
            <div class="div-block-176">
              <div class="div-block-155">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Illustration</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-167">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Marketing</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-44">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Game Development</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-slide">
          <div class="catalog">
            <div class="div-block-176">
              <div class="div-block-158">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Economics</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-159">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Political Science</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-176">
              <div class="div-block-161">
                <div class="div-block-175">
                  <div class="div-block-41">
                    <h1 class="heading-49">School of</h1>
                    <h1 class="heading-48">Philosophy</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-slide">
          <div class="div-block-176">
            <div class="div-block-164">
              <div class="div-block-175">
                <div class="div-block-41">
                  <h1 class="heading-49">School of</h1>
                  <h1 class="heading-48">Blockchain</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="div-block-176">
            <div class="div-block-166">
              <div class="div-block-175">
                <div class="div-block-41">
                  <h1 class="heading-49">School of</h1>
                  <h1 class="heading-48">Data science</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="div-block-176">
            <div class="div-block-165">
              <div class="div-block-175">
                <div class="div-block-41">
                  <h1 class="heading-49">School of</h1>
                  <h1 class="heading-48">Mobile App Development</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-slide">
          <div class="div-block-176">
            <div class="div-block-156">
              <div class="div-block-175">
                <div class="div-block-41">
                  <h1 class="heading-49">School of</h1>
                  <h1 class="heading-48">Web Design</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="div-block-176">
            <div class="div-block-43">
              <div class="div-block-175">
                <div class="div-block-41">
                  <h1 class="heading-49">School of</h1>
                  <h1 class="heading-48">Cryptocurrency</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="div-block-176">
            <div class="div-block-167">
              <div class="div-block-175">
                <div class="div-block-41">
                  <h1 class="heading-49">School of</h1>
                  <h1 class="heading-48">Marketing</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-slide">
          <div class="div-block-176">
            <div class="div-block-160">
              <div class="div-block-175">
                <div class="div-block-41">
                  <h1 class="heading-49">School of</h1>
                  <h1 class="heading-48">History</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="div-block-176">
            <div class="div-block-162">
              <div class="div-block-175">
                <div class="div-block-41">
                  <h1 class="heading-49">School of</h1>
                  <h1 class="heading-48">Accounting</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="div-block-176">
            <div class="div-block-163">
              <div class="div-block-175">
                <div class="div-block-41">
                  <h1 class="heading-49">School of</h1>
                  <h1 class="heading-48">Social Media </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-arrow-2 w-slider-arrow-left">
        <div class="icon w-icon-slider-left"></div>
      </div>
      <div class="right-arrow-2 w-slider-arrow-right">
        <div class="icon w-icon-slider-right"></div>
      </div>
      <div class="slide-nav-3 w-slider-nav w-slider-nav-invert w-round"></div>
    </div>
  </div>
  <section id="anywhere" class="section-4">
    <div class="content-wrap left">
      <div class="div-block-4 left">
        <div class="_30px-bottom">
          <h1 class="heading-50">Learn anywhere, anytime<br>from any device</h1>
        </div>
        <div class="_30px-bottom">
          <div class="text-block-20 _30px-bottom">All our classes are simply structured and pre-recorded so you can finish them on your own time.</div>
        </div><a href="#" class="link-8">Read more about Prodeus classes</a></div><img src="https://uploads-ssl.webflow.com/5c4c89abdfbd6c122324f41c/5c4deac0a29a8f3bb0efce37_learnanywhereAsset%2013.svg" alt="" class="image-48"></div>
  </section>
  <section id="debtfree" class="section-4 blue">
    <div class="content-wrap teach">
      <div class="div-block-4 center right">
        <div class="_30px-bottom">
          <h1 class="heading-50 right">Anyone can teach</h1>
        </div>
        <div class="_30px-bottom">
          <div class="text-block-20 _30px-bottom right">Everyone has knowledge to share. Create a class using our simple format, engage with your students and earn income every month.</div>
        </div><a href="#" class="link-8">Read more about teaching</a></div><img src="../assets/teachAsset-152x-8.png" alt="" class="image-49"></div>
  </section>
  <div class="section-6 alt">
    <h1 class="heading-52">Featured Classes</h1>
    <div class="content-wrap">
      <div data-animation="slide" data-duration="500" data-infinite="1" class="slider w-slider">
        <div class="w-slider-mask">
          <div class="slide w-slide">
            <div class="div-block-6"></div>
            <div class="div-block-177">
              <div class="div-block-4">
                <div class="_30px-bottom">
                  <h1 class="heading-51">Introduction to Python Programming with Tim Ruscica</h1>
                </div>
                <div class="_30px-bottom">
                  <div class="text-block-21">This course will walk you through the basics of python; providing a strong base in fundamental programming concepts that enable you to easily move further with python or into more advanced languages. Python&#x27;s large variety of modules allow you to build both desktop and web applications. It is also the top choice for machine learning and artificial intelligence.</div>
                </div><a href="#" class="link-8">Get your ProDegree in Web Development</a></div>
            </div>
          </div>
          <div class="slide w-slide">
            <div class="div-block-6 _2"></div>
            <div class="div-block-177">
              <div class="div-block-4">
                <div class="_30px-bottom">
                  <h1 class="heading-51">Fashion Illustration for Beginners: Croquis &amp; Models</h1>
                </div>
                <div>
                  <div class="_30px-bottom">Every year the cost of college rises, and students have to go deeper into debt to attain the degree and skills necessary to build a better life. </div>
                </div><a href="#" class="link-8">Get your ProDegree in Fashion Design</a></div>
            </div>
          </div>
          <div class="slide w-slide">
            <div class="div-block-6 _3"></div>
            <div class="div-block-177">
              <div class="div-block-4">
                <div class="_30px-bottom">
                  <h1 class="heading-51">Object Oriented Programming in Python with Tim Ruscica</h1>
                </div>
                <div class="_30px-bottom">
                  <div class="text-block-21">Understating OOP principles is by far the most important step from moving from a beginner to an intermediate programmer. This intermediate level course focuses on introducing OOP (object orientated programming) with python focusing on topics like; polymorphism, abstraction, inheritance, method overloading and static vs class methods.</div>
                </div><a href="#" class="link-8">Get your ProDegree in Web Development</a></div>
            </div>
          </div>
        </div>
        <div class="left-arrow-3 w-slider-arrow-left">
          <div class="w-icon-slider-left"></div>
        </div>
        <div class="right-arrow-3 w-slider-arrow-right">
          <div class="w-icon-slider-right"></div>
        </div>
        <div class="slide-nav w-slider-nav w-round"></div>
      </div>
    </div>
  </div>
  <div class="section-7"><a href="#" class="link-block-5 w-inline-block"><img src="../assets/logoAsset-2.svg" alt=""></a></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isSideMenuOpen: false
    }
  },
  methods:{
    toggleSideMenu(){
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
    doNothing(){

    },
    closeSideMenu(){
      this.isSideMenuOpen = false;
    },
    openLogin(){
      this.$store.dispatch('setLoginForm', true)
    },
    openSignUp(){
      this.$store.dispatch('setSignUpForm', true)
    }
  }
}
</script>