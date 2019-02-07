var queryURL = "https://api.traveltimeapp.com/?X-Application-Id=?X-Api-Key=c77e87e4e147383102f0bac0a30765d2";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });