<template>
    <article class="flex flex-col p-4  justify-between bg-white rounded-lg border border-gray-200 shadow-md">
        <HeaderBlog :image="`https://api.sebastianmorales.co${blog.attributes.image.data.attributes.url}`" :type=blog?.attributes?.type />
        <ArticleBlog :title="blog.attributes.title" :description="blog.attributes.description" />
        <FooterBlog
            :image="`https://api.sebastianmorales.co${blog.attributes.author.data.attributes.image.data.attributes.url}`"
            :autor="blog.attributes.author.data.attributes.name" :date="blog?.attributes?.createdAt" :text=true />
    </article>
</template>

<script>
import HeaderBlog from '@/components/Blog/CardBlogComponents/HeaderBlog.vue';
import ArticleBlog from '@/components/Blog/CardBlogComponents/ArticleBlog.vue';
import FooterBlog from '@/components/Blog/CardBlogComponents/FooterBlog.vue';

export default {
    name: "CardBlog",
    components: { HeaderBlog, ArticleBlog, FooterBlog },
    props: {
        blog: {
            type: Object,
            default: () => { return {} }
        },
    },
    computed: {
        type() {
            return this.blog.attributes.type;
        }
    },
}
</script>
