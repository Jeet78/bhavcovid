<template>
  <div class="container mx-auto px-3 my-6 text-left">
    <div class="page-inside-header">
      <go-back />
      <h4 class="page-title">
        <span class="pg-icon">
          <font-awesome-icon icon="utensils" />
        </span>
        Food &amp; Tiffin For Patients
      </h4>
    </div>
    <br />
    <div class="tile" v-for="item in food" :key="item.title">
      <div class="tile-upper">
        <h6 class="tile-title">{{ item.title }}</h6>
        <p class="tile-details">{{ item.details }}</p>
        <p class="tile-address"><i class="fa fa-users"></i> {{ item.org }}</p>
      </div>
      <div class="tile-btns">
        <a :href="`tel:${item.phn}`" type="button" class="tile-btn">
          <i class="fa fa-phone-alt"></i> {{ item.phn1 }}
        </a>
        <a
          v-if="item.phn2"
          :href="item.phn2"
          target="_blank"
          type="button"
          class="tile-btn2"
        >
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
      food: [
        {
          title: "Free Food for Patients",
          details: "Kindly call before a day and send all the details.",
          morning: "11 AM - 1 PM",
          evening: "6 PM - 7 PM",
          org: "WeHelp Bhavnagar.",
          phn1: "8401284777",
        },
        {
          title: "Free Meal for Patients",
          details: "Kindly call before 1 day and send all the details.",
          morning: "11 AM - 1 PM",
          evening: "6 PM - 7 PM",
          org: "Bharwaad Samaaj, Bhavnagar.",
          phn1: "9825505005",
          phn2: "9825217804",
        },
        {
          title: "Free Meal for Patients",
          details: "Kindly call before 1 day and send all the details.",
          morning: "Before 7 AM",
          evening: "Before 6 PM",
          org: "Sihor Sampraday Bhramhan Gnati.",
          phn1: "9879557075",
          phn2: "9925574380",
        },
        {
          title: "Free Breakfast for Patients",
          details: "Kindly send address and details of patient on whatsapp.",
          morning: "8 AM - 10 AM",
          evening: "Before 9PM",
          org: "Amitbhai & Aashishbhai.",
          phn1: "7567244189",
          phn2: "7383412348",
        },
        {
          title: "Mosambi, Limbu at 30 Rs/kg For Covid Patients.",
          org: "Bharatbhai Vaghela",
          phn1: "7878070578",
        },
        {
          title: "Mosambi at 30-40 Rs/kg For Needy Patients.",
          details:
            "This is for needy patients only, Kindly Bring Patient Prescription and covid positive report along",
          org: "Pramodbhai Vora",
          phn1: "9427780880",
        },
        {
          title: "Free Coconut Water (Nariyel Pani)",
          details:
            "Organised by & for people of bhavnagar. (Volunteers can join)",
          org: "Unknown",
          phn1: "6357675555",
        },
        {
          title: "Hygenic Tiffin service at affordable price",
          details: "Kindly call before a day and send all the details.",
          org: "Rasthaal Caterers",
          phn1: "7567246827",
        },
        {
          title: "Param Tiffin",
          details: "Kindly call before 1 day and send all the details.",
          org: "Arham Yuva Seva Group",
          phn1: "9136442493",
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
    @apply block w-full text-center bg-blue-50 text-blue-800  px-3 py-2 transition-all ease-out hover:bg-blue-500 hover:text-white tracking-wider;
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

