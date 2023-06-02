function aktualizujCzas() {
    var dzisiaj = new Date();
    
    var dni = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    var miesiace = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth();
    var rok = dzisiaj.getFullYear();
    var godzina = dzisiaj.getHours();
    var minuty = dzisiaj.getMinutes();
    var sekundy = dzisiaj.getSeconds();
    
    var nazwaDnia = dni[dzisiaj.getDay()];
    var nazwaMiesiaca = miesiace[miesiac];
    
    // Dodaj zero przed jednocyfrowymi godzinami, minutami i sekundami
    if (godzina < 10) {
      godzina = "0" + godzina;
    }
    if (minuty < 10) {
      minuty = "0" + minuty;
    }
    if (sekundy < 10) {
      sekundy = "0" + sekundy;
    }
    
    var czas = godzina + ":" + minuty + ":" + sekundy;
    var data = nazwaDnia + ", " + dzien + " " + nazwaMiesiaca + " " + rok;
    
    document.getElementById("czas").innerHTML = czas;
    document.getElementById("data").innerHTML = data;
  }
  
  setInterval(aktualizujCzas, 1000);