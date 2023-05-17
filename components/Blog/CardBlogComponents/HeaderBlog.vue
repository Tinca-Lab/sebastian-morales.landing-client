<template>
    <div>
        <img class="mb-5 rounded-lg w-full h-[180px] overflow-y-auto" :src="image" alt="office laptop working">
        <span
            :class="[type === 'Article' ? 'bg-purple-100 text-purple-800' :
                type === 'News' ? 'dark:text-yellow-900 bg-yellow-100 text-yellow-800' : '']"
            class=" text-xs font-semibold mr-2 px-2.5 py-0.5 rounded uppercase">
            {{ type }}
        </span>
    </div>
</template>

<script>
export default {
    name: "HeaderBlog",
    props: {
        image: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ''
        }
    }
}
</script>
