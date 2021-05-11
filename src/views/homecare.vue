<template>
  <div class="container mx-auto px-3 my-6 text-left">
    <div class="page-inside-header">
      <go-back />
      <h4 class="page-title">
        <span class="pg-icon">
          <font-awesome-icon icon="stethoscope" />
        </span>
        Home Covid Treatement
      </h4>
    </div>
    <br />
    <div class="grid-container">
      <img v-for="item in homecare" :key="item.id" :src="item" alt="" />
    </div>
  </div>
</template>

<script>
import goBack from "../components/goBack.vue";
export default {
  components: { goBack },
  data: function () {
    return {
      homecare: [
        "assets/images/hospital-1.jpeg",
        "assets/images/hospital-2.jpeg",
        "assets/images/hospital-3.jpeg",
        "assets/images/hospital-4.jpeg",
        "assets/images/hospital-5.jpeg",
        "assets/images/hospital-6.jpeg",
        "assets/images/hospital-7.jpeg",
        "assets/images/hospital-8.jpeg",
        "assets/images/hospital-9.jpeg",
        "assets/images/hospital-10.jpeg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
  img {
    padding: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    img {
      padding: 0;
    }

    grid-template-columns: repeat(1, 1fr);
  }
}

.page-title {
  font-size: 26px;
  font-weight: 600;
  //   @apply text-blue-400;
  .pg-icon {
    margin-right: 5px;
    @apply text-blue-400;
  }
}
</style>

