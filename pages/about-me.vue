<template>
  <div class="mt-28 ">
    <Principles  :policy="PrinciplesData" class="h-9/12"/>
    <!-- <TimeLine /> -->
    <div class="w-1/2">
      <a class="twitter-timeline" href="https://twitter.com/JS_Morales?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
    </div>
  </div>
</template>

<script>
import PoliticalPrinciplesComponent from '@/components/PoliticalPrinciples/AppPoliticalSection.vue';
// import TimeLine from '@/components/TimeLine/TimeLineComponent.vue'
export default {
  name: "AboutMePage",
  components: { Principles:PoliticalPrinciplesComponent},
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
    }
  })
}
</script>
