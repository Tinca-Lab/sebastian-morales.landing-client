<template >
  <div class="  bg-[#1DB5E4]">
    <BlogComponent class="w-[98%] h-full mx-auto my-5 rounded-2xl"/>
  </div>
  
</template>

<script>
import BlogComponent from '../components/Blog/BlogComponent.vue';

export default {
  name: "IndexPage",
  components: { BlogComponent}
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
