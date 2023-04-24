<template >
  <div class="relative bg-[#1DB5E4]">
    <SocialBar />
    <Hero-Icon class="mt-28"/>
    <About-Me-Section />
    <BlogComponent class="w-[98%] 2xl:w-[1440px] h-full mx-auto my-5 rounded-2xl" />
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
