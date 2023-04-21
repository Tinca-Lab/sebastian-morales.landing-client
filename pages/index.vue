<template >
  <div>

    <Blog-Component />

  </div>
</template>

<script>
import BlogComponent from '../components/BlogComponent.vue';

export default {
  name: "IndexPage",
  components: { BlogComponent },
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
  font-weight: lighter;
}
html {
  font-family: Cabin;
}
</style>
