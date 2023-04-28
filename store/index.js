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
        const { data } = await this.$axios.$get('/api/home?populate[0]=sections&populate[1]=sections.blogs.image&populate[2]=sections.blogs.author&populate[3]=sections.blogs.author.image');
        commit('setHome', data)
    }
}