import './App.css';
import Sklep from './Sklep';
import { useState } from 'react';

function App() {
  const [portfel, setPortfel] = useState(100);
  
  const poczatkoweProdukty = [
    { id: 1, nazwa: "Mleko", cena: 5.50, zdjecie: "/mleko.jpg", ilosc: 10 },
    { id: 2, nazwa: "Chleb", cena: 3.20, zdjecie: "/chleb.png", ilosc: 15 },
    { id: 3, nazwa: "Masło", cena: 8.90, zdjecie: "/maslo.jpg", ilosc: 8 },
    { id: 4, nazwa: "Ser żółty", cena: 15.50, zdjecie: "/ser.jpeg", ilosc: 5 },
    { id: 5, nazwa: "Jajka", cena: 12.00, zdjecie: "/jajka.jpg", ilosc: 12 },
    { id: 6, nazwa: "Jogurt naturalny", cena: 4.20, zdjecie: "/jogurt.png", ilosc: 20 },
    { id: 7, nazwa: "Banany", cena: 6.80, zdjecie: "/banany.jpg", ilosc: 25 },
    { id: 8, nazwa: "Jabłka", cena: 4.50, zdjecie: "/jablka.jpg", ilosc: 30 },
    { id: 9, nazwa: "Pomidory", cena: 8.90, zdjecie: "/pomidory.jpg", ilosc: 18 },
    { id: 10, nazwa: "Ogórki", cena: 5.20, zdjecie: "/ogorki.jpg", ilosc: 22 },
    { id: 11, nazwa: "Marchew", cena: 3.80, zdjecie: "/marchewka.jpg", ilosc: 35 },
    { id: 12, nazwa: "Ziemniaki", cena: 2.50, zdjecie: "/ziemniaki.jpg", ilosc: 40 },
    { id: 13, nazwa: "Kurczak", cena: 18.90, zdjecie: "/kurczak.jpg", ilosc: 6 },
    { id: 14, nazwa: "Szynka", cena: 24.50, zdjecie: "/szynka-z-indyka.jpg", ilosc: 4 },
    { id: 15, nazwa: "Ryż", cena: 4.80, zdjecie: "/ryz.jpg", ilosc: 25 },
    { id: 16, nazwa: "Makaron", cena: 3.50, zdjecie: "/makaron.jpg", ilosc: 30 },
    { id: 17, nazwa: "Oliwa z oliwek", cena: 16.90, zdjecie: "/oliwa-z-oliwek.jpg", ilosc: 7 },
    { id: 18, nazwa: "Sól", cena: 1.20, zdjecie: "/sol.jpeg", ilosc: 50 },
    { id: 19, nazwa: "Pieprz", cena: 2.80, zdjecie: "/pieprz.jpg", ilosc: 45 },
    { id: 20, nazwa: "Kawa", cena: 22.50, zdjecie: "/kawa.png", ilosc: 3 },
    { id: 21, nazwa: "Herbata", cena: 12.90, zdjecie: "/herbata.jpg", ilosc: 8 },
    { id: 22, nazwa: "Czekolada", cena: 8.50, zdjecie: "/czekolada.jpg", ilosc: 12 }
  ];

  const [produkty, setProdukty] = useState(poczatkoweProdukty);

  // Funkcja kupowania produktu
  const handleKup = (produktId) => {
    const produkt = produkty.find(p => p.id === produktId);
    if (produkt && produkt.ilosc > 0 && portfel >= produkt.cena) {
      setProdukty(prev => prev.map(p => 
        p.id === produktId ? { ...p, ilosc: p.ilosc - 1 } : p
      ));
      setPortfel(prev => prev - produkt.cena);
    }
  };

  // Funkcja dostawy produktu (przywraca początkową ilość)
  const handleDostawa = (produktId) => {
    const poczatkowyProdukt = poczatkoweProdukty.find(p => p.id === produktId);
    if (poczatkowyProdukt) {
      setProdukty(prev => prev.map(p => 
        p.id === produktId ? { ...p, ilosc: poczatkowyProdukt.ilosc } : p
      ));
    }
  };

  return (
    <div className="app">
      <h1>Sklep "Zdrowe Zakupy"</h1>
      <div className="portfel">
        <strong>Portfel: {portfel.toFixed(2)} zł</strong>
      </div>
      <Sklep 
        produkty={produkty} 
        onKup={handleKup}
        onDostawa={handleDostawa}
      />
    </div>
  );
}

export default App;
