import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sklep from './Sklep'

function App() {
  const [count, setCount] = useState(0)
  const produkty = [
    { id: 1, nazwa: "Mleko", cena: 5.50, zdjecie: "/mleko.jpg" },
    { id: 2, nazwa: "Chleb", cena: 3.20, zdjecie: "/chleb.png" },
    { id: 3, nazwa: "Masło", cena: 7.99, zdjecie: "/maslo.jpg" },
    { id: 4, nazwa: "Ser", cena: 12.50, zdjecie: "/ser.jpg" },
    { id: 5, nazwa: "Jajka", cena: 8.00, zdjecie: "/jajka.jpg" },
    { id: 6, nazwa: "Szynka", cena: 15.30, zdjecie: "/szynka.jpg" },
    { id: 7, nazwa: "Pomidor", cena: 4.10, zdjecie: "/pomidor.jpg" },
    { id: 8, nazwa: "Ogórek", cena: 3.80, zdjecie: "/ogorek.jpg" },
    { id: 9, nazwa: "Jogurt", cena: 6.20, zdjecie: "/jogurt.jpeg" },
    { id: 10, nazwa: "Kawa", cena: 18.99, zdjecie: "/kawa.jpeg" },
    { id: 11, nazwa: "Herbata", cena: 9.50, zdjecie: "/herbata.webp" },
    { id: 12, nazwa: "Cukier", cena: 4.70, zdjecie: "/cukier.png" },
    { id: 13, nazwa: "Mąka", cena: 3.90, zdjecie: "/maka.webp" },
    { id: 14, nazwa: "Olej", cena: 11.20, zdjecie: "/olej.webp" },
    { id: 15, nazwa: "Ryż", cena: 7.40, zdjecie: "/ryz.png" },
    { id: 16, nazwa: "Makaron", cena: 5.80, zdjecie: "/makaron.jpg" },
    { id: 17, nazwa: "Sok", cena: 6.99, zdjecie: "/sok.webp" },
    { id: 18, nazwa: "Woda", cena: 2.50, zdjecie: "/woda.jpg" },
    { id: 19, nazwa: "Czekolada", cena: 8.30, zdjecie: "/czekolada.webp" },
    { id: 20, nazwa: "Ciastka", cena: 10.00, zdjecie: "/ciastka.jpeg" }
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ textAlign: 'center' }}>Sklep Nicola</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Sklep produkty={produkty} />
    </>
  )
}

export default App
