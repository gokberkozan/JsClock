let name = prompt("Adınız nedir?");
myName = document.querySelector("#myName");

myName.innerHTML = name;

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    dayName = days[new Date().getDay()];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + " " + dayName;
    setTimeout(showTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }


