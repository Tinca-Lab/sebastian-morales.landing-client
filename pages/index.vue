<template>
    <div>
        <About-Me-Section/>
    </div>
</template>

<script>
import AboutMeSection from '../components/AboutMeSection.vue';
export default {
    name: "IndexPage",
    components: [AboutMeSection],
}
</script>

<style>
@font-face {
    font-family: "Soulmaze";
    src: url("../assets/fonts/MADESoulmaze.otf");
    }	

    h2{
        font-family: Soulmaze;
        font-weight: lighter;
    }
</style>