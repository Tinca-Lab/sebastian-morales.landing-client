<template>
    <section>
        <div class="md:pr-10 md:pl-20 leading-6">
            <h2 class="text-gray-900 sm:text-lg sm:gap-4 sm:leading-6 sm:items-center sm:mt-11 sm:ml-2.5 sm:mr-2.5 lg:pr-5 lg:mt-24 lg:text-6xl lg:gap-4 md:pr-5 md:mt-24 md:text-lg md:gap-4 xs:text-lg xs:leading-6 xs:gap-4 xs:items-center xs:mt-11 xs:ml-2.5 xs:mr-2.5">Sebastián en twitter</h2>
            <p class="text-gray-700 sm:text-xl sm:mt-4 sm:ml-2.5 sm:mr-2.5 sm:leading-6 xs:text-xl xs:mt-4 xs:ml-2.5 xs:mr-2.5 xs:leading-6 ">Únete a la conversación política y mantente informado con las últimas noticias e informes sobre lo que ocurre en Girón siguiéndome en Twitter.</p>
            <Boton-Contact :title=title class="flex flex-row items-center justify-center mt-5 gap-2 h-12 bg-[#FFEC42] rounded-md shadow-md text-gray-700 xs:h-27 xs:w-32 xs:ml-2.5 xs:mr-2.5 xs:mb-11" />
        </div>
    </section>
</template>
<script>
import BotonContact from '@/components/Boton.vue';
export default{
    name: "SectionAboutMyTwitter",
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
    