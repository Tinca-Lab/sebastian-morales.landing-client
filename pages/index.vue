<template>
  <div class="bg-[#1EB5E4]">
    <Hero-Icon class="mt-32 w-full 2xl-[1440px]"/>
  </div>
</template>

<script>
import HeroIcon from '../components/HeroIcon/HeroIcon.vue';

export default {
  name: "IndexPage",
  components: { HeroIcon },
  layout: 'default',
}
</script>

<style>
@font-face {
  font-family: "Soulmaze";
  src: url("../assets/fonts/MadeSoulmaze.otf");
}

h2 {
  font-family: Soulmaze;
  /* font-weight: bolder; */
}
html {
  font-family: Cabin;
}
</style>
