/*const sun = document.getElementById("sun")
const rain = document.getElementById("rain")
const snow = document.getElementById("snow")
const oblaki = document.getElementById("oblaki")
const input = document.getElementById("input")*/
const buttonx = document.getElementById("buttonx")
const output = document.getElementById('output')
const weather = document.getElementById('weather')

buttonx.onclick = function(){
    vivodtext=""
    if (weather.value==""){vivodtext=""}
    else if (weather.value!="" && weather.value=="rainy"){vivodtext="Правильно. Мокни чёрт!"}
    else {vivodtext="НЕПРАВИЛЬНО. ОБЫЧНО ТЫ ТУПОЙ. А СЕГОДНЯ ТУПОЙ И МОКРЫЙ"}
    console.log(vivodtext)
    console.log(weather.value)
    output.textContent= vivodtext
}
