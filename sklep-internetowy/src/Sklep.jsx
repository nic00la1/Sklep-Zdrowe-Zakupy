function Sklep({ produkty, onKup, onDostawa }) {
  return (
    <div className="sklep-container">
      {produkty.map(produkt => (
        <div key={produkt.id} className="card">
          <img 
            src={produkt.zdjecie} 
            alt={produkt.nazwa}
            className="produkt-zdjecie"
          />
          <h3 className="produkt-nazwa">{produkt.nazwa}</h3>
          <p className="produkt-cena">{produkt.cena.toFixed(2)} zł</p>
          <p className="produkt-ilosc">Ilość: {produkt.ilosc}</p>
          
          <div className="przyciski-container">
            {produkt.ilosc > 0 ? (
              <button 
                className="przycisk przycisk-kup" 
                onClick={() => onKup(produkt.id)}
              >
                Kup
              </button>
            ) : (
              <p className="brak-produktu">Brak produktu</p>
            )}
            
            <button 
              className="przycisk przycisk-dostawa" 
              onClick={() => onDostawa(produkt.id)}
            >
              Dostawa
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sklep;