export const state = () => ({
    home: {},
    aboutMe:{},
    contactMe:{},
    blogs:{},
    category:{},
    filteredItems:[],
    SearchFilteredItems:[],
    blog:[],
    allBlogs:[],
    statusModalLogin: false,
    statusModalRegister: false
})

export const mutations = {
    setHome(state, home) {
        state.home = home
    },
    setAboutMe(state, aboutMe) {
      state.aboutMe = aboutMe
    },
    setContactMe(state, contactMe) {
      state.contactMe = contactMe
    },
    setBlogs(state, blogs) {
      state.blogs = blogs
    },
    setCategory(state, category) {
      state.category = category
    },
    setFilteredItems(state, filter) {
      state.filteredItems = filter
    },setSearchFilteredItems(state, filter) {
      state.SearchFilteredItems = filter
    },
    setBlogUnique(state, blog) {
      state.blog = blog
      state.blog.attributes.comentaries.data = state.blog.attributes.comentaries.data.sort((a, b) => b.id - a.id);
    },
    setAllBlogs(state, allBlogs) {
      state.allBlogs = allBlogs
    },
    setStatusModalLogin(state, status) {
      state.statusModalLogin = status
    },
    setStatusModalRegister(state, status) {
      state.statusModalRegister = status
    }
}

export const actions = {
    async fetchHome({ commit }) {
      // https://api.sebastianmorales.co/api/home?populate[0]=sections&populate[1]=sections.cta&populate[2]=sections.media&populate[3]=sections.pps&sections.blogs.image&populate[4]=sections.blogs.author&populate[5]=sections.blogs.author.image
        const { data } = await this.$axios.$get('/api/home?populate[0]=sections&populate[1]=sections.cta&populate[2]=sections.media&populate[3]=sections.pps&populate[4]=sections.blogs.image&populate[5]=sections.blogs.author&populate[6]=sections.blogs.author.image');
        commit('setHome', data)
    },
    async fetchAboutMe({ commit }) {
      // https://api.sebastianmorales.co/api/home?populate[0]=sections&populate[1]=sections.cta&populate[2]=sections.media&populate[3]=sections.pps&sections.blogs.image&populate[4]=sections.blogs.author&populate[5]=sections.blogs.author.image
        const { data } = await this.$axios.$get('/api/aboutme?populate[0]=sections&populate[1]=sections.histories&populate[2]=sections.pps&populate[3]=sections.media&populate[4]=sections.pps.Image&populate[5]=sections.cta');
        commit('setAboutMe', data)
    },
    async fetchContactMe({ commit }) {
      // https://api.sebastianmorales.co/api/home?populate[0]=sections&populate[1]=sections.cta&populate[2]=sections.media&populate[3]=sections.pps&sections.blogs.image&populate[4]=sections.blogs.author&populate[5]=sections.blogs.author.image
        const { data } = await this.$axios.$get('/api/contactme?populate[0]=sections&populate[1]=sections.cta');
        commit('setContactMe', data)
    },
    async fetchBlog({ commit }) {
      // https://api.sebastianmorales.co/api/blog-view?populate[0]=sections&populate[1]=sections.blogs.image&populate[2]=sections.blogs.author&populate[3]=sections.blogs.author.image
      const { data } = await this.$axios.$get('api/blog-view?populate[0]=sections&populate[1]=sections.blogs.image&populate[2]=sections.blogs.author&populate[3]=sections.blogs.author.image')
      commit('setBlogs', data)
      commit('setFilteredItems', data.attributes.sections.data[0].attributes.blogs.data)
    },
    async fetchCategory({ commit }) {
      // https://api.sebastianmorales.co/api/blog-view?populate[0]=sections&populate[1]=sections.blogs.image&populate[2]=sections.blogs.author&populate[3]=sections.blogs.author.image
      const { data } = await this.$axios.$get('api/categories')
      commit('setCategory', data)
    },
    Filter({ commit }, data) {
      commit('setFilteredItems', data)
    },
    SearchFilter({ commit }, data) {
      commit('setSearchFilteredItems', data)
    },
    async fetchBlogUnique({ commit }, id) {
      const { data } = await this.$axios.$get(`/api/blogs/${id}?populate[0]=image&populate[1]=author&populate[2]=author.image&populate[3]=comentaries&populate[4]=comentaries.media&sort[5]=comentaries.createdAt:desc
      `);
      commit('setBlogUnique', data)
    },
    async fetchAllBlogs({ commit }) {
      const { data } = await this.$axios.$get('/api/blogs?populate[0]=image&populate[1]=author&populate[2]=author.image&populate[3]=comentaries')
      commit('setAllBlogs', data)
    },
  changeStatusModalLogin({ commit },status) {
    commit('setStatusModalLogin', status)
  },
  changeStatusModalRegister({ commit }, status) {
    commit('setStatusModalRegister', status)
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
}
