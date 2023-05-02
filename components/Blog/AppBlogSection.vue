<template>
    <section class="bg-white dark:bg-gray-900 bg-gradient-to-r from-[#85E2FF] to-transparent">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6  ">
            <HeaderSection :title="metadata.attributes?.title" :description="metadata.attributes?.description" />
            <div class="gap-8 justify-items-center">
                <BlogCarrousel :blogs="blogs" class="w-full border-2 border-transparent" />
            </div>
        </div>
    </section>
</template>
<script>
import HeaderSection from '@/components/Blog/Head.vue';
import BlogCarrousel from '@/components/Blog/BlogCarrousel.vue';

export default {
    name: "BlogComponent",
    components: { BlogCarrousel, HeaderSection },
    props: {
        metadata: {
            type: Object,
            default: () => ({
                title: "",
                description: "",
            })
        },
        blogs: {
            type: Array,
            default: () => []
        }
    },
}

</script>


