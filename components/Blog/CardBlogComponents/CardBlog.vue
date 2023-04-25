<template>
    <article 
    class="flex flex-col p-4  justify-between bg-white rounded-lg border border-gray-200 shadow-md">
        <HeaderBlog 
        :image="blog.image" 
        :article=true />
        <ArticleBlog 
        :title="blog.title"
        :description="blog.description"
        />
        <FooterBlog
        :image="blog.imgProfile"
        :autor="blog.autor"
        :date="blog.date"
        :text=true
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
            default:()=>{return {}}
        },
    },
}
</script>