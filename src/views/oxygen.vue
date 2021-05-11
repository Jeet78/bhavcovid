<template>
  <div class="container mx-auto px-3 my-6 text-left">
    <div class="page-inside-header">
      <go-back />
      <h4 class="page-title">
        <span class="pg-icon">
          <font-awesome-icon icon="burn" />
        </span>
        Oxygen Cylinders
      </h4>
    </div>
    <br />
    <div class="tile" v-for="item in oxygen" :key="item.title">
      <div class="tile-upper">
        <h6 class="tile-title">{{ item.name }}</h6>
        <p class="tile-details">{{ item.details }}</p>
        <p class="tile-address" v-if="item.org">
          <i class="fa fa-users"></i> {{ item.org }}
        </p>
      </div>
      <div class="tile-btns">
        <a :href="`tel:${item.contact}`" type="button" class="tile-btn">
          <i class="fa fa-phone-alt"></i> {{ item.contact }}
        </a>
        <a
          v-if="item.phn2"
          :href="item.phn2"
          target="_blank"
          type="button"
          class="tile-btn2"
        >
          <i class="fa fa-phone-alt"></i>
          {{ item.phn2 }}
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
      oxygen: [
        {
          name: "Oxygen Bank",
          details: "Free of charge, 1000 Rs Deposit.",
          contact: "9428787217",
          phn2: "02782425322",
          org: "Jito Seva Group, Dadasaheb Jain Derasar, Kalanala.",
        },
        {
          name: "Oxygen Clylinder Bank",
          details: "Free of charge, with condition to return after use.",
          contact: "7016871131",
          org: "Ship Recycling Industries Association",
        },
        {
          name: "Oxygen Cylinders",
          details: "Free service & Home Fitting",
          contact: "7016871131",
          name: "Citizen Health & Education Trust",
        },
        {
          name: "Gujju Group",
          contact: "7016871131",
        },
        {
          name: "Gujju Group",
          contact: "7016871131",
        },
        {
          name: "IRFAN Oxygen",
          contact: "9909931645",
        },
        {
          name: "Mahir Oxygen",
          contact: "9274752797",
        },
        {
          name: "Manavta Oxygen",
          contact: "7874313873",
        },
        {
          name: "Rashid Bata Oxygen",
          contact: "9374150066",
        },
        {
          name: "Sahil Oxygen",
          contact: "9904253709",
        },
        {
          name: "Shahrukh Oxygen",
          contact: "8733843412",
        },
        {
          name: "Shilpa Oxygen",
          contact: "8238892149",
        },
        { name: "Gunubhai Delawala", contact: "9824040889" },
        {
          name: "Hitesh Kunjadiya",
          contact: "9427434465",
        },
        {
          name: "Sadbhavna Trust Nishant Khagram",
          contact: "8758770770",
        },
        {
          name: "Kishor Hapaliya",
          contact: "9825507171",
        },
        {
          name: "Shravan Virani",
          contact: "9824505706",
        },
        {
          name: "Sanjay Hirani Kranti",
          contact: "9825077454",
        },
        {
          name: "Ajitsinh Dodiya Freedom Yuva Group",
          contact: " 8200329881",
        },
        {
          name: "Nilesh Harsoda",
          contact: "9898575606",
        },
        {
          name: "Vibhash Sheth Kanaiya Mitra mandal",
          contact: "8140901234",
        },
        {
          name: "Milan Kothari",
          contact: "9824294531",
        },
        {
          name: "Ashish Joshi",
          contact: "9426900500",
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
    @apply block w-full text-left pl-5 bg-blue-50 text-blue-800  px-3 py-2 transition-all ease-out hover:bg-blue-500 hover:text-white tracking-wider;
    font-size: 14px;
    font-weight: 500;
    i {
      @apply mr-2;
    }
  }
  &-btn2 {
    -webkit-appearance: none;
    @apply block w-full text-center border-l-2 border-blue-100 bg-blue-50 text-blue-800  px-3 py-2 transition-all ease-out hover:bg-blue-500 hover:text-white tracking-wider;
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
  //   @apply text-blue-400;
  .pg-icon {
    margin-right: 5px;
    @apply text-blue-400;
  }
}
</style>

