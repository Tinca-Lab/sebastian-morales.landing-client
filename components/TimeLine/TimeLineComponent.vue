<template>
<section class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
    <div class="bg-[#85E2FF] rounded-3xl w-full 2xl:w-[1440px] z-20">
      <div class="max-w-screen-xl flex flex-col md:gap-10 md:flex-row xs:items-center xs:px-4 xs:py-6 md:items-left mx-auto md:px-28	md:py-10">

        <ol class="relative border-l border-[#FFF7B2] xs:w-full md:w-[50%] ">
            <li v-for="(history,index) in Part1" :key="index" class="mb-10 flex flex-col items-start ml-4">
              <div class="absolute w-3 h-3 bg-[#FFF7B2] rounded-full mt-1.5 -left-1.5 border border-[#FFF7B2]"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-700">{{history.attributes.date}}</time>
              <h3 class="text-lg font-semibold text-gray-900">{{history.attributes.title}}</h3>
              <p class="mb-4 text-base font-normal text-gray-700">{{history.attributes.description}}</p>
            </li>
            <!-- <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>
            <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
            </li>
            <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
            </li> -->
        </ol>
          <!-- {{ Part1 }} -->
        <ol class="relative border-l border-[#FFF7B2] xs:w-full md:w-[50%]">
          <li v-for="(history,index) in Part2" :key="index" class="mb-10 ml-4 flex flex-col items-start">
              <div class="absolute w-3 h-3 bg-[#FFF7B2] rounded-full mt-1.5 -left-1.5 border border-[#FFF7B2]"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-700">{{history.attributes.date}}</time>
              <h3 class="text-lg font-semibold text-gray-900">{{history.attributes.title}}</h3>
              <p class="mb-4 text-base font-normal text-gray-700">{{history.attributes.description}}</p>
            </li>
        </ol>

      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "TimeLineComponent",
    components: {},
    scrollToTop: true,
    props:{
      metadata:{
        type:Object,
        default:()=>({})
      }
    },
    computed:{
      Part1(){
        return this.metadata?.histories?.data.slice(0,5)
      },
      Part2(){
        return this.metadata?.histories?.data.slice(5)
      }
    },
}
</script>
