<template >
  <div>
    <Navbar-Component />
    <main>
      <Nuxt />
    </main>
    <Footer-Component />
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarFooter/NavbarComponent.vue';
import FooterComponent from '../components/NavbarFooter/FooterComponent.vue';

export default {
  name: "DefaultLayout",
  components: { NavbarComponent,FooterComponent }
}
</script>
