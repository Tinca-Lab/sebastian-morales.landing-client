<template>
  <div class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
    <nav class="bg-[#0088B2] fixed mx-2.5 xs:rounded-2xl md:rounded-3xl w-[98%] 2xl:w-[1440px] z-50 mt-3 shadow-lg">
      <div class="flex flex-wrap items-center justify-between mx-auto xs:px-5 md:px-3 lg:px-5 py-2">
        <NuxtLink class="flex items-center pl-5" to="/">
          <Morales-Logo />
        </NuxtLink>
        <!-- data-collapse-toggle="navbar-dropdown"
        aria-controls="navbar-dropdown" -->
        <button
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          @click="openNavbar"
        >
          <!-- <span class="sr-only">Open main menu</span> -->
          <svg
            class="w-12 h-12 pr-3"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div id="navbar-dropdown" class="w-full md:block md:w-auto" :class="nav ? 'block':'hidden'">
          <ul
            class="flex flex-col font-medium bg-[#0088B2] text-lg md:flex-row md:py-5 lg:p-5 md:gap-3 lg:gap-5"
          >
          <li v-for="route in routes" :key="route.id" class="border-b-2 border-[#1DB5E4] py-2 md:border-none md:py-0 xs:text-left">
              <NuxtLink
                class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
                :to="route.attributes.link">{{ route.attributes.route }}</NuxtLink>
          </li>
          <li v-if="nav && !isAuthenticated" class="m-auto flex gap-2 py-4 md:py-0">
            <button
              type="button"
              class="flex active:bg-[#FFF7B2] active:border-[#FFEC42] hover:bg-[#FFF7B2] items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
            >
              Inciar session
              <Login-Icon />
            </button>
            <button
              type="button"
              class="flex active:bg-[#FFF7B2] active:border-[#FFEC42] hover:bg-[#FFF7B2] items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
            >
              Registrarse
              <RegisterIcon />
            </button>
          </li>
          </ul>
        </div>
        <div  class="lg:gap-5 md:gap-3 hidden md:flex md:w-auto md:mr-1 lg:mr-3 relative">
          <button
            type="button"
            class="active:bg-[#FFF7B2] active:border-[#FFEC42] hover:bg-[#FFF7B2] flex items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
            @click="openLogin"
          >
            Inciar sesión
            <Login-Icon />
          </button>
          <div
          class="fixed top-[-1px] "
          :class="LoginActive ? 'w-screen h-screen bg-black bg-opacity-50 transition-shadow ease-in-out duration-75 left-0 z-10':'bg-transparent'"
          @click="openLogin"
          >
          </div>
          <!-- Login form -->
          <form
            class="bg-yellow-to-orange w-3/12 p-5 flex flex-col space-y-2  rounded-xl right-28 top-24 z-50 animate-fade-in text-left"
            :class="LoginActive ? 'fixed animate-fade-in':'animate-fade-off hidden '"
            >
            <div class="flex justify-between items-center">
                <span>
                  Iniciar sesión
                </span>
                <Button
                class="border border-solid border-black text-black rounded-lg px-4 py-2" type="button"
                @click="openLogin"
                >
                  Cerrar
                </Button>
            </div>
            <!-- <button class="bg-primary-600 w-full text-white rounded-md flex justify-center items-center p-2">
                <Facebook-Icon class="mr-2"/>
                Iniciar con Facebook
            </button>
            <button class="bg-primary-600 w-full text-white rounded-md flex justify-center items-center p-2">
                <GoogleIcon class="mr-2"/>
                Iniciar con Google
            </button> -->
            <div class="flex flex-col justify-evenly">
                <label for="emailLogin" class="my-3">Email</label>
                <input id="emailLogin" type="email" name="email" placeholder="name@example.com" required class="w-full rounded-lg p-2">
            </div>
            <div class="flex flex-col justify-evenly">
                <label for="passwordLogin" class="my-3">Contraseña</label>
                <input id="passwordLogin" type="password" name="password" placeholder="**********" required class="w-full rounded-lg p-2">
            </div>
            <div class="w-full flex flex-row justify-center">
                <button
                  class="bg-primary-400 text-white p-2 rounded-lg sm:w-3/12 sm:text-sm md:text-sm md:w-5/12 flex items-center justify-center" type="submit"
                >
                    Iniciar Sesion
                    <Modal-Login-Icon class="ml-1"/>
                </button>
            </div>
            <div class="w-full flex justify-evenly">
                <span>¿No tienes cuenta?</span>
                <a class="underline underline-offset-2 text-primary-600 " href="#" @click="openRegister" >Registrate aqui</a>
            </div>
          </form>

          <button
            type="button"
            class="active:bg-[#FFF7B2] active:border-[#FFEC42] active:border hover:bg-[#FFF7B2] bg-[#FFEC42] flex items-center gap-2 text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            @click="openRegister"
            >
            Registrarse
            <RegisterIcon />
          </button>
          <div
          class="fixed top-[-1px]"
          :class="RegisterActive ? 'w-screen h-screen bg-black bg-opacity-50 transition-shadow ease-in-out duration-75 left-0 z-10 overflow-auto':'bg-transparent'"
          @click="openRegister"
          >
          </div>
          <!-- register form -->
          <form
            class="bg-yellow-to-orange w-3/12 p-5 flex flex-col space-y-2  overflow-auto h-[500px] rounded-xl right-28 top-24 z-50 animate-fade-in"
            :class="RegisterActive ? 'fixed animate-fade-in':'animate-fade-off hidden '"
            >
            <div class="flex justify-between items-center">
                <p class="text-center  text-gray-700 font-Cabin ">
                  ¿Te gustaría estar al tanto de noticias y novedades en mi candidatura? Registrate para recibir la información más actualizada.
                </p>
            </div>

            <div class=" text-left ">
              <div class="flex flex-col justify-evenly">
                    <label for="nombres" class="my-3">Nombre</label>
                    <input id="nombres" v-model="usernameRegister" type="nombres" name="nombres" placeholder="Escribe tu nombre" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="email" class="my-3">Email</label>
                  <input id="email" v-model="emailRegister" type="email" name="email" placeholder="name@example.com" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="password" class="my-3">Contraseña</label>
                  <input id="password" v-model="passwordRegister" type="password" name="password" placeholder="**********" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="celular" class="my-3">Celular</label>
                  <input id="celular" type="number" placeholder="3152687894" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="confirmar" class="my-3">Confirmar Contraseña</label>
                  <input id="confirmar" v-model="passwordRegister" type="password" name="confirmar" placeholder="**********" class="w-full rounded-lg p-2" required>
              </div>
              </div>
              <div class="w-full flex flex-row justify-start gap-2 mx-auto">
                  <input type="checkbox" class="border-none border-0">
                  <p class="text-GrayTermsPrivacy ">
                      By submitting this form, you confirm that you have read and agree to Flowbite’s Terms of Service and Privacy Statement
                  </p>
              </div>
              <div class="w-8/12 flex justify-evenly mx-auto">
                  <button
                    type="submit"
                    class="bg-primary-400 text-white p-2 rounded-lg sm:w-3/12 sm:text-sm md:text-xs md:w-5/12 flex items-center justify-center"
                    @click=userRegister()
                    >
                      Registrarse
                      <Modal-Register-Icon class="ml-1"/>
                  </button>
                  <Button
                  class="border border-solid border-black text-black rounded-lg px-4 py-2"
                  type="button"
                  @click ="openRegister"
                  >
                    Cerrar
                  </Button>
              </div>
          </form>
          <!-- <section
          class="bg-yellow-to-orange p-5 pb-28 flex flex-col space-y-1 rounded-xl h-screen overflow-y-auto z-50 right-0 md:mr-0 animate-fade-in" :class="RegisterActive ? 'absolute top-5':'hidden'">
            <div class="flex justify-between items-center">
                <p class="text-center  text-gray-700 font-Cabin ">
                  ¿Te gustaría estar al tanto de noticias y novedades en mi candidatura? Registrate para recibir la información más actualizada.
                </p>
            </div>

            <div class=" text-left ">
              <div class="flex flex-col justify-evenly">
                    <label for="nombres" class="my-3">Nombre</label>
                    <input id="nombres" v-model="usernameRegister" type="nombres" name="nombres" placeholder="Escribe tu nombre" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="email" class="my-3">Email</label>
                  <input id="email" v-model="emailRegister" type="email" name="email" placeholder="name@example.com" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="password" class="my-3">Contraseña</label>
                  <input id="password" v-model="passwordRegister" type="password" name="password" placeholder="**********" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="celular" class="my-3">Celular</label>
                  <input id="celular" type="number" placeholder="3152687894" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="confirmar" class="my-3">Confirmar Contraseña</label>
                  <input v-model="passwordRegister" id="confirmar" type="password" name="confirmar" placeholder="**********" class="w-full rounded-lg p-2" required>
              </div>
              </div>
              <div class="w-full flex flex-row justify-start gap-2 mx-auto">
                  <input type="checkbox" class="border-none border-0">
                  <p class="text-GrayTermsPrivacy ">
                      By submitting this form, you confirm that you have read and agree to Flowbite’s Terms of Service and Privacy Statement
                  </p>
              </div>
              <div class="w-8/12 flex justify-evenly mx-auto">
                  <button
                    type="submit"
                    class="bg-primary-400 text-white p-2 rounded-lg sm:w-3/12 sm:text-sm md:text-xs md:w-5/12 flex items-center justify-center"
                    @click=userRegister()
                    >
                      Registrarse
                      <Modal-Register-Icon class="ml-1"/>
                  </button>
                  <Button
                  class="border border-solid border-black text-black rounded-lg px-4 py-2"
                  type="button"
                  @click ="openRegister"
                  >
                    Cerrar
                  </Button>
              </div>
          </section> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MoralesLogo from '@/components/Icons/MoralesLogo.vue';
