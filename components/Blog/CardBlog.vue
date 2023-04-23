<template>
    <article class="flex flex-col p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-between">
        <div>
            <a  href="#">
            <img 
                class="mb-5 rounded-lg" :src="blog.image"
                alt="office laptop working">
            </a>
            <span
                class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
            Article
            </span>
        </div>
        <div class="flex flex-col justify-between">
            <h2 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-MadeSoulmaze line-clamp-2">
            <a href="#">{{ blog.title }}</a>
            </h2>
            <p class="mb-4 font-light text-gray-500 dark:text-gray-400 line-clamp-4">
                {{ blog.description }}
            </p>
        </div>
        
        <div class="flex items-center space-x-4">
            <img 
                class="w-10 h-10 rounded-full"
                :src="blog.imgProfile" 
                alt="Jese Leos avatar">
            <div class="font-medium dark:text-white">
                <div>{{ blog.autor }}</div>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ blog.date }}</div>
            </div>
        </div>
    </article>
</template>

<script>
export default{
    name: "CardBlog",
    props: {
        blog: {
            type: Object ,
            require:true
        }
    },
}
</script>