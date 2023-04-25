<template >
  <div class="relative bg-[#1DB5E4]">
    <SocialBar />
    <Hero-Icon class="mt-24 md:mt-[7.5rem]"/>
    <About-Me-Section />
    <BlogComponent class="w-[98%] 2xl:w-[1440px] h-full mx-auto my-5 rounded-2xl" :home="true"/>
    <Contact-Me class="2xl:w-[1440px]"/>
  </div>
</template>

<script>
import BlogComponent from '../components/Blog/BlogComponent.vue';
import AboutMeSection from '../components/AboutMeSection.vue';
import HeroIcon from '../components/HeroIcon/HeroIcon.vue';
import ContactMe from '../components/ContactMe.vue';
import SocialBar from '../components/SocialBar.vue'

export default {
    name: "IndexPage",
    components: {AboutMeSection,HeroIcon,BlogComponent,SocialBar,ContactMe},
    layout: 'default',

}
</script>

<style>
@font-face {
    font-family: "Soulmaze";
    src: url("../assets/fonts/MadeSoulmaze.otf");
  }
  h2{
      font-family: Soulmaze;
      font-weight: lighter;
  }
  html{
      font-family: Cabin;
  }
</style>
