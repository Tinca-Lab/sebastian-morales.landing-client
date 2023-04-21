<template>
  <section class="text-center flex flex-col gap-0 items-center w-[98%] w-full 2xl:w-[1440px] m-auto">
    <div class="fixed mx-auto bottom-5 py-5 bg-[#0088B2] text-center flex flex-col gap-0 pt-8 items-center w-full 2xl:w-[1440px] m-auto rounded-3xl">
      <FooterIcon/>
      <div class=" w-[335px] block m-auto">
        <ul
          class="flex flex-col font-medium md:flex-row p-5 gap-5"
        >
          <li>
            <!-- <a
              href="/"
              class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
              aria-current="page">Inicio</a> -->
              <NuxtLink class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0" to="/">Inicio</NuxtLink>
          </li>
          <li>
            <!-- <a
              href="/aboutMe"
              class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
            >
              Acerca de mi
            </a> -->
            <NuxtLink class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0" to="/aboutMe">Acerca de mi</NuxtLink>
          </li>
          <li>
            <!-- <a
              href="/blogs"
              class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
              >
                Blogs
              </a> -->
              <NuxtLink class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0" to="/blogs">Blogs</NuxtLink>
          </li>
          <li>
            <!-- <a
              href="/contact"
              class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
            >
              Contacto
            </a> -->
            <NuxtLink class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0" to="/contact">Contacto</NuxtLink>
          </li>
        </ul>
      </div>
      <p class="text-white">
        © 2023 Sebastián Morales. Todos los derechos reservados
      </p>
      <div class="flex text-white items-center m-auto w-44">
        <p class="pt-4">
          Desarrollado por &nbsp;
        </p>
        <p>
          <a href="https://www.tincalab.com/">
            <TincaIcon />
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import FooterIcon from '../Icons/FooterIcon.vue';
import TincaIcon from '../Icons/TincaIcon.vue';

export default {
  name: 'FooterComponent',
  components: {
    FooterIcon,
    TincaIcon,
  },
}
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
