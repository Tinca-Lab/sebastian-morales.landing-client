<template>
    <section class="bg-yellow-to-orange mx-auto rounded-2xl">
        <div class="px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
            <div class="text-center text-gray-900">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-orangeTitle lg:text-5xl ">
                    {{ policy.title }}
                </h2>   
            </div>
            <div class="gap gap-8 justify-items-center">
                <AppPrinciplesCarousel :political="policy.political" class="w-full "/>
            </div>
        </div>
    </section>
</template>

<script>
import AppPrinciplesCarousel from '@/components/PoliticalPrinciples/AppPrinciplesCarousel.vue';

export default{
    name: 'AppPoliticalPrinciples',
    components: {AppPrinciplesCarousel},
    props:{
        policy:{
            type:Object,
            default:()=>{return {}}
        }
    }
}
</script>