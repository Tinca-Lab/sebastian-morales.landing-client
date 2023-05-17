<template>
    <div class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
      <section class="relative bg-[#85E2FF] xs:rounded-2xl md:rounded-3xl w-[100%] 2xl:w-[1440px] z-20 my-3">
        <div class="flex xs:flex-col md:flex-row flex-nowrap w-full">

          <div class="col-span-8 w-full md:w-[75%] mx-auto xs:px-4 xs:py-6 md:px-20 md:py-7">
            <h2
              class="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#003F52] mb-4 text-2xl font-bold tracking-wide leading-none text-left">
              {{metadata?.title}}
            </h2>
            <p class="mb-5 text-left text-gray-900 md:text-lg lg:text-xl font-Cabin">
                {{ metadata?.description }}
            </p>
            <!-- img for desktop -->
            <!-- {{ metadata?.Video?.data?.attributes?.url }} -->
            <div class="block h-full md:hidden">
              <video controls :src="'https://api.sebastianmorales.co'+metadata?.Video?.data?.attributes?.url"></video>
            </div>
            <div class=" sm:flex xs:flex-col">
              <h2
                class="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#374151] mb-3 text-2xl tracking-tight leading-none mt-4 pb-3 text-left"
              >
                Principios Politicos
              </h2>
              <div class="border-t-2 border-black md:flex md:flex-row gap-5">
                <div v-for="(principio,index) in Part1" :key="index" class="mb-8 md:w-[50%]">
                  <h2 class="my-3 text-left text-xl text-gray-900 font-Cabin font-extrabold">{{ principio.attributes.title }}</h2>
                  <p class="mb-2 font-light text-left font-Cabin">{{principio.attributes.description}}</p>
                </div>
              </div>
              <div class="border-t-2 border-black md:flex md:flex-row gap-5">
                <div v-for="(principio,index) in Part2" :key="index" class="mb-8 md:w-[50%]">
                  <h2 class="my-3 text-left text-xl text-gray-900 font-Cabin font-extrabold">{{ principio.attributes.title }}</h2>
                  <p class="mb-2 font-light text-left font-cabin">{{principio.attributes.description}}</p>
                </div>
              </div>
              <div>
                <a :href="metadata?.cta?.data.attributes.url">
                  <button class="flex flex-row justify-center items-center gap-2 my-8 px-5 py-3 w-40 h-12 active:bg-[#FFF7B2] active:border-[#FFEC42] active:border-4 hover:bg-[#FFF7B2] bg-[#FFEC42] rounded-md shadow-md text-black mx-auto md:mx-0">
                        <span class="text-lg font-medium">{{ metadata?.cta?.data.attributes.title }}</span>
                        <Arrow-Icon color="black"/>
                    </button>
                  </a>
              </div>
          </div>
        </div>
        <div class="xs:hidden md:block w-[35%] relative">
          <!-- <img
            class="w-full md:rounded-r-3xl"
            src="https://w0.peakpx.com/wallpaper/973/618/HD-wallpaper-paisaje-bonito-paisaje-thumbnail.jpg"
            alt="Conference speaker"> -->
            <video class="w-full 2xl:rounded-r-3xl" controls :src="'https://api.sebastianmorales.co'+metadata?.Video?.data?.attributes?.url"></video>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArrowIcon from '@/components/Icons/ArrowIcon.vue';

export default {
  name: "HeroIcon",
  components: {
    ArrowIcon
  },
  props:{
    metadata:{
      type: Object,
      default: () => {}
    }
  },

  computed:{
    Part1(){
      return this.metadata.pps?.data?.slice(0,2)
    },
    Part2(){
      return this.metadata.pps?.data?.slice(2)
    }
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
