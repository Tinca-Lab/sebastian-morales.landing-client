<template >
  <div class="  bg-[#1DB5E4]">
    <BlogComponent class="w-[98%] h-full mx-auto my-5 rounded-2xl"/>
    <SocialBar/>
    <!-- <BlogsCarrousel /> -->
  </div>
  
</template>

<script>
import SocialBar from '../components/SocialBar.vue';
import BlogComponent from '../components/BlogComponent.vue';
// import BlogsCarrousel from '../components/BlogsCarrousel.vue';
export default {
  name: "IndexPage",
  components: { BlogComponent,SocialBar}
}
</script>

<style>
@font-face {
  font-family: "Soulmaze";
  src: url("../static/fonts/MadeSoulmaze.otf");
}

h2 {
  font-family: Soulmaze;
  font-weight: lighter;
}
html {
  font-family: Cabin;
}
</style>
