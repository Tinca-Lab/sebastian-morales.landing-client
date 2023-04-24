<template>
  <!-- <section class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
      <div class="bg-[#0088B2] rounded-3xl w-[98%] 2xl:w-[1440px] z-20 my-3">
      <div class="max-w-screen-xl flex flex-wrap items-center flex-col mx-auto p-4"> -->

    <div class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
      <section class="relative bg-[#85E2FF] xs:rounded-2xl md:rounded-3xl w-[98%] 2xl:w-[1440px] z-20 my-3">
        <div class="flex xs:flex-col md:flex-row flex-nowrap w-full">

          <div class="col-span-8 w-full md:w-[75%] mx-auto xs:px-5 xs:py-3 md:px-20 md:py-7">
            <h2
              class="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#003F52] mb-4 text-2xl font-bold tracking-wide leading-none mt-5 text-left">
              La alternativa joven y de cambio que necesita la alcaldía Girón
            </h2>
            <p class="mb-5 text-left text-gray-900 md:text-lg lg:text-xl">Here at Flowbite we
              focus on markets where technology, innovation, and capital can unlock long-term value and drive economic
              growth.</p>
            <!-- img for desktop -->
            <div class="block h-full md:hidden">
              <img
              class="object-cover w-full h-full rounded-2xl"
              src="https://w0.peakpx.com/wallpaper/973/618/HD-wallpaper-paisaje-bonito-paisaje-thumbnail.jpg"
              alt="Conference speaker">
            </div>
            <div class=" sm:flex xs:flex-col">
              <h2
                class="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#374151] mb-3 text-2xl tracking-tight leading-none mt-4 pb-3 text-left"
              >
                Principios Politicos
              </h2>
              <div class="border-t-2 border-black md:flex md:flex-row gap-5">
                <div class="mb-8 md:w-[50%]">
                  <h2 class="my-3 text-left text-xl text-gray-900 font-Inter font-black">Fourth quarter 2021</h2>
                  <p class="mb-2 font-light text-left">Join us at FlowBite 2021 to understand what’s next as the global tech and startup</p>
                </div>
                <div class="mb-8 md:w-[50%]">
                  <h2 class="my-3 text-left text-xl text-gray-900 font-Inter font-black">Fourth quarter 2021</h2>
                  <p class="mb-2 font-light text-left">Join us at FlowBite 2021 to understand what’s next as the global tech and startup</p>
                </div>
              </div>
              <div class="border-t-2 border-black md:flex md:flex-row gap-5">
                <div class="mb-8 md:w-[50%]">
                  <h2 class="my-3 text-left text-xl text-gray-900 font-Inter font-black">Fourth quarter 2021</h2>
                  <p class="mb-2 font-light text-left">Join us at FlowBite 2021 to understand what’s next as the global tech and startup</p>
                </div>
                <div class="mb-8 md:w-[50%]">
                  <h2 class="my-3 text-left text-xl text-gray-900 font-Inter font-black">Fourth quarter 2021</h2>
                  <p class="mb-2 font-light text-left">Join us at FlowBite 2021 to understand what’s next as the global tech and startup</p>
                </div>
              </div>
              <div>
                <button class="flex flex-row justify-center items-center gap-2 px-5 py-3 w-36 h-12 bg-[#FFEC42] rounded-md shadow-md text-black mx-auto md:mx-0">
                      <span class="text-lg font-medium">Leer más</span>
                      <Arrow-Icon color="black"/>
                  </button>
              </div>
          </div>
          </div>
          <div class="xs:hidden md:block w-[35%] relative">
            <img
            class="w-full md:rounded-r-3xl"
            src="https://w0.peakpx.com/wallpaper/973/618/HD-wallpaper-paisaje-bonito-paisaje-thumbnail.jpg"
            alt="Conference speaker">
          </div>
      </div>
    </section>
    </div>


</template>

<script>
import ArrowIcon from '../Icons/ArrowIcon.vue';

export default {
  name: "HeroIcon",
  components: {
    ArrowIcon
  },
}
</script>

<style>
hr {
  margin: 20px 0;
  width: 100%;
  border: none;
  border-top: 1px solid black;
}
</style>
