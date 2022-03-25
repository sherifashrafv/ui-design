<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <h1>{{ product.title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: [''],
  layout: 'CustomeError',
  asyncData({ $axios }) {
    return $axios
      .$get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return {
          posts: res,
        }
      })
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>

<style></style>
