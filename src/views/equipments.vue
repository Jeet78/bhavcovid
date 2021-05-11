<template>
  <div class="container mx-auto px-3 my-6 text-left">
    <div class="page-inside-header">
      <go-back />
      <h4 class="page-title">
        <span class="pg-icon">
          <font-awesome-icon icon="cogs" />
        </span>
        Medical Equipments
      </h4>
    </div>
    <br />
    <div class="tile" v-for="item in equipments" :key="item.title">
      <div class="tile-upper">
        <h6 class="tile-title">{{ item.title }}</h6>
        <p class="tile-details">{{ item.details }}</p>
        <p class="tile-address" v-if="item.org">
          <font-awesone-icon icon="cogs" /> {{ item.org }}
        </p>
      </div>
      <div class="tile-btns" v-if="item.phn1 || item.phn2">
        <a :href="`tel:${item.phn1}`" type="button" class="tile-btn">
          <i class="fa fa-phone-alt"></i> {{ item.phn1 }}
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
      equipments: [
        {
          title: "BIPAP Machine.",
          details: "Kindly call and know more details.",
          org: "Madhav Rajai & Rajesh Rajai",
          phn1: "9376222111",
          phn2: "9824485088",
        },
        {
          title: "BIPAP Machine on Rent.",
          details: "Kindly call and know more details.",
          org: "Unknown",
          phn1: "9898317316",
        },
        {
          title: "Oxygen Flow-meter",
          details: "Oxygen flow meter which is fixed on cylinder. ",
          org: "Dhavalbhai Gulvani",
          phn1: "9313746010",
          phn2: "7096885050",
        },
        {
          title: "Oxygen Flow-meters",
          details: "Free of charge, Aadhar card needed. ",
          org: "Hemantbhai Patel & Abhibhai Soni",
          phn1: "9427202526",
          phn2: "9879489500",
        },
        {
          title: "Oxygen Valve & Flow-meters",
          details:
            "Please visit : Jay Traders, M.G. Road (Opposite Khodiyar Icecream) OR Bhagat Trading Opposite Vaishali talkies. ",
          org: "Jay Traders & Bhagat Trading",
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