import LoginIcon from '@/components/Icons/LoginIcon.vue';
import RegisterIcon from '@/components/Icons/RegisterIcon.vue';
import ModalLoginIcon from '@/components/Icons/ModalLoginIcon.vue';
import ModalRegisterIcon from '@/components/Icons/ModalRegisterIcon.vue';
// import FacebookIcon from '@/components/Icons/FacebookIcon.vue';
// import GoogleIcon from '@/components/Icons/GoogleIcon.vue';

export default {
  name: 'NavbarComponent',
  components: { MoralesLogo, LoginIcon, RegisterIcon ,ModalLoginIcon ,ModalRegisterIcon,
    // FacebookIcon,GoogleIcon
  },
  data: () => ({
    nav: false,
    routes: [],
    // LoginActive:false,
    // RegisterActive:false,
    usernameRegister: '',
    emailRegister: '',
    passwordRegister: '',
  }),
  computed:{
    LoginActive() {
      return this.$store.state.statusModalLogin
    },
    RegisterActive() {
      return this.$store.state.statusModalRegister
    }
  },
  async mounted() {
    const { data } = await this.$axios.$get('/api/navbars')
    this.routes = data;
  },
  methods: {
    openNavbar() {
      this.nav = !this.nav;
    },
    // async openLogin() {
    //   await this.$store.dispatch('changeStatusModalLogin');
    //   await this.$store.dispatch('changeStatusModalRegister', false);
    // },
    // async openRegister() {
    //   await this.$store.dispatch('changeStatusModalRegister')
    //   await this.$store.dispatch('changeStatusModalLogin', false)
    // },
    openLogin() {
      this.$store.dispatch('changeStatusModalLogin', !this.LoginActive);
      this.$store.dispatch('changeStatusModalRegister', false);
      // this.LoginActive = !this.LoginActive;
      // this.RegisterActive = false
    },
    openRegister() {
      this.$store.dispatch('changeStatusModalRegister', !this.RegisterActive)
      this.$store.dispatch('changeStatusModalLogin', false)
      // this.RegisterActive = !this.RegisterActive
      // this.LoginActive = false
    },
    async userRegister() {
      try {
        this.$axios.setToken(false)
        await this.$axios.post('auth/local/register', {
          username: this.usernameRegister,
          email: this.emailRegister,
          password: this.passwordRegister,
        })
        this.success = true
      } catch (e) {
        if (e.response) this.err = e.response.data
      }
    },
  }
};
</script>

<style scoped>
a.nuxt-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #FFF177;
  text-underline-offset: 0.25rem;
  text-decoration-thickness: 1.5px;
  color: #FFF177;
}
::-webkit-scrollbar {
  width: 3px; /* Ancho de la barra de desplazamiento */
}

/* Estilo para la pista de la barra de desplazamiento */
::-webkit-scrollbar-track {
  background-color: transparent; /* Color de fondo de la pista */
  border-radius: 1.5rem; /* Redondeo de la pista */
}

/* Estilo para la barra de desplazamiento */
::-webkit-scrollbar-thumb {
  background-color: #E5B331; /* Color de la barra de desplazamiento */
  border-radius: 1.5rem; /* Redondeo de la barra de desplazamiento */
}
</style>
