jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // google cloud Chart
  var doughnutData = [{
      value: 75,
      color: "#1abc9c"
    },
    {
      value: 25,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("googlecloud").getContext("2d")).Doughnut(doughnutData);

  // aws Chart
  var doughnutData = [{
    value: 75,
    color: "#1abc9c"
  },
  {
    value: 25,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("aws").getContext("2d")).Doughnut(doughnutData);

  // kubernetes Chart
  var doughnutData = [{
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("kubernetes").getContext("2d")).Doughnut(doughnutData);

  // java Chart
  var doughnutData = [{
    value: 90,
    color: "#1abc9c"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);

  // python Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 40,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);

  // spring Chart
  var doughnutData = [{
    value: 85,
    color: "#1abc9c"
  },
  {
    value: 15,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("spring").getContext("2d")).Doughnut(doughnutData);
});
