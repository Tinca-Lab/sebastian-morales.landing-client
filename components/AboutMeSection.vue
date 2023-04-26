<template>
    <section>
        <div class="gap-16 w-[98%] 2xl:w-[1440px] p-10 rounded-3xl mx-auto grid lg:grid-cols-2  bg-gradient-to-r from-[#FFF7B2] to-[#FFD465]">
            <div class="px-2 space-y-4 font-cabin lg:text-xl md:text-xl pt-12 font-normal text-20 leading-150 text-gray-700 sm:text-sm dark:text-gray-400">
                <h2 class="mb-4 xl:text-6xl lg:text-left italic mx-auto leading-none text-[#FF8B1F] font-soulmaze  md:mx-0 md:font-soulmaze xs:text-center md:font-style-italic md:text-3xl lg:text-5xl md:font-weight-400 xs:font-weight-400 md:line-height-30px xs:letter-spacing-0em xs:text-align-left">Soy Sebastián Morales</h2>
                <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p >We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                <Boton-Contact :title=title  class="flex flex-row justify-center mt-5 items-center gap-2 px-5 py-3 w-36 h-12 bg-[#1EB5E4] rounded-md shadow-md text-white mx-auto lg:mx-0"/>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg " src="../assets/image/Imagen1.png" alt="office content 1">
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src="../assets/image/Imagen2.png" alt="office content 2">
            </div>
        </div>
    </section>
</template>
<script>
import BotonContact from '@/components/Boton.vue';
    export default{
        name: "AboutMeSection",
        components: {
            BotonContact
        },
        data() {
            return {
                title: "leer mas"
            }
        },
    }
</script>
