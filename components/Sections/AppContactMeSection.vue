<template>
<section>
    <div class="mx-auto w-full 2xl:w-[1440px] md:flex-row flex rounded-3xl h-60 bg-yellow-to-orange xs:flex-col xs:h-full">
      <div class="md:w-2/3 flex-grow p-4 md:rounded-l-3xl self-center text-center xs:p-11 md:pt-16 md:pb-16 flex items-center justify-center">
          <div class="w-full max-w-screen-sm text-center sm:col-span-1 ">
            <h2 class="mb-4 md:text-5xl font-extrabold text-[#FF8B1F] tracking-wider dark:text-white tracking-2 xs:text-xl">Contáctame</h2>
            <p class="font-light text-gray-600 dark:text-gray-400 sm:text-xl">Tu opinión es clave para construir un Girón mejor. ¡Compártela conmigo y trabajemos juntos por el cambio!</p>
            <Boton-Contact :title=title :color="'white'" class="flex flex-row items-center justify-center mt-5 gap-2 w-44 h-12 active:bg-[#009FD0] active:border-[#0088B2] active:border-4 hover:bg-[#0088B2] bg-[#1EB5E4] rounded-md shadow-md text-white mx-auto xs:h-27 xs:w-132" />
          </div>
      </div>
      <div class="md:w-1/3 flex-shrink p-4 bg-[#FFF7B2] md:rounded-r-3xl md:rounded-bl-none xs:rounded-b-3xl xs:w-full xs:p-11">
        <div class="w-full h-full self-center text-center sm:col-span-1 flex flex-col justify-center">
          <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
            <WhatsApp-Icon :color="true"/>
          </div>
          <p class="mb-3 text-gray-500 dark:text-gray-400">Da click al botón para comunicarte conmigo de manera rápida y directa a través de WhatsApp.</p>
        </div>
      </div>
    </div>
</section>
</template>
<script>
import BotonContact from '@/components/Button/AppButton.vue';
import WhatsAppIcon from '@/components/Icons/WhatsAppIcon.vue';
export default{
  name: "ContactMe",
  components: {
    WhatsAppIcon,
    BotonContact
  },
  data() {
        return {
          title: "Ir a contacto"
        }
    },
}
</script>
