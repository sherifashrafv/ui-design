export default {
  state: () => ({
    posts: [],
  }),
  mutations: {
    updatePost(state, posts) {
      state.posts = posts
    },
  },
}
