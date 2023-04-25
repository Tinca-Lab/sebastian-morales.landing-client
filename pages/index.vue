<template >
  <div class="  bg-[#1DB5E4]">
    <Hero-Icon class="mt-32 w-full 2xl-[1440px]"/>
    <About-Me-Section/>
    <BlogComponent class="w-[98%] h-full mx-auto my-5 rounded-2xl"/>
    <Contact-Me class="2xl:w-[1440px]"/>
    </div>
</template>

<script>
import BlogComponent from '../components/Blog/BlogComponent.vue';
import AboutMeSection from '../components/AboutMeSection.vue';
import HeroIcon from '../components/HeroIcon/HeroIcon.vue';
import ContactMe from '../components/ContactMe.vue';

export default {
    name: "IndexPage",
    components: {AboutMeSection,HeroIcon,BlogComponent,ContactMe},
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
