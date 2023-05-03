<template >
  <div class="relative bg-[#1DB5E4]">
    <Hero-Icon />
    <About-Me-Section :data="aboutMeData" :button="true" />
    <AppBlogSection :metadata="blogSection" :blogs="featuredBlogs" class="w-[98%] 2xl:w-[1440px] h-full mx-auto my-5 rounded-2xl" />
    <Contact-Me />
  </div>
</template>

<script>
import AppBlogSection from '@/components/Blog/AppBlogSection.vue';
import AboutMeSection from '@/components/AboutMeSection/AppAboutMeSection.vue';
import HeroIcon from '@/components/Hero/HeroSection.vue';
import ContactMe from '@/components/Sections/AppContactMeSection.vue';

export default {
  name: "IndexPage",
  components: { AboutMeSection, HeroIcon, AppBlogSection, ContactMe },
  layout: 'default',
  data: () => ({
    featuredBlogs: [],
    blogSection: {},
    aboutMeSection: {},
    aboutMeData: {},
  }),

  computed: {
    home() {
      return this.$store.state.home;
    },

  },
  watch: {
    home() {
      this.blogSection = this.home.attributes.sections.data.filter(section => section.attributes.type === 'blog')[0];
      this.aboutMeSection = this.home.attributes.sections.data.filter(section => section.attributes.type === 'main')[0];
      this.featuredBlogs = this.blogSection.attributes.blogs.data;
      this.aboutMeData = this.aboutMeSection.attributes;
    }
  },
  async beforeCreate() {
    if (process.client)
      await this.$store.dispatch('fetchHome');
  },

}
</script>

<style>
@font-face {
  font-family: "Soulmaze";
  src: url("@/assets/fonts/MadeSoulmaze.otf");
}

h2 {
  font-family: Soulmaze;
  font-weight: lighter;
}

html {
  font-family: Cabin;
}
</style>
