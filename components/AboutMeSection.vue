<template>
    <section class="bg-white dark:bg-gray-900 ">
        <div class="gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 bg-gradient-to-r from-[#FFF7B2] to-[#FFD465]">
            <div class="px-2 font-cabin pt-12 font-normal font-size-20 leading-150 text-gray-700 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-2xl italic mx-auto leading-none text-[#FF8B1F] font-soulmaze md:text-5xl md:mx-0 md:font-soulmaze xs:text-center md:text-ce md:font-style-italic md:font-weight-400 xs:font-weight-400 md:line-height-30px md:letter-spacing-0em md:text-align-left">Soy Sebastián Morales</h2>
                <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p >We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                <button class="flex flex-row justify-center mt-5 items-center gap-2 px-5 py-3 w-36 h-12 bg-[#1EB5E4] rounded-md shadow-md text-white mx-auto md:mx-0">
                    <span class="text-lg font-medium">Leer más</span>
                    <svg class="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.293 6.20206C12.4805 6.01459 12.7348 5.90927 13 5.90927C13.2652 5.90927 13.5195 6.01459 13.707 6.20206L17.707 10.2021C17.8945 10.3896 17.9998 10.6439 17.9998 10.9091C17.9998 11.1742 17.8945 11.4285 17.707 11.6161L13.707 15.6161C13.5184 15.7982 13.2658 15.899 13.0036 15.8967C12.7414 15.8945 12.4906 15.7893 12.3052 15.6039C12.1198 15.4185 12.0146 15.1677 12.0123 14.9055C12.01 14.6433 12.1108 14.3907 12.293 14.2021L14.586 11.9091H3C2.73478 11.9091 2.48043 11.8037 2.29289 11.6162C2.10536 11.4286 2 11.1743 2 10.9091C2 10.6438 2.10536 10.3895 2.29289 10.202C2.48043 10.0144 2.73478 9.90906 3 9.90906H14.586L12.293 7.61606C12.1055 7.42853 12.0002 7.17422 12.0002 6.90906C12.0002 6.64389 12.1055 6.38959 12.293 6.20206V6.20206Z" fill="white"/>
                    </svg>
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
    export default{
        name: "AboutMeSection"
    }
</script>