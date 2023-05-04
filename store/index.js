export const state = () => ({
    home: {},
    aboutMe:{}
})

export const mutations = {
    setHome(state, home) {
        state.home = home
    },
    setAboutMe(state, aboutMe) {
      state.aboutMe = aboutMe
  },
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
}
