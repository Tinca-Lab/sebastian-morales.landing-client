<template>
    <div v-if="text" class="flex items-center space-x-4">
        <img class="w-10 h-10 rounded-full" :src="image" alt="Jese Leos avatar">
        <div class="font-medium dark:text-white">
            <div>{{ autor }}</div>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ date }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterBlog",
    props: {
        image: {
            type: String,
            require: true
        },
        autor: {
            type: String,
            require: true
        },
        date: {
            type: String,
            require: true
        },
        text: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        console.log(this.image);
    }
}
</script>