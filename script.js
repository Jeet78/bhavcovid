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
  },
});
