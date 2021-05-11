<template>
  <router-link to="/" class="back">
    <font-awesome-icon icon="arrow-left" class="mr-1" /> Go Back
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.back {
  @apply text-gray-400 mb-2 block;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.5px;
}
</style>