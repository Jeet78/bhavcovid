<template>
  <div class="container mx-auto px-3 my-6 text-left">
    <div class="page-inside-header">
      <go-back />
      <h4 class="page-title">
        <span class="pg-icon">
          <font-awesome-icon icon="vial"></font-awesome-icon>
        </span>
        Test Laboratories
      </h4>
    </div>
    <br />
    <div class="tile" v-for="item in labs" :key="item.title">
      <div class="tile-upper">
        <h6 class="tile-title">{{ item.title }}</h6>
        <p class="tile-details">{{ item.details }}</p>
        <p class="tile-address">
          {{ item.add }}
        </p>
      </div>
      <div class="tile-btns">
        <a :href="`tel:${item.phn}`" type="button" class="tile-btn">
          <i class="fa fa-phone-alt"></i> {{ item.phn }}
        </a>
        <a
          v-if="item.map"
          :href="item.map"
          target="_blank"
          type="button"
          class="tile-btn-variant"
        >
          Get Directions
          <font-awesome-icon icon="directions" class="ml-1" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import goBack from "../components/goBack.vue";
export default {
  components: { goBack },
  data: function () {
    return {
      labs: [
        {
          title: "Vision Laboratory",
          details: "Home Sample Collection Available.",
          add:
            "Carlton Square Complex, Kalanala Road, Near Dada Saheb Jain Mandir Road, Kalanala, Bhavnagar - 364001.",
          phn: "02782224143",
          map: "https://goo.gl/maps/L1sfxdz6tNMHJzeU7",
        },
        {
          title: "Arogya Pathology Laboratory",
          details: "Affordable Rates & Home Sample Collection Available.",
          add:
            "3, Ground floor, Sai Ganga Complex, Kalubha Rd, near GenX Hotel, Bhavnagar, Gujarat 364002",
          phn: "02782522434",
          map: "https://goo.gl/maps/v1xVxKZj2up5EWDJ6",
        },
        {
          title: "Dev Pathology Laboratory",
          details: "Home Sample Collection Available.",
          add:
            "No 6, Ground Floor, Samip Complex, Kalubha Road, Bhavnagar - 364001, Opposite Sir T Hospital Bus Stop",
          phn: "02782513738",
          map: "https://goo.gl/maps/CAugfdunt2YKmGTM6",
        },
        {
          title: "Green Cross Pathology Laboratory",
          details: "Home Sample Collection Available. (Also For Blood)",
          add:
            "PL. 2247, D2 Hill Drive, Fullwadi Chowk,Bhavnagar, Bhavnagar, Gujarat 364002, India",
          phn: "02782515731",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tile {
  @apply rounded border-solid border-blue-100 border mb-5 overflow-hidden;
  &-upper {
    @apply p-4;
  }
  &-title {
    font-size: 20px;
    font-weight: 500;
  }
  &-details {
    font-size: 14px;
    @apply text-gray-400;
  }
  &-address {
    @apply flex items-start;
    margin-top: 8px;
    // margin-bottom: 8px;
    font-size: 14px;
    @apply text-gray-500;
    i {
      @apply text-gray-400 mr-2 pt-1;
      font-size: 14px;
    }
  }
  &-btns {
    @apply flex justify-items-center items-center w-full border-t border-blue-100;
    button {
      width: 100%;
    }
  }
  &-btn {
    -webkit-appearance: none;
    @apply block w-full text-center border border-blue-300 bg-blue-300 text-blue-800  px-3 py-2 transition-all ease-out hover:bg-blue-600 hover:text-white tracking-wider;
    font-size: 14px;
    font-weight: 500;
    i {
      @apply mr-2;
    }
  }
  &-btn-variant {
    -webkit-appearance: none;
    @apply block w-full text-center text-gray-500 px-3 py-2 transition-all ease-out;
    font-size: 14px;
    font-weight: 500;
    i {
      @apply mr-2;
    }
  }
}

.page-title {
  font-size: 26px;
  font-weight: 600;
  .pg-icon {
    margin-right: 5px;
    @apply text-blue-400;
  }
}
</style>

