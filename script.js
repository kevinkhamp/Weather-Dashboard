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
getLatLong()
// searchAgain()

function getLatLong() {
$('.searchBtn').on('click', function() {

    var event = $(this).prev().val()
    localStorage.setItem("Search",JSON.stringify(event))
    
    fetch ('http://api.openweathermap.org/geo/1.0/direct?q=' + inputEl.val() + '&limit=5&appid=' + APIKey, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow'
    })
    .then(response =>  response.json())
    .then(data => {
        // console.log(data[0])

        $('.city').text(data[0].name)
        // console.log(data[0].lat, data[0].lon)

        var latData = data[0].lat
        var lonData = data[0].lon
        showWeatherData(latData,lonData)

    })

    function showWeatherData(latData, lonData) {

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latData}&lon=${lonData}&appid=` + APIKey, {
            method: 'GET',
            credentials: 'same-origin',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(data => {
        // console.log(data.list)
        // console.log(data.list[0].weather)
    
        // $('.w-icon') = `${data.list[0].weather[0].icon}`
        for (let i = 0; i < 6; i++) {
            document.getElementById("w-icon"+i).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + '.png'
        }
        // $('.todayTemp') = `Temp: ${data.list[0].main.temp}`
        for (let i = 0; i < 6; i++) {
            document.getElementById("temp"+i).innerHTML = "Temp: " + Number(data.list[i].main.temp - 215).toFixed(2)+"°"
        }
        // $('.todayWind') = `Wind: ${data.list[0].wind.speed}`
        for (let i = 0; i < 6; i++) {
            document.getElementById("wind"+i).innerHTML = "Wind: " + Number(data.list[0].wind.speed).toFixed(2) + 'mph'
        }
        // $('.todayHumid') = `Humidity: ${data.list[0].main.humidity}`
        for (let i = 0; i < 6; i++) {
            document.getElementById("humid"+i).innerHTML = "Humidity: " + Number(data.list[0].main.humidity).toFixed(0)
        }
        history(event)
        // searchAgain(event)
    })
    }

    function history(event) {
        const listEl = $("<button>" + event.toUpperCase() + '</button> <br>')
            $(listEl).attr('id', 'list-city-item')
            $(listEl).attr('data-val', event.toUpperCase())
            $('.list-city').append(listEl)

        // let text = document.getElementById('list-city-item').innerText
        // console.log(text)
        
    }

    // function searchAgain() {
    //     $('#list-city-item').on('click', function() {
    //         let text = document.getElementById('list-city-item').innerText
    //         console.log(text)
    //         getLatLong(text)
    //     })
    // }
})
}
})
