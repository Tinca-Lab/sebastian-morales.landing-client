<template>
    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 ">
        <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-[#003F52] dark:text-white"
            :class="{ 'font-Inter': isMobile }">
            {{ title }}
        </h2>
        <p v-if="description.length > 0" class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default {
    name: "HeaderSection",
    props: {
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },
    },
    data() {
        return {
            isMobile: false,
        }
    },
    mounted() {
        if (window.innerWidth < 640) {
            this.isMobile = true
        }
    }
}
</script>