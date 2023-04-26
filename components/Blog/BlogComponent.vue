<template>
    <section class="bg-white dark:bg-gray-900 bg-gradient-to-r from-[#85E2FF] to-transparent">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6  ">
            <HeaderSection :title="header.title" :description="header.description" :welcome="header.welcome" />
            <div class="grid gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3  xs:hidden md:grid">
                <CardBlog v-for="(blog, index) in blogs" :key="index" :blog="blog" class="md:hidden lg:grid" />
                <!-- <CardBlog v-for="(info, index) in blogs.slice(0, 2)" :key="index" class="md:grid lg:hidden" :blog="info" /> -->
            </div>
            <div class="gap-8 justify-items-center md:hidden">
                <BlogCarrousel :blog="blogs"
                    class="xs:max-w-xs supersm:max-w-screen-supersm sm:max-w-screen-sm md:max-w-md border-2 border-transparent" />
            </div>
        </div>
    </section>
</template>
<script>
import HeaderSection from '@/components/Blog/Head.vue';
import CardBlog from '@/components/Blog/CardBlogComponents/CardBlog.vue';
import BlogCarrousel from '@/components/Blog/BlogCarrousel.vue';

export default {
    name: "BlogComponent",
    components: { CardBlog, BlogCarrousel, HeaderSection },
    props: {
        blogs: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            // blogs: [
            //     {
            //         "image": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png",
            //         "title": "Our first office",
            //         "description": "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            //         "imgProfile": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
            //         "autor": "Jese Leos",
            //         "date": "Aug 15, 2021 · 16 min read"
            //     },
            //     {
            //         "image": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png",
            //         "title": "We partnered up with Google",
            //         "description": "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            //         "imgProfile": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
            //         "autor": "Roberta Casas",
            //         "date": "Aug 10, 2021 · 6 min read"
            //     },
            //     {
            //         "image": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png",
            //         "title": "Our first project with React",
            //         "description": "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            //         "imgProfile": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
            //         "autor": "Sofia McGuire",
            //         "date": "Aug 1, 2021 · 23 min read"
            //     },
            //     {
            //         "image": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png",
            //         "title": "Our first project with React",
            //         "description": "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            //         "imgProfile": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
            //         "autor": "Sofia McGuire",
            //         "date": "Aug 1, 2021 · 23 min read"
            //     },
            // ],
            header:
            {
                "title": "Blog",
                "description": "Conoce las ideas, propuestas y pensamientos que impulsan mi vision para construir un futuro mejor juntos.",
                "welcome": "Bienvenid@ a mi espacio de reflexion y opinion"
            }
        }
    },
}

</script>


