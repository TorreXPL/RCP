<template>
  <div class="pageHeader-container">
    <h1 class="pageHeader-header">{{header}}</h1>
    <p class="pageHeader-subheader">{{subheader}}</p>
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

<style>
.pageHeader-container {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  font-weight: bold;
  padding:1rem;
}
.pageHeader-header {
  color: var(--main-theme-color);
  font-size: 3rem;
}
.pageHeader-subheader {
  color: var(--gray);
  font-size: 1.25rem;
}
@media (max-width: 400px) {
  .pageHeader-container {
    margin-top: 4rem;
  }
  .pageHeader-header {
    font-size: 2.5rem;
  }
  .pageHeader-subheader {
    font-size: 1.25rem;
  }
}
</style>