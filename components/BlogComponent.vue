<template>
    <section class="bg-white dark:bg-gray-900 bg-gradient-to-r from-[#85E2FF] to-transparent">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 ">
                <h2 
                class="mb-4 text-5xl tracking-tight font-extrabold text-[#003F52] dark:text-white"
                :class="{'font-Inter':isMobile}">
                Blog</h2>
                <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Conoce las ideas, propuestas y pensamientos que impulsan mi vision para construir un futuro mejor juntos.<br>
                Bienvenid@ a mi espacio de reflexion y opinion
                </p>
            </div>
            <div class="grid gap-8 justify-items-center border-solid sm:grid-cols-2 lg:grid-cols-3 ">
                <CardBlog  v-for="info in blogs" :key="info.id" :blog="info" />
            </div>
        </div>
    </section>
</template>
<script>
import CardBlog from './CardBlog.vue';


export default {
    name: "BlogComponent",
    components: { CardBlog  },
    data() {
        return {
            isMobile: false,
            blogs: [
                    {
                        "image": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png",
                        "title": "Our first office",
                        "description": "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
                        "imgProfile":"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
                        "autor":"Jese Leos",
                        "date":"Aug 15, 2021 · 16 min read"
                    },
                    {
                        "image": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png",
                        "title": "We partnered up with Google",
                        "description": "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
                        "imgProfile":"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
                        "autor":"Roberta Casas",
                        "date":"Aug 10, 2021 · 6 min read"
                    },
                    {
                        "image": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png",
                        "title": "Our first project with React",
                        "description": "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
                        "imgProfile":"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
                        "autor":"Sofia McGuire",
                        "date":"Aug 1, 2021 · 23 min read"
                    }
                ]
        }
    },
    mounted() {
        if (window.innerWidth < 640) {
            this.isMobile = true
        }
    }

}
</script>


