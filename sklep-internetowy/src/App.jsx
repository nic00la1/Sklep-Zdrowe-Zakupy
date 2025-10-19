import './App.css';
import Sklep from './Sklep';
import { useState } from 'react';

function App() {
  const [portfel, setPortfel] = useState(100);
  
  // Funkcja sprawdzająca stan portfela
  const sprawdzStanPortfela = (nowyPortfel) => {
    if (nowyPortfel <= 0) {
      alert("💸 Portfel jest pusty! Nie możesz już nic kupić.");
    } else if (nowyPortfel <= 20 && nowyPortfel > 10) {
      alert("⚠️ Uwaga! Zostało Ci mało pieniędzy w portfelu!\n\n" +
            `Pozostało: ${nowyPortfel.toFixed(2)} zł`);
    } else if (nowyPortfel <= 10 && nowyPortfel > 0) {
      alert("🚨 Krytycznie niski stan portfela!\n\n" +
            `Pozostało tylko: ${nowyPortfel.toFixed(2)} zł`);
    }
  };
  
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
    
    if (!produkt) {
      alert("❌ Produkt nie został znaleziony!");
      return;
    }
    
    if (produkt.ilosc <= 0) {
      alert(`❌ Brak produktu "${produkt.nazwa}" w magazynie!\n\n💡 Skorzystaj z opcji "Dostawa", aby uzupełnić zapasy.`);
      return;
    }
    
    if (portfel < produkt.cena) {
      const brakuje = (produkt.cena - portfel).toFixed(2);
      alert(`💰 Nie stać Cię na "${produkt.nazwa}"!\n\n` +
            `Cena produktu: ${produkt.cena.toFixed(2)} zł\n` +
            `Twój portfel: ${portfel.toFixed(2)} zł\n` +
            `Brakuje Ci: ${brakuje} zł`);
      return;
    }
    
    // Jeśli wszystko OK - dokonaj zakupu
    const nowyPortfel = portfel - produkt.cena;
    setProdukty(prev => prev.map(p => 
      p.id === produktId ? { ...p, ilosc: p.ilosc - 1 } : p
    ));
    setPortfel(nowyPortfel);
    
    // Alert o udanym zakupie
    alert(`✅ Zakupiono "${produkt.nazwa}" za ${produkt.cena.toFixed(2)} zł!\n\n` +
          `💰 Pozostało w portfelu: ${nowyPortfel.toFixed(2)} zł`);
    
    // Sprawdź stan portfela po zakupie
    sprawdzStanPortfela(nowyPortfel);
  };

  // Funkcja dostawy produktu (przywraca początkową ilość)
  const handleDostawa = (produktId) => {
    const poczatkowyProdukt = poczatkoweProdukty.find(p => p.id === produktId);
    const aktualnyProdukt = produkty.find(p => p.id === produktId);
    
    if (!poczatkowyProdukt || !aktualnyProdukt) {
      alert("❌ Wystąpił błąd podczas dostawy!");
      return;
    }
    
    if (aktualnyProdukt.ilosc >= poczatkowyProdukt.ilosc) {
      alert(`📦 Produkt "${aktualnyProdukt.nazwa}" jest już w pełni zaopatrzony!\n\n` +
            `Ilość w magazynie: ${aktualnyProdukt.ilosc} szt.`);
      return;
    }
    
    setProdukty(prev => prev.map(p => 
      p.id === produktId ? { ...p, ilosc: poczatkowyProdukt.ilosc } : p
    ));
    
    alert(`🚚 Dostawa zakończona!\n\n` +
          `Produkt "${aktualnyProdukt.nazwa}" został uzupełniony do ${poczatkowyProdukt.ilosc} sztuk.`);
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
