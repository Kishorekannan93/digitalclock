let ampm = document.getElementById('ampm')

function displayTime(){
    let dateTime = new Date()
    let hr = (dateTime.getHours())
    let min =padzero(dateTime.getMinutes())
    let sec = padzero(dateTime.getSeconds())
    let date = padzero(dateTime.getDate())
    let day = dateTime.getMonth()
    let year = dateTime.getFullYear()
    if(hr>12){
        hr = hr -12
        ampm.innerHTML = 'PM'
    }
    document.getElementById('hours').innerHTML = padzero(hr)
    document.getElementById('min').innerHTML = min
    document.getElementById('sec').innerHTML = sec
    document.getElementById('date').innerHTML = date
    document.getElementById('day').innerHTML = day
    document.getElementById('year').innerHTML = year
    function padzero(num){
        return num<10?'0'+num:num

    }
}

setInterval(displayTime,500)