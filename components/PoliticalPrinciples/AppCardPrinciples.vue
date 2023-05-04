<template>
    <div class="flex flex-col h-full sm:w-9/12 xs:m-auto md:m-0 md:w-52 justify-evenly">
        <img class="xs:h-60 sm:h-64 md:h-60 w-full rounded-lg" :src="'https://api.sebastianmorales.co'+principles.attributes.Image?.data?.attributes?.url" alt="office image" />
        <div class="h-3/5 ">
            <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 ">
                {{ principles.attributes.title }}
            </h3>
            <p class="text-gray-700">
                {{ principles.attributes.description }}
            </p>
        </div>
    </div>
</template>
<script>
export default{
    name:"AppCardPrinciples",
    props:{
        principles:{
            type:Object,
            default(){return {}}
        }
    }
}
</script>
