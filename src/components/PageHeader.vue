<template>
  <div id="curiosity">
    <h1 id="curio">{{header}}</h1>
    <p id="description">{{subheader}}</p>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    subheader: String
  }
};
</script>

<style lang="scss">
</style>