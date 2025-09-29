import './App.css';
import Sklep from './Sklep';

function App() {
  const produkty = [
    { id: 1, nazwa: "Mleko", cena: 5.50, zdjecie: "/mleko.jpg" },
    { id: 2, nazwa: "Chleb", cena: 3.20, zdjecie: "/chleb.png" },
    { id: 3, nazwa: "Masło", cena: 8.90, zdjecie: "/maslo.jpg" },
    { id: 4, nazwa: "Ser żółty", cena: 15.50, zdjecie: "/ser.jpeg" },
    { id: 5, nazwa: "Jajka", cena: 12.00, zdjecie: "/jajka.jpg" },
    { id: 6, nazwa: "Jogurt naturalny", cena: 4.20, zdjecie: "/jogurt.png" },
    { id: 7, nazwa: "Banany", cena: 6.80, zdjecie: "/banany.jpg" },
    { id: 8, nazwa: "Jabłka", cena: 4.50, zdjecie: "/jablka.jpg" },
    { id: 9, nazwa: "Pomidory", cena: 8.90, zdjecie: "/pomidory.jpg" },
    { id: 10, nazwa: "Ogórki", cena: 5.20, zdjecie: "/ogorki.jpg" },
    { id: 11, nazwa: "Marchew", cena: 3.80, zdjecie: "/marchewka.jpg" },
    { id: 12, nazwa: "Ziemniaki", cena: 2.50, zdjecie: "/ziemniaki.jpg" },
    { id: 13, nazwa: "Kurczak", cena: 18.90, zdjecie: "/kurczak.jpg" },
    { id: 14, nazwa: "Szynka", cena: 24.50, zdjecie: "/szynka-z-indyka.jpg" },
    { id: 15, nazwa: "Ryż", cena: 4.80, zdjecie: "/ryz.jpg" },
    { id: 16, nazwa: "Makaron", cena: 3.50, zdjecie: "/makaron.jpg" },
    { id: 17, nazwa: "Oliwa z oliwek", cena: 16.90, zdjecie: "/oliwa-z-oliwek.jpg" },
    { id: 18, nazwa: "Sól", cena: 1.20, zdjecie: "/sol.jpeg" },
    { id: 19, nazwa: "Pieprz", cena: 2.80, zdjecie: "/pieprz.jpg" },
    { id: 20, nazwa: "Kawa", cena: 22.50, zdjecie: "/kawa.png" },
    { id: 21, nazwa: "Herbata", cena: 12.90, zdjecie: "/herbata.jpg" },
    { id: 22, nazwa: "Czekolada", cena: 8.50, zdjecie: "/czekolada.jpg" }
  ];

  return (
    <div className="app">
      <h1>Sklep "Zdrowe Zakupy"</h1>
      <Sklep produkty={produkty} />
    </div>
  );
}

export default App;
