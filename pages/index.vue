<template >
  <div class="bg-[#1DB5E4]">
    <SocialBar class="fixed top-0 left-0 right-0 z-10"/>
    <Hero-Icon class="mt-32"/>
    <About-Me-Section class="z-0"/>
    <BlogComponent class="w-[98%] h-full mx-auto my-5 rounded-2xl"/>

    </div>
</template>

<script>
import BlogComponent from '../components/Blog/BlogComponent.vue';
import AboutMeSection from '../components/AboutMeSection.vue';
import HeroIcon from '../components/HeroIcon/HeroIcon.vue';
import SocialBar from '../components/SocialBar.vue';
export default {
    name: "IndexPage",
    components: {AboutMeSection,HeroIcon,BlogComponent,SocialBar},
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
