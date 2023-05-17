<template>
    <div v-if="text" class="flex items-center space-x-4">
        <img class="w-10 h-10 rounded-full" :src="image" alt="Jese Leos avatar">
        <div class="font-medium dark:text-white">
            <div>{{ autor }}</div>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ formatDate(date) }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterBlog",
    props: {
        // eslint-disable-next-line vue/require-default-prop
        image: {
            type: String,
            require: true
        },
        // eslint-disable-next-line vue/require-default-prop
        autor: {
            type: String,
            require: true
        },
        // eslint-disable-next-line vue/require-default-prop
        date: {
            type: String,
            require: true
        },
        text: {
            type: Boolean,
            default: false
        }
    },
    methods: {
      formatDate(date) {
        const fecha = new Date(date);
        // Obtener el mes abreviado en el formato "MMM"
        const mesAbreviado = fecha.toLocaleString('default', { month: 'short' });
        // Obtener el día del mes sin ceros iniciales en el formato "D"
        const diaDelMes = fecha.getDate();
        // Obtener el año completo en el formato "YYYY"
        const anio = fecha.getFullYear();

        // Concatenar los valores en el formato deseado
        const fechaFormateada = mesAbreviado + '. ' + diaDelMes + ', ' + anio;

        return (fechaFormateada);
      },
    }
}
</script>
