<template>
  <section class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
    <div class="bg-[#0088B2] rounded-3xl w-full 2xl:w-[1440px] z-20">
      <div class="max-w-screen-xl flex flex-wrap items-center flex-col mx-auto p-4 gap-5">
        <FooterIcon />
        <div class="w-[260px] md:w-[440px] block m-auto">
          <ul class="flex flex-col xs:w-[260px] md:w-[440px] font-medium md:flex-row xs-p-0 md:p-4 gap-5">
            <li class="w-[260px] xs1:w-full">
              <NuxtLink
                class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
                to="/">Inicio</NuxtLink>
            </li>
            <li class="w-[275px] xs1:w-full">
              <NuxtLink
                class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
                to="/aboutMe">Acerca de mi</NuxtLink>
            </li>
            <li class="w-[275px] xs1:w-full">
              <NuxtLink
                class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
                to="/blogs">Blogs</NuxtLink>
            </li>
            <li class="w-[275px] xs1:w-full">
              <NuxtLink
                class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
                to="/contact">Contacto</NuxtLink>
            </li>
          </ul>
        </div>
        <p class="text-white">
          © 2023 Sebastián Morales. Todos los derechos reservados
        </p>
        <div class="flex text-white items-center m-auto w-44 mb-3">
          <p class="pt-4">Desarrollado por &nbsp;</p>
          <p>
            <a href="https://www.tincalab.com/">
              <TincaIcon />
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FooterIcon from '@/components/Icons/FooterIcon.vue'
import TincaIcon from '@/components/Icons/TincaIcon.vue'

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
  text-decoration-color: #fff177;
  text-underline-offset: 0.25rem;
  text-decoration-thickness: 1.5px;
  color: #fff177;
}
</style>
