<template>
    <article class="flex flex-col p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-between">
        <HeaderBlog :image="blog.image"/>
        <ArticleBlog 
        :title="blog.title"
        :description="blog.description"
        />
        <FooterBlog
        :image="blog.imgProfile"
        :autor="blog.autor"
        :date="blog.date"
        />
    </article>
</template>

<script>
import HeaderBlog from './HeaderBlog.vue';
import ArticleBlog from './ArticleBlog.vue';
import FooterBlog from './FooterBlog.vue';

export default{
    name: "CardBlog",
    components:{HeaderBlog,ArticleBlog,FooterBlog},
    props: {
        blog: {
            type: Object ,
            require:true
        }
    },
}
</script>