<template>
    <div class=" mx-auto w-9/12 ">
        <carousel 
        class="w-full md:w-8/12 lg:w-9/12 mx-auto gap-2 h-1/2" 
        :per-page-custom="[[320, 1],[768, 3],[1199, 4]]" 
        :pagination-active-color="'#FFEC42'"
        :pagination-color="'#FFF'" :pagination-size="15">
            <slide v-for="( item, index ) in  political" :key="index" class=" px-2 h-1/2">
                <CardPrinciples :principles="item"/>
            </slide>        
        </carousel>
    </div>
</template>

<script>
import AppCardPrinciples from '@/components/PoliticalPrinciples/AppCardPrinciples.vue';

export default{
    name:"AppPrinciplesCarousel",
    components:{CardPrinciples:AppCardPrinciples },
    props:{
        political:{ 
            type: Array , 
            default:()=>[] 
        }
    }
}
</script>