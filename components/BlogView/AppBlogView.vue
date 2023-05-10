<template>
  <div class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
    <section class="relative bg-[#C6F1FF] xs:rounded-2xl md:rounded-3xl w-[100%] 2xl:w-[1440px] z-20 my-3">
      <div class="flex xs:flex-col flex-nowrap w-full xs:px-4 md:px-20 py-8">
        <header class="m-auto text-center">
          <section class="flex items-center gap-5 w-full justify-center">
            <HouseIcon />
            Home
            <LeftArrowIcon />
            Blogs
          </section>
          <section class="flex w-full justify-center my-4">
            <form class="w-full md:w-96 md:m-auto" @submit="handleSubmit">
              <div class="flex relative">
                <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your
                  Email</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white  border border-[#1EB5E4] rounded-l-lg hover:bg-[#0088B2]" :class="modal ? 'bg-[#0088B2]' : 'bg-[#1EB5E4]'"
                  type="button" @click="openClose">
                  <p class="xs:hidden md:block">Filtro</p> <Filter-Icon class="md:hidden" /> <svg aria-hidden="true"
                    class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
                <div id="dropdown" class="z-10 top-12 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                  :class="modal ? 'block' : 'hidden'">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li v-for="(element, index) in categories" :key="index">
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                        @click="ReloadBlogs(element.attributes?.title)">{{ element.attributes?.title }}</a>
                    </li>
                  </ul>
                </div>
                <div class="relative w-full">
                  <nuxt-link v-if="buttonDisabled" to="/blogs/busqueda">
                    <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#1EB5E4] rounded-r-lg border border-[#1EB5E4] hover:bg-[#0088B2] focus:ring-4 focus:outline-none focus:ring-blue-300">
                      <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </nuxt-link>
                  <nuxt-link v-else to="#"> <!-- o cualquier otra ruta o acción que desees hacer -->
                    <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#1EB5E4] rounded-r-lg border border-gray-400 cursor-not-allowed opacity-50">
                      <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </nuxt-link>
                  <input v-model="dataForSearch" type="text" id="search-dropdown"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-[#1EB5E4] focus:outline-none focus:ring-1 focus:ring-[#1EB5E4]"
                    placeholder="Search" @focus="mutateSearch" @blur="mutateSearch" @keyup="searchFilter" required>
                  <div class="bg-white w-full" :class="search ? 'absolute' : 'hidden'">
                    <p v-for="(element, index) in results" :key="index" class="flex gap-3 hover:bg-gray-300 p-3"><svg
                        aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg> {{ element?.attributes?.title }}</p>
                  </div>
                </div>
              </div>
            </form>
          </section>
          <section class="mb-10">
            <h2>{{ data.title }}</h2>
            <p>{{ data.description }}</p>
          </section>
        </header>
        <main>
          <section v-if="metadata">
            <div class="grid grid-cols-3 gap-4">
              <div v-for="(element1, i) in prueba()" :key="i" class="w-full">
                <nuxt-link to="/blogs/1">
                  <CardBlog :blog="element1" />
                </nuxt-link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import HouseIcon from '@/components/Icons/HouseIcon.vue'
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon.vue'
import CardBlog from '@/components/Blog/CardBlogComponents/CardBlog.vue';
import FilterIcon from '@/components/Icons/FilterIcon.vue';

export default {
  name: 'BlogView',
  components: {
    HouseIcon,
    LeftArrowIcon,
    CardBlog,
    FilterIcon
  },
  props: {
    metadata: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      buttonDisabled: false,
      categories: [],
      modal: false,
      search: false,
      dataForSearch: '',
    }
  },
  computed: {
    category() {
      return this.$store.state.category;
    },
    results() {
      return this.$store.state.SearchFilteredItems;
    }

  },
  watch: {
    category() {
      this.categories = this.category;
    },
    dataForSearch() {
      if (this.dataForSearch.length > 0) {
        this.buttonDisabled = true;
      } else {
        this.buttonDisabled = false;
      }
    }
  },
  async beforeCreate() {
    if (process.client)
      await this.$store.dispatch('fetchCategory');
  },
  methods: {
    prueba() {
      if (Array.isArray(this.metadata)) {
        const newArr = this.$store.state.filteredItems;
        return newArr;
      }
    },
    searchFilter() {
      const resultados = this.metadata.filter((element) => {
        return element.attributes.title.toLowerCase().includes(this.dataForSearch.toLowerCase())
            || element.attributes.author.data.attributes.name.toLowerCase().includes(this.dataForSearch.toLowerCase());
      });
      this.$store.dispatch('SearchFilter', resultados);
    },
    openClose() {
      this.modal = !this.modal;

    },
    mutateSearch() {
      this.search = !this.search;
    },
    ReloadBlogs(title) {
      this.openClose();
      const data = this.metadata.filter((element) => element.attributes.type === title);
      this.$store.dispatch('Filter', data);
    },
    handleSubmit() {
      this.$router.push('/blogs/busqueda')
    }
  },
}
</script>
