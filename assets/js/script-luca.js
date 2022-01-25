window.addEventListener('load', onLoad)

function onLoad(){

    let buttonMeteo = document.querySelector('#getmeteo');
    buttonMeteo.addEventListener('click', getMeteo);

    setInterval(function () {

        oraclock = new Date().getHours();
        minuticlock = new Date().getMinutes();
        secondiclock = new Date().getSeconds();

        var orario1 = document.querySelector(".orario:nth-child(1)");
        var orario2 = document.querySelector(".orario:nth-child(2)");
        var orario3 = document.querySelector(".orario:nth-child(3)");
        var orario4 = document.querySelector(".orario:nth-child(4)");
    
        orario1.innerHTML = oraclock > 9 ? oraclock.toString()[0] : "0";
        orario2.innerHTML = oraclock < 10 ? oraclock.toString()[0] : oraclock.toString()[1];
        orario3.innerHTML = minuticlock > 9 ? minuticlock.toString()[0] : "0";
        orario4.innerHTML = minuticlock < 10 ? minuticlock.toString()[0] : minuticlock.toString()[1];
    

    }, 100 )

}

function getMeteo(){
    
    let citta = document.getElementById('citta').value
    //fetch
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ citta +"&lang=it&appid=1b0eddc18f2ed59be121135f5dc471a8")
    .then(response => response.json())
    .then(data => {
        console.log('risposta', data)
         
        let cityName = data.name
        document.querySelector('#city-name').innerText = cityName

        let temperatura = data.main.temp;
        document.querySelector('#temperatura').innerText ='temperatura: ' + temperatura

        let min = data.main.temp_min
        document.querySelector('#min').innerText = min + '/'

        let max = data.main.temp_max
        document.querySelector('#max').innerText = max
        
        let umidità = data.main.humidity;
        document.querySelector('#umidita').innerText = 'umidità: ' + umidità + '%'

        let weather = data.weather[0]
        let descrizione = weather.description
        document.querySelector('#descrizione').innerText ='descrizione : ' +descrizione
        
        let pressione = data.main.pressure;
        document.querySelector('#pressione').innerText = 'pressione :' +pressione

        let contenitore = document.querySelector(".display-meteo").parentElement
        console.log(contenitore)

        if (descrizione == 'cielo sereno') {
            contenitore.className = '';
            contenitore.classList.add("bg-cielo-sereno")
            contenitore.classList.add("contenitore")
            
        }else if (descrizione == 'cielo coperto') {
            contenitore.className = '';
            contenitore.classList.add("bg-nubi-sparse")
            contenitore.classList.add("contenitore")
            
        }else{
            contenitore.className = '';
            contenitore.classList.add("bg-cover")
            contenitore.classList.add("contenitore")

        }

        
    })

    


}