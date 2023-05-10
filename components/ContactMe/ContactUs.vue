<template>
  <div class="xs:w-full 2xl:w-[1440px] mx-auto">
    <section class="bg-blue-light-to-opacity xs:rounded-2xl md:rounded-3xl">
      <div class="bg-yellow-to-orange xs:rounded-2xl md:rounded-3xl">
          <div class="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{{contactMeData.title}}</h2>
              <p class="mb-16 font-light text-gray-900 sm:text-xl">{{ contactMeData.description }}</p>
          </div>
      </div>
      <div class="py-14 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6 ">
          <form action="#" class="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 sm:grid-cols-2">
              <div>
                  <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                  <input id="first-name" v-model="name" type="text" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Bonnie" required>
                  <p v-if="!name" class="text-red-500 font-semibold text-xs my-3">* Este campo es requerido</p>
              </div>
              <div>
                  <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
                  <input id="last-name" v-model="lastName" type="text" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Green" required>
              </div>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input id="email" v-model="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Ingresa un correo electrónico válido"  type="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@tinca.com" required>
                  <p v-if="!email" class="text-red-500 font-semibold text-xs my-3">* Este campo es requerido</p>
                  <p v-if="email && !emailValue" class="text-red-500 font-semibold text-xs my-3">* Escribe un correo valido</p>
                  {{ emailValue }}
              </div>
              <div>
                  <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900">Numero de Telefono</label>
                  <input id="phone-number" v-model="cellphone" type="number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="311 678 69 85" required>
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Tu mensaje</label>
                  <textarea id="message" v-model="information" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Deja un comentario..."></textarea>
                  <p class="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
              </div>
              <div>
                <button :disabled="!buttonActive" type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#1EB5E4] sm:w-fit hover:bg-[#0088B2] focus:ring-4 focus:outline-none focus:ring-primary-300" @click="submit" >{{contactMeData.cta?.data?.attributes.title}}</button>
              </div>
          </form>
          <div class="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <a class="flex flex-col items-center justify-center" href="https://twitter.com/JS_Morales/" target="_blank">
                  <div class="flex justify-center items-center mx-auto mb-4 h-16 bg-gray-100 rounded-lg w-16">
                      <svg width="38" height="38" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1597 0.794067C20.3672 1.26895 18.7772 1.91615 17.8425 2.10282C17.8151 2.11 17.7927 2.11923 17.7663 2.12641C16.9404 1.30383 15.8086 0.794067 14.5559 0.794067C12.0312 0.794067 9.98403 2.86079 9.98403 5.40959C9.98403 5.54395 9.97285 5.79114 9.98403 5.92242C6.57749 5.92242 3.98475 4.12134 2.12553 1.81974C1.92335 2.33257 1.83496 3.14285 1.83496 3.9039C1.83496 5.34087 2.94745 6.75219 4.67967 7.62709C4.36066 7.71017 4.00913 7.76966 3.64338 7.76966C3.05311 7.76966 2.42829 7.61273 1.8563 7.13682C1.8563 7.15425 1.8563 7.17067 1.8563 7.18913C1.8563 9.19739 3.96748 10.5646 5.84498 10.9451C5.464 11.1718 4.69592 11.1944 4.32103 11.1944C4.05688 11.1944 3.12219 11.0723 2.87226 11.0251C3.39447 12.6713 5.27807 13.5965 7.07329 13.6293C5.66922 14.7411 4.69491 15.1535 1.81972 15.1535H0.840332C2.65688 16.3289 4.97024 17.2058 7.28867 17.2058C14.8373 17.2058 19.1277 11.3975 19.1277 5.92242C19.1277 5.83422 19.1257 5.64959 19.1226 5.46395C19.1226 5.44549 19.1277 5.42805 19.1277 5.40959C19.1277 5.38189 19.1196 5.35523 19.1196 5.32753C19.1166 5.18804 19.1135 5.05778 19.1105 4.99009C19.9131 4.40546 20.609 3.6762 21.1597 2.84541C20.4231 3.17568 19.6327 3.39722 18.8026 3.49774C19.6499 2.9849 20.8539 1.7623 21.1597 0.794067ZM17.0958 5.92242C17.0958 10.1072 14.0916 14.537 8.49462 15.095C9.25253 14.5524 9.98403 13.7821 9.98403 13.7821C9.98403 13.7821 6.93613 11.0518 6.70754 7.48452C7.75906 7.80863 8.85427 7.97377 9.98403 7.97377H12.016V5.40959C12.018 3.99416 13.1538 2.84644 14.5559 2.84644C15.9589 2.84644 17.0958 3.99416 17.0958 5.41061C17.0958 5.41061 17.0958 5.84139 17.0958 5.92242Z" fill="#1EB5E4"/>
                      </svg>
                    </div>
                  </a>
                  <p class="mb-2 text-xl font-bold">Sígueme en twitter.</p>
                  <p class="mb-3 text-gray-500 ">Mantengámonos informados y al día en la conversación por Girón.</p>
                  <!-- <a href="mailto:abc@example.com" class="font-semibold text-primary-600 hover:underline">hello@flowbite.com</a> -->
              </div>
              <div>
                  <a href="https://api.whatsapp.com/send/?phone=573014453430">
                    <div class="flex justify-center items-center mx-auto mb-4 h-16 bg-gray-100 rounded-lg w-16">
                      <WhatsAppIcon />
                    </div>
                  </a>
                  <p class="mb-2 text-xl font-bold">Habla conmigo:</p>
                  <p class="mb-3 text-gray-500">Compárteme tus opiniones e ideas de manera directa. ¡Son importantes! </p>
                  <!-- <span class="font-semibold text-primary-600 ">+1 (646) 786-5060</span> -->
              </div>
              <div>
                  <a class="flex flex-col items-center justify-center" href="https://www.instagram.com/moralesebastian/" target="_blank">
                    <div class="flex justify-center items-center mx-auto mb-4 h-16 bg-gray-100 rounded-lg w-16">
                      <svg width="38" height="38" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.83191 0.621826C2.95907 0.621826 0.621826 2.95907 0.621826 5.83191V14.168C0.621826 17.0409 2.95907 19.3781 5.83191 19.3781H14.168C17.0409 19.3781 19.3781 17.0409 19.3781 14.168V5.83191C19.3781 2.95907 17.0409 0.621826 14.168 0.621826H5.83191ZM5.83191 2.70586H14.168C15.8915 2.70586 17.2941 4.10841 17.2941 5.83191V14.168C17.2941 15.8915 15.8915 17.2941 14.168 17.2941H5.83191C4.10841 17.2941 2.70586 15.8915 2.70586 14.168V5.83191C2.70586 4.10841 4.10841 2.70586 5.83191 2.70586ZM15.2101 3.74788C14.9337 3.74788 14.6687 3.85766 14.4732 4.05308C14.2778 4.24849 14.168 4.51353 14.168 4.78989C14.168 5.06625 14.2778 5.33129 14.4732 5.52671C14.6687 5.72213 14.9337 5.83191 15.2101 5.83191C15.4864 5.83191 15.7515 5.72213 15.9469 5.52671C16.1423 5.33129 16.2521 5.06625 16.2521 4.78989C16.2521 4.51353 16.1423 4.24849 15.9469 4.05308C15.7515 3.85766 15.4864 3.74788 15.2101 3.74788ZM9.99998 4.78989C7.12714 4.78989 4.78989 7.12714 4.78989 9.99998C4.78989 12.8728 7.12714 15.2101 9.99998 15.2101C12.8728 15.2101 15.2101 12.8728 15.2101 9.99998C15.2101 7.12714 12.8728 4.78989 9.99998 4.78989ZM9.99998 6.87393C11.7235 6.87393 13.126 8.27648 13.126 9.99998C13.126 11.7235 11.7235 13.126 9.99998 13.126C8.27648 13.126 6.87393 11.7235 6.87393 9.99998C6.87393 8.27648 8.27648 6.87393 9.99998 6.87393Z" fill="#1EB5E4"/>
                      </svg>
                    </div>
                  </a>
                  <p class="mb-2 text-xl font-bold">Sígueme en Instagram</p>
                  <p class="mb-3 text-gray-500">Para ver día a día mi campaña por una ciudad mejor.</p>
                  <!-- <a href="#" class="inline-flex py-2 px-4 text-sm font-medium text-center rounded-lg border text-primary-600 border-primary-600 hover:text-white hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300">Support center</a> -->
              </div>
          </div>
      </div>
      {{ contactMeData }}
  </section>
  </div>
