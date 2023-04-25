<template>
    <div class="flex flex-col justify-between h-full">
        <h2 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-MadeSoulmaze line-clamp-2">
            <a href="#">
                {{ title }}
            </a>
        </h2>
        <p class="mb-4 font-light text-gray-500 dark:text-gray-400 line-clamp-4">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default{
    name:"ArticleBlog",
    props:{
        title:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        }
    }
}
</script>