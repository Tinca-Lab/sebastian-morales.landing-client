<template>
  <div class="mt-28">
    <!-- <TimeLine /> -->
    <div class="mx-auto w-full  2xl:w-[1440px] md:flex-row flex rounded-2xl h-20 bg-[#FFFFFF4D] sm:flex-col xs:flex-col sm:h-full xs:h-full" >
      <SectionAboutMyTwitter/>
      <div class="md:w-full md:h-full lg:w-full lg:h-full">
          <a class="twitter-timeline" href="https://twitter.com/JS_Morales?ref_src=twsrc%5Etfw" data-aria-polite="assertive" data-chrome=nofooter data-tweet-limit="1">Tweets by TwitterDev</a>
      </div>
    </div>
  </div>
</template>

<script>
// import TimeLine from '@/components/TimeLine/TimeLineComponent.vue'
import SectionAboutMyTwitter from '@/components/SectionAboutMyTwitter/AppSectionTwitter.vue'
export default {
  name: "AboutMePage",
  components: {
    SectionAboutMyTwitter
  },
  // components: { TimeLine},
  layout: 'DefaultLayout',
}
</script>
