function obliczZapotrzebowanie() {
    
    var wiek = parseInt(document.getElementById("wiek").value);
    var plec = document.getElementById("plec").value.toUpperCase();
    var waga = parseFloat(document.getElementById("waga").value);
    var wzrost = parseFloat(document.getElementById("wzrost").value);
    var aktywnosc = parseFloat(document.getElementById("aktywnosc").value);

    var zapotrzebowanie = 0;
    if (plec === "M") {
      zapotrzebowanie = (10 * waga) + (6.25 * wzrost) - (5 * wiek) + 5;
    } else if (plec === "K") {
      zapotrzebowanie = (10 * waga) + (6.25 * wzrost) - (5 * wiek) - 161;
    }

    var wspolczynnikAktywnosci = [1.2, 1.375, 1.55, 1.725, 1.9];
    var indeksAktywnosci = Math.min(Math.max(aktywnosc - 1, 0), wspolczynnikAktywnosci.length - 1);
    zapotrzebowanie *= wspolczynnikAktywnosci[indeksAktywnosci];

    document.getElementById("wynik").value = zapotrzebowanie.toFixed(2) + " kcal";
  }