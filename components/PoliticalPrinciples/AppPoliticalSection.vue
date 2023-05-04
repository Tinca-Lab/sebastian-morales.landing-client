<template>
    <section class="bg-yellow-to-orange mx-auto rounded-2xl w-full 2xl:w-[1440px] ">
        <div class="px-4 mx-auto max-w-screen-xl xs:px-4 xs:py-6 lg:py-6 lg:px-6">
            <div class="text-center text-[#FF8B1F]">
                <h2 class="mb-4 xs:text-2xl md:text-4xl tracking-tight font-extrabold text-orangeTitle lg:text-5xl ">
                    {{ policy.title }}
                </h2>
            </div>
            <div class="gap gap-8 justify-items-center">
                <AppPrinciplesCarousel :political="policy.pps?.data" class="w-full "/>
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
