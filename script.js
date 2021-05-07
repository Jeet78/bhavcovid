$(document).ready(function () {
  $("#app").imagesLoaded(function () {
    $("#loader").hide();
    $(".hide-before-load").fadeIn();
    $(".grid").masonry({
      itemSelector: ".grid-item",
      columnWidth: 240,
    });
  });

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
    buttons: ["zoom", "share", "download", "close"],
  });
});

// VUE

var app = new Vue({
  el: "#app",
  data: {
    message: "BhavCovid",
    homecare: [
      "./assets/images/hospital-1.jpeg",
      "./assets/images/hospital-2.jpeg",
      "./assets/images/hospital-3.jpeg",
      "./assets/images/hospital-4.jpeg",
      "./assets/images/hospital-5.jpeg",
      "./assets/images/hospital-6.jpeg",
      "./assets/images/hospital-7.jpeg",
      "./assets/images/hospital-8.jpeg",
      "./assets/images/hospital-9.jpeg",
      "./assets/images/hospital-10.jpeg",
    ],
    oxygen: [
      "./assets/images/o2-4.jpeg",
      "./assets/images/o2-1.jpeg",
      "./assets/images/o2-3.jpeg",
      "./assets/images/o2-2.jpeg",
    ],
    oxyContacts: [
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
    ],
    food: [
      {
        title: "Free Meal for Patients",
        details: "Kindly call before 1 day and send all the details.",
        morning: "11 AM - 1 PM",
        evening: "6 PM - 7 PM",
        org: "BHARWAD SAMAAJ, BHAVNAGAR.",
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
        title: "Param Tiffin - JAIN (2 Times)",
        details: "Kindly call before 1 day and send all the details.",
        org: "Arham Yuva Seva Group",
        phn1: "9136442493",
      },
    ],
    equipments: [
      {
        title: "BIPAP Machine on Rent.",
        details: "Kindly call and know more details.",
        org: "UNKNOWN",
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
        title: "Oxygen Valve & Flow-meters",
        details:
          "Please visit : Jay Traders, M.G. Road (Opposite Khodiyar Icecream) OR Bhagat Trading Opposite Vaishali talkies. ",
        org: "Jay Traders & Bhagat Trading",
      },
    ],
  },
});
