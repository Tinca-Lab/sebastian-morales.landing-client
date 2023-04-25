<template>
    <div>
        <a  href="#">
        <img 
            class="mb-5 rounded-lg" :src="image"
            alt="office laptop working">
        </a>
        <span 
            v-if="article"
            class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
            Article
        </span>
        </div>
</template>

<script>
export default{
    name:"HeaderBlog",
    props:{
        image:{
            type:String,
            require:true
        },
        article:{
            type:Boolean,
            default:false
        }
    }
}
</script>