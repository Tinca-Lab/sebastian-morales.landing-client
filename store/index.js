export const state = () => ({
    home: {},
})

export const mutations = {
    setHome(state, home) {
        state.home = home
    }
}

export const actions = {
    async fetchHome({ commit }) {
      // https://api.sebastianmorales.co
        const { data } = await this.$axios.$get('/api/home?populate[0]=sections&populate[1]=sections.cta&populate[2]=sections.media&populate[3]=sections.blogs.image&populate[4]=sections.blogs.author&populate[5]=sections.blogs.author.image');
        commit('setHome', data)
    }
}
