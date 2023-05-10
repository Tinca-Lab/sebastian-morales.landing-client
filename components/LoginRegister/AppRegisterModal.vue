<template>
    <form class="bg-yellow-to-orange xs:w-full sm:w-6/12 supersm:w-8/12 md:w-6/12 lg:w-4/12 p-5 flex flex-col space-y-2 mx-auto rounded-xl ">
        <div class="flex justify-between items-center">
            <p class="text-center text-gray-700 font-Cabin ">¿Te gustaría estar al tanto de noticias y novedades en mi candidatura? Registrate para recibir la información más actualizada.</p>
        </div>
        <button class="bg-primary-600 w-full text-white rounded-md flex justify-center items-center p-2">
            <FacebookIcon class="mr-2"/>
            Iniciar con Facebook
        </button>
        <button class="bg-primary-600 w-full text-white rounded-md flex justify-center items-center p-2">
            <GoogleIcon class="mr-2"/> 
            Iniciar con Google
        </button>
        <div>
            <div class="flex flex-col justify-evenly">
                <label for="nombres" class="my-3">Nombres</label>
                <input id="nombres" type="nombres" name="nombres" placeholder="Escribe tu nombre" class="w-full rounded-lg p-2">
            </div>
            <div class="flex flex-col justify-evenly">
                <label for="apellidos" class="my-3">Apellidos</label>
                <input id="apellidos" type="apellidos" name="apellidos" placeholder="Escribe tu apellido" class="w-full rounded-lg p-2">
            </div>  
            <div class="flex flex-col justify-evenly">
                <label for="email" class="my-3">Email</label>
                <input id="email" type="email" name="email" placeholder="name@example.com" class="w-full rounded-lg p-2">
            </div> 
            <div class="flex flex-col justify-evenly">
                <label for="Phone" class="my-3">Phone number</label>
                <input id="Phone" type="Phone" name="Phone" placeholder="+(12) 345 6789" class="w-full rounded-lg p-2">
            </div> 
            <div class="flex flex-col justify-evenly">
                <label for="password" class="my-3">Contraseña</label>
                <input id="password" type="password" name="password" placeholder="**********" class="w-full rounded-lg p-2">
            </div>
            <div class="flex flex-col justify-evenly">
                <label for="confirmar" class="my-3">Confirmar Contraseña</label>
                <input id="confirmar" type="confirmar" name="confirmar" placeholder="**********" class="w-full rounded-lg p-2">
            </div>
        </div>
        <div class="w-full flex flex-row justify-start gap-2 mx-auto">
            <input type="checkbox" class="border-none border-0">
            <p class="text-GrayTermsPrivacy ">
                By submitting this form, you confirm that you have read and agree to Flowbite’s Terms of Service and Privacy Statement
            </p>
        </div>
        <div class="w-8/12 flex justify-evenly mx-auto">
            <button class="bg-primary-400 text-white p-2 rounded-lg sm:w-3/12 sm:text-sm md:text-base md:w-5/12 flex items-center justify-center">
                Registrarse 
                <ModalRegisterIcon class="ml-1"/>
            </button>
            <Button class="border border-solid border-black text-black rounded-lg px-4 py-2">Cerrar</Button>
        </div>
    </form>
</template>
<script>
import FacebookIcon from "@/components/Icons/FacebookIcon.vue"
import GoogleIcon from "@/components/Icons/GoogleIcon.vue"
import ModalRegisterIcon from "@/components/Icons/ModalRegisterIcon.vue"
export default{
    name:"RegisterModal",
    components:{FacebookIcon, GoogleIcon, ModalRegisterIcon}
}
</script>