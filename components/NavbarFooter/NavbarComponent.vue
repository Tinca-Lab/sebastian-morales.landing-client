<template>
  <div class="text-center flex flex-col gap-0 items-center 2xl:w-[1440px] m-auto">
    <nav class="bg-[#0088B2] fixed xs:rounded-2xl md:rounded-3xl w-[98%] 2xl:w-[1440px] z-50 mt-3 shadow-lg">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center pl-5">
          <Morales-Logo />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          @click="openNavbar"
        >
          <!-- <span class="sr-only">Open main menu</span> -->
          <svg class="w-12 h-12 pr-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="white" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>

        <div id="navbar-dropdown" class="hidden w-full md:block md:w-auto">
          <ul
            class="flex flex-col font-medium bg-[#0088B2] rounded-b-3xl md:flex-row md:py-5 lg:p-5 gap-5"
          >
            <li>
                <NuxtLink class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0" to="/">Inicio</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0" to="/aboutMe">Acerca de mi</NuxtLink>
            </li>
            <li>
                <NuxtLink class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0" to="/blogs">Blogs</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0" to="/contact">Contacto</NuxtLink>
            </li>
            <li v-if="!nav" class="m-auto flex gap-2">
              <button
                type="button"
                class="flex items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                Inciar session
                <Login-Icon />
              </button>
              <button
                type="button"
                class="flex items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                Registrarse
                <RegisterIcon />
              </button>
            </li>
          </ul>
        </div>

        <div  class="lg:gap-5 md:gap-3 hidden md:flex md:w-auto md:mr-1 lg:mr-3 ">
          <button
            type="button"
            class="hover:bg-[#FFF7B2] flex items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Inciar session
            <Login-Icon />
          </button>
          <button
            type="button"
            class="hover:bg-[#FFF7B2] flex items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Registrarse
            <RegisterIcon />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MoralesLogo from '@/components/Icons/MoralesLogo.vue';
import LoginIcon from '@/components/Icons/LoginIcon.vue';
import RegisterIcon from '@/components/Icons/RegisterIcon.vue';

export default {
  name: 'NavbarComponent',
  components: {
    MoralesLogo, LoginIcon, RegisterIcon
  },
  data: () => ({
    nav: true
  }),
  methods: {
    openNavbar() {
      document.querySelector('#navbar-dropdown').classList.toggle('hidden');
      this.nav = !this.nav;
    }
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
</style>
