<template >
  <div class="bg-[#1DB5E4] pl-[10px] pr-[10px] scroll-y-hidden flex flex-col gap-5">
    <Navbar-Component class="mb-20 md:mb-[6rem]"/>
    <Social-Bar />
      <main>
        <Nuxt class="flex flex-col gap-5"/>
      </main>
    <Footer-Component />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarFooter/NavbarComponent.vue';
import FooterComponent from '@/components/NavbarFooter/FooterComponent.vue';
import SocialBar from '@/components/Sections/AppSocialBar.vue'

export default {
  name: "DefaultLayout",
  components: { NavbarComponent,FooterComponent,SocialBar }
}
</script>
