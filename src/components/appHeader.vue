<template>
  <header class="header bg-blue-300">
    <div class="container mx-auto">
      <h1 class="app-title">
        <span>
          <font-awesome-icon
            icon="hand-holding-medical"
            class="inner-icon"
          />Bhav</span
        >COVID
      </h1>
      <p class="app-subtitle">Covid Resources for Bhavnagar.</p>
      <p></p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  text-align: left;
  @apply bg-blue-200  py-3 px-4 md:px-0 border-blue-300 border-b;
}
.app-title {
  font-size: 30px;
  font-weight: 600;
  @apply text-blue-900;
  span {
    font-size: 22px;
    font-weight: 400;
    .inner-icon {
      font-size: 16px;
      opacity: 0.6;
      margin-right: 0px;
    }
  }
}

.app-subtitle {
  font-size: 16px;
  font-weight: 400;
  @apply text-blue-900  text-sm md:text-lg;
  opacity: 0.6;
}
</style>
