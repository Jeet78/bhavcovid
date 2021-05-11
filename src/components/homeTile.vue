<template>
  <router-link class="tile flex justify-items-center" :to="link">
    <div class="tile-icon pr-4">
      <font-awesome-icon :icon="icon" />
    </div>
    <div class="tile-content">
      <p class="tile-title">{{ title }}</p>
      <p class="tile-description">
        {{ subtitle }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    link: String,
    icon: String,
  },
};
</script>

<style scoped lang="scss">
.tile {
  @apply border border-solid rounded border-blue-200 p-3 text-left mb-5 ease-in-out transition-all;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 16px rgb(52 152 219 / 10%);
  }
}

.tile-title {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 3px;
  //   letter-spacing: 0.5px;
  i {
    @apply text-blue-400;
    margin-right: 10px;
  }
}

.tile-description {
  font-size: 14px;
  opacity: 0.8;
}

.tile-icon {
  font-size: 24px;
  @apply text-blue-400;
}
</style>