<template >
  <div class="relative bg-[#1DB5E4]">
    <Hero-Icon :metadata="featuredSection" />
    <About-Me-Section :data="aboutMeData" :button="true" />
    <AppBlogSection :metadata="blogSection" :blogs="featuredBlogs" class="w-[98%] 2xl:w-[1440px] h-full mx-auto my-5 rounded-2xl" />
    <Contact-Me :metadata="contactMeData" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    // aboutMeSection: {},
    aboutMeData: {},
    contactMeData: {},
    featuredSection:{},
  }),

  computed: {
    home() {
      return this.$store.state.home;
    },
    ...mapGetters(['isAuthenticated']),...mapGetters(['isAuthenticated']),
  },
  watch: {
    home() {
      this.blogSection = this.home.attributes.sections.data.filter(section => section.attributes.type === 'blog')[0];
      this.aboutMeData = this.home.attributes.sections.data.filter(section => section.attributes.type === 'main')[0];
      this.featuredSection = this.home.attributes.sections.data.filter(section => section.attributes.type === 'featured')[0];
      this.contactMeData = this.home.attributes.sections.data.filter(section => section.attributes.type === 'contactme')[0];

      this.contactMeData = this.contactMeData.attributes;
      this.featuredBlogs = this.blogSection.attributes.blogs.data;
      this.aboutMeData = this.aboutMeData.attributes;
      this.featuredSection = this.featuredSection.attributes;
    }
  },
  async beforeCreate() {
    if (process.client)
      await this.$store.dispatch('fetchHome');
  },
  methods: {
        async userLogout() {
          await this.$auth.logout()
        },
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
