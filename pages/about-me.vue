<template>
  <div>
    <About-Me-Section :data="aboutMeData" :button="false"/>
    <h2 class="mb-4 xs:text-2xl md:text-4xl tracking-tight font-bold text-white lg:text-5xl text-center">{{timeLineData.title}}</h2>

    <TimeLine :metadata="timeLineData"/>
    <Principles  :policy="politicalPrinciples" />
    <div class="mx-auto w-full  2xl:w-[1440px] md:flex-row flex rounded-2xl h-20 bg-[#FFFFFF4D] sm:flex-col xs:flex-col sm:h-full xs:h-full" >
      <SectionAboutMyTwitter :metadata="sectionTwitterData"/>
      <div class="md:w-full md:h-full lg:w-full lg:h-full overflow-x-hidden">
          <a class="twitter-timeline" href="https://twitter.com/JS_Morales?ref_src=twsrc%5Etfw" data-aria-polite="assertive" data-chrome="nofooter" data-tweet-limit="5" data-height="500" >Tweets by TwitterDev</a>
      </div>
    </div>
  </div>
</template>

<script>
import PoliticalPrinciplesComponent from '@/components/PoliticalPrinciples/AppPoliticalSection.vue';
import AboutMeSection from '@/components/AboutMeSection/AppAboutMeSection.vue';
import TimeLine from '@/components/TimeLine/TimeLineComponent.vue';
import SectionAboutMyTwitter from '@/components/SectionAboutMyTwitter/AppSectionTwitter.vue';

export default {
  name: "AboutMePage",
  components: { Principles:PoliticalPrinciplesComponent, SectionAboutMyTwitter, TimeLine,AboutMeSection},
  layout: 'DefaultLayout',
  data:()=>({
    PrinciplesData:{
      'title':'PRINCIPIOS POLITICOS',
      'political':[
        {
          'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png',
          'subtitle':"Educación de calidad: Un derecho, no un privilegio.",
          'description':'La base fundamental para construir una sociedad justa y equitativa, donde todos tengan la oportunidad de desarrollar su potencial y alcanzar sus metas.'
        },
        {
          'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-2.png',
          'subtitle':"Salud, sinónimo de una vida digna.",
          'description':'Un sistema de salud que garantice el acceso justo y de calidad para todos, sin discriminación ni exclusión.'
        },
        {
          'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-3.png',
          'subtitle':"Enfoque social, una apuesta por el bienestar de Girón.",
          'description':'Una estrategia integral para construir una comunidad más justa, incluyente, solidaria y con igualdad de oportunidades para todos.'
        },
        {
          'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png',
          'subtitle':"Entornos seguros, el derecho de vivir sin miedo.",
          'description':'Un compromiso por la tranquilidad y  el bienestar de nuestra comunidad para una convivencia pacífica y el desarrollo social y económico de todos los Gironeses.'
        }
      ]
    },
    aboutMeData:{},
    timeLineData:{},
    politicalPrinciples:{},
    sectionTwitterData:{}
  }),
  computed: {
    about() {
      return this.$store.state.aboutMe;
    },

  },

  watch: {
    about() {
      this.aboutMeData = this.about.attributes.sections.data.filter(section => section.attributes.type === 'main')[0];
      this.timeLineData = this.about.attributes.sections.data.filter(section => section.attributes.type === 'history')[0];
      this.politicalPrinciples = this.about.attributes.sections.data.filter(section => section.attributes.type === 'featured')[0];
      this.politicalPrinciples = this.about.attributes.sections.data.filter(section => section.attributes.type === 'featured')[0];
      this.sectionTwitterData = this.about.attributes.sections.data.filter(section => section.attributes.type === 'twitter')[0];

      this.sectionTwitterData = this.sectionTwitterData.attributes;
      this.timeLineData = this.timeLineData.attributes;
      this.aboutMeData = this.aboutMeData.attributes;
      this.politicalPrinciples = this.politicalPrinciples?.attributes;


    }
  },
  // beforeMount() {
  //   // Recarga la página
  //   location.reload();
  // },
  async beforeCreate() {
    if (process.client)
      await this.$store.dispatch('fetchAboutMe');
  },
}
</script>
