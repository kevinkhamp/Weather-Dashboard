$(document).ready(function () {

var APIKey = 'cae12e67d49dd4be16803c43f60b9f83'

var dateEl = $('#date')
var currentWeatherEl = $('#current-weather-item')
var searchEl = $('#searchBtn')
var cityEl = $('#city')
var weatherForecast = $('#future-weather')

// Today's date
$(function(){
    // JS date method
    var today = new Date()
    var date = today.getDate()
    var month = today.getMonth() + 1
    var year = today.getFullYear()
    var format = month + "/" + date + "/" + year
    dateEl.text('('+ format + ')')
})
// Tomorrow's date
$(function(){
    var today = new Date()
    var month = today.getMonth() + 1
    var year = today.getFullYear()
    var date = today.getDate()+1
    var format = month + "/" + date + "/" + year
    $('.date1').text('('+ format + ')')
})
// Day after tomorrow
$(function(){
    var today = new Date()
    var month = today.getMonth() + 1
    var year = today.getFullYear()
    var date = today.getDate()+2
    var format = month + "/" + date + "/" + year
    $('.date2').text('('+ format + ')')
})
// Three days from today
$(function(){
    var today = new Date()
    var month = today.getMonth() + 1
    var year = today.getFullYear()
    var date = today.getDate()+3
    var format = month + "/" + date + "/" + year
    $('.date3').text('('+ format + ')')
})
// Four days from today
$(function(){
    var today = new Date()
    var month = today.getMonth() + 1
    var year = today.getFullYear()
    var date = today.getDate()+4
    var format = month + "/" + date + "/" + year
    $('.date4').text('('+ format + ')')
})
// Five days from today
$(function(){
    var today = new Date()
    var month = today.getMonth() + 1
    var year = today.getFullYear()
    var date = today.getDate()+5
    var format = month + "/" + date + "/" + year
    $('.date5').text('('+ format + ')')
})

var pastSearches = []

if (localStorage['pastSearches']) {
    pastSearches = JSON.parse(localStorage['pastSearches'])
}

if (pastSearches.indexOf(search) == -1) {
    pastSearches.unshift(search)
    if (pastSearches.length > 8) {
        pastSearches.pop()
    }
    localStorage['pastSearches'] = JSON.stringify(pastSearches)
}

$('.searchBtn').on('click', function() {
    var event = $(this).prev().val().toLowerCase()
    localStorage.setItem('City', JSON.stringify(event))
})


//Get weather data (come back later)
// function getWeatherData() {
//     fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid='+ APIKey) 
//     .then(function(response) {
//     return response.json()
//     })
//     .then(function (data) {
//     console.log(data)
//     })
// }

// getWeatherData()
})