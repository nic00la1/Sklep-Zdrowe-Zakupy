function Sklep({ produkty }) {
  const handleKup = (zdjecie) => {
    // Tworzymy link do pobrania zdjęcia
    const link = document.createElement('a');
    link.href = zdjecie;
    link.download = zdjecie.split('/').pop(); // Pobieramy nazwę pliku
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <button 
            className="przycisk" 
            onClick={() => handleKup(produkt.zdjecie)}
          >
            Kup
          </button>
        </div>
      ))}
    </div>
  );
}

export default Sklep;