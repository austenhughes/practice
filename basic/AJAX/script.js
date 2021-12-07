let catFact = {};

var settings = {
    "url": "https://cat-fact.herokuapp.com/facts",
    "method": "GET",
    "timeout": 0,
    "headers": {
    //   "Cookie": "connect.sid=s%3Aj9mYABsmwy_lcMWkAPKidmoLABZmi2CU.LoOxYviLLC6mgqnZ3YVVkLr1yRDFoHip37aKKF8HWT0"
    },
  };
  
  $.ajax(settings).done(function (response) {
    // console.log(response);
    catFact = response;
    console.log(catFact);
  });

