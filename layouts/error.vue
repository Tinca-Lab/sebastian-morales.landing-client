<template>
  <div class="xs:w-full 2xl:w[1440px] mt-28">
    <div v-if="error.statusCode === 404" class="text-center m-auto">

      <figure class="flex justify-center items-center">
        <img src="@/assets/image/websiteCrash.png" alt="">
      </figure>
      <button class="bg-black text-[#FFF177] p-3 rounded-lg justify-center w-48 my-5"> 404 Not Found </button>
      <h2>Whoops! Esta página no existe.</h2>
      <div class="m-auto text-center w-48 my-5">
        <button class="flex bg-[#FFEC42] p-3 rounded-lg justify-center w-48">
          Volver al inicio
          <ArrowIcon :color="'black'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '@/components/Icons/ArrowIcon.vue'
// import BotonContact from '@/components/Boton.vue'
export default {
  components: {
    ArrowIcon
  },
  props: ['error'],
}
</script>
