<template>
    <section class="bg-white dark:bg-gray-900 ">
        <div class="gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 bg-gradient-to-r from-[#FFF7B2] to-[#FFD465]">
            <div class="px-2 font-cabin pt-12 font-normal font-size-20 leading-150 text-gray-700 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-2xl italic mx-auto leading-none text-[#FF8B1F] font-soulmaze md:text-5xl md:mx-0 md:font-soulmaze xs:text-center md:text-ce md:font-style-italic md:font-weight-400 xs:font-weight-400 md:line-height-30px md:letter-spacing-0em md:text-align-left">Soy Sebastián Morales</h2>
                <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p >We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                <button class="flex flex-row justify-center mt-5 items-center gap-2 px-5 py-3 w-36 h-12 bg-[#1EB5E4] rounded-md shadow-md text-white mx-auto md:mx-0">
                    <span class="text-lg font-medium">Leer más</span>
                    <Arrow-Icon/> 
                </button>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg" src="../assets/image/Imagen1.png" alt="office content 1">
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src="../assets/image/Imagen2.png" alt="office content 2">
            </div>
        </div>
    </section>
</template>
<script>
import ArrowIcon from './icons/ArrowIcon.vue';
    export default{
        name: "AboutMeSection",
        components: {ArrowIcon}
    }
</script>