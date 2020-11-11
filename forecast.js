$(document).ready(function () {
  $('#submit-btn').on('click', function () {
    let submitText = $('searchValue').val()
    console.log(submitText)
    displayWeather(submitText)
  })

  function displayWeather(submitText) {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/forecast?q=${'submitText'}&appid=e468a5ea337d341b2776e0ac72dbe4c1",
      method: "GET",

    }).then(function (data) {
      console.log(data)
      $('#current').empty()
      let title = $('<h3>').addClass('card-title').text(data.name + '(' + new Date().toLocaleDateString() + ')');
      let card = $('<div>').addClass('card');
      let wind = $('<p>').addClass('card-text').text("Wind Speed:" + data.wind.speed + "MPH");
      let humid = $('<p>').addClass('card-text').text("Humidity:" + data.main.humidity + "%");
      let temp = $('<p>').addClass('card-text').text("Temperature" + data.main.temp + "F");
      let cardBody = $('<div>').addClass('card-body');
      let img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      title.append(img)
      cardBody.append(title, wind, temp, humid)
      card.append(cardBody)
      $('#current').append(card)
    })
  }

  function forect(submitText) {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/forecast?q=${'submitText'}&appid=e468a5ea337d341b2776e0ac72dbe4c1",
      method: "GET",

    }).then(function (data) {
      console.log(data)
    })
  }
})