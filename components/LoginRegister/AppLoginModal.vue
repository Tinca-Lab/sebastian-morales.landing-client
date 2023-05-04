<template>
    <form class="bg-yellow-to-orange xs:w-full sm:w-6/12 supersm:w-8/12 md:w-6/12 lg:w-4/12 p-5 flex flex-col space-y-2 mx-auto rounded-xl ">
        <div class="flex justify-between items-center">
            <span>Iniciar sesión</span>
            <Button class="border border-solid border-black text-black rounded-lg px-4 py-2">Cerrar</Button>
        </div>
        <button class="bg-primary-600 w-full text-white rounded-md flex justify-center items-center p-2">
            <FacebookIcon class="mr-2"/>
            Iniciar con Facebook
        </button>
        <button class="bg-primary-600 w-full text-white rounded-md flex justify-center items-center p-2">
            <GoogleIcon class="mr-2"/> 
            Iniciar con Google
        </button>
        <div class="flex flex-col justify-evenly">
            <label for="email" class="my-3">Email</label>
            <input id="email" type="email" name="email" placeholder="name@example.com" class="w-full rounded-lg p-2">
        </div>  
        <div class="flex flex-col justify-evenly">
            <label for="password" class="my-3">Contraseña</label>
            <input id="password" type="password" name="password" placeholder="**********" class="w-full rounded-lg p-2">
        </div>
        <div class="w-full flex flex-row justify-center">
            <button class="bg-primary-400 text-white p-2 rounded-lg sm:w-3/12 sm:text-sm md:text-base md:w-5/12 flex items-center justify-center" type="submit">
                Iniciar Sesion 
                <ModalLoginIcon class="ml-1"/>
            </button>
        </div>
        <div class="w-full flex justify-evenly">
            <span>¿No tienes cuenta?</span>
            <a class="underline underline-offset-2 text-primary-600 " href="#">Registrate aqui</a>
        </div>
    </form>
</template>
<script>
import FacebookIcon from "@/components/Icons/FacebookIcon.vue"
import GoogleIcon from "@/components/Icons/GoogleIcon.vue"
import ModalLoginIcon from "@/components/Icons/ModalLoginIcon.vue"
export default{
    name:"RegisterModal",
    components:{FacebookIcon, GoogleIcon, ModalLoginIcon}
}
</script>