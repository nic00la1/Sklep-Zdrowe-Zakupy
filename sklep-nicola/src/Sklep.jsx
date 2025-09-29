import React from 'react';

const Sklep = ({ produkty }) => {
  return (
    <div className="produkty-grid">
      {produkty.map((produkt) => (
        <div className="Card" key={produkt.id}>
          <b>{produkt.nazwa}</b>
          <div>{produkt.cena.toFixed(2)} zł</div>
          <img src={produkt.zdjecie} alt={produkt.nazwa} width={150} height={100} />
          <a
            className="przycisk"
            href={produkt.zdjecie}
            download
          >
            Kup
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sklep;
