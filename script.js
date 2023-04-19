$(document).ready(function () {

var dateEl = $('#date')
var currentWeatherEl = $('#current-weather-item')
var cityEl = $('#city')
var weatherForecast = $('#future-weather')

// Today's date
$(function(){
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
})