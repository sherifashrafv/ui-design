<template>
  <div>
    <h1>Route Not Found</h1>
    <h1>Route Success</h1>
    <nuxt />
  </div>
</template>

<script>
export default {
  props: ['error'],
  mounted() {
    console.log(this.error)
  },
}
</script>

<style></style>
