<template>
  <div class="container mx-auto px-3 md:px-0 mt-4 mb-8">
    <div class="flex w-full pb-3">
      <a type="button" class="btn" href="tel:9971779959">
        <font-awesome-icon icon="phone-alt" class="mr-3" /> 24x7 Bhavnagar Covid
        Helpline
      </a>
    </div>

    <a
      class="tile flex justify-items-center"
      href="https://datastudio.google.com/reporting/725a9cdb-c898-4caf-b241-00d9831be3f2"
      target="_blank"
    >
      <div class="tile-icon pr-4">
        <font-awesome-icon icon="hospital" />
      </div>
      <div class="tile-content">
        <p class="tile-title">Hospital & Bed Availability</p>
        <p class="tile-description">
          Link for All Hospital's contact, address and Available bed info.
        </p>
      </div>
    </a>

    <homeTile
      v-for="item in items"
      :key="item.title"
      :icon="item.icon"
      :title="item.title"
      :subtitle="item.subtitle"
      :link="item.link"
    />
  </div>
</template>

<script >
import homeTile from "../components/homeTile.vue";
export default {
  data: function () {
    return {
      items: [
        {
          icon: "vial",
          title: "Test Laboratories",
          subtitle: "RT-PCR & Blood Test Laboratory locations and details.",
          link: "/labs",
        },
        {
          icon: "stethoscope",
          title: "Home Covid Treatement",
          subtitle:
            "Information of all hospitals providing home treatement for covid.",
          link: "/homecare",
        },
        {
          icon: "utensils",
          title: "Food & Tiffin For Patients",
          subtitle:
            "Information of all organisations and persons providing Free / Affordable Food & Snacks for patients.",
          link: "/food",
        },
        {
          icon: "burn",
          title: "Oxygen Cylinders",
          subtitle:
            "Information of all organisations and persons providing Oxygen Bottle & Refill services.",
          link: "/oxygen",
        },
        {
          icon: "cogs",
          title: "Medical Equipements",
          subtitle:
            "Information of all organisations and persons providing BIPAP, Flow meters.",
          link: "/equipments",
        },
      ],
    };
  },
  components: {
    homeTile,
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

.btn {
  -webkit-appearance: none;
  @apply inline-flex items-center ml-auto text-left pl-5 bg-blue-50 text-blue-800  px-3 py-2 transition-all ease-out hover:bg-blue-500 hover:text-white tracking-wider;
  font-size: 14px;
  font-weight: 500;
  i {
    @apply mr-2;
  }
}
</style>