</template>

<script>
import WhatsAppIcon from '@/components/Icons/WhatsAppIcon.vue';

export default {
  name: "ContactUs",
  components: {
    WhatsAppIcon
  },

  data(){
    return{
      name:"",
      lastName:"",
      email:"",
      cellphone:"",
      information:"",
      send: null,
      error: null,
      contactMeData:{},
      buttonActive: false,
      emailValue: false,
    }
  },
  computed: {
    contactMe() {
      return this.$store.state.contactMe;
    },

  },
  watch: {
    contactMe() {
      this.contactMeData = this.contactMe.attributes.sections.data.attributes;
    },
    name() {
    this.verifyInfo();
    },
    email() {
    this.verifyInfo();
    this.verifyEmail();
    }
  },
  async beforeCreate() {
    if (process.client)
      await this.$store.dispatch('fetchContactMe');
  },
  methods:{
    verifyEmail(){
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.emailValue = regex.test(this.email);
    },
    verifyInfo() {
      if (this.name && this.email && this.emailValue) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
      }
    },
    async submit(){
      const metadata={
        name:this.name,
        lastname:this.lastName,
        email:this.email,
        cellphone:this.cellphone,
        information:this.information
      }
      const body={
        data:metadata
      }
      const endpoint = this.contactMeData.cta?.data?.attributes.url;
      await this.$axios
        .post(endpoint, body)
        .then((response) => {
          if (response.status === 200) {
            this.send = true
            setTimeout(
              function () {
                this.$router.push('/')
              }.bind(this),
              2000
            )
          }
        })
        .catch((error) => {
          this.error = error
        })
      },
    }
  };
</script>
