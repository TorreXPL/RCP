<template>
  <div class="logo-container">
    <div id="R">R</div>
    <div id="C">C</div>
    <div id="P">P</div>
  </div>
</template>

<script>
export default {};
</script>

<style >
.logo-container {
  display: flex;
  flex-direction: row;
  position: absolute;
  font-weight: bold;
  left: 40px;
  top: 40px;
  font-size: 2rem;
}
#R {
  color: var(--main-theme-color);
}
#C {
  color: var(--darker-action-color);
}
#P {
  color: var(--gray);
}
</style>