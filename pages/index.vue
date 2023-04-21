<template>
    <div class="bg-[#1EB5E4]">
       <About-Me-Section/>
       <Hero-Icon class="mt-32 w-full 2xl-[1440px]"/>
    </div>
</template>

<script>
import AboutMeSection from '../components/AboutMeSection.vue';
import HeroIcon from '../components/HeroIcon/HeroIcon.vue';

export default {
    name: "IndexPage",
    components: {AboutMeSection,HeroIcon},
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
