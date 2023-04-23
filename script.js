$(document).ready(function () {

var APIKey = 'cae12e67d49dd4be16803c43f60b9f83'
var dateEl = $('#date')
var inputEl = $('.search')

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

function getLatLong() {
$('.searchBtn').on('click', function() {
    var event = $(this).prev().val()
    localStorage.setItem("Search",JSON.stringify(event))
 
    fetch ('http://api.openweathermap.org/geo/1.0/direct?q=' + inputEl.val() + '&limit=5&appid=' + APIKey, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow'
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data[0])

        $('.city').text(data[0].name)
        console.log(data[0].lat, data[0].lon)
    })
})}

getLatLong()


// Get weather data (come back later)
// function getWeatherData() {
    
//     fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid='+ APIKey, {
//         method: 'GET',
//         credentials: 'same-origin',
//         redirect: 'follow'
//     })
//     .then(function(response) {
//     return response.json()
//     })
//     .then(function (data) {
//     console.log(data)
//     })
// }

// 

})