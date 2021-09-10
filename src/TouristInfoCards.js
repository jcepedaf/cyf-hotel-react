import React from "react";

export function TouristInfoCards() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card p-3 border-success">
        <img
          src="https://cdn2.civitatis.com/reino-unido/glasgow/galeria/header/universidad-glasgow.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasglow</h1>
          <p>
            Glasgow es una ciudad portuaria en el río Clyde, en el oeste de las
            Tierras Bajas de Escocia.
          </p>
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>

      <div className="card p-3 border-success">
        <img
          src="https://img.bekiaviajes.com/articulos/portada/74000/74570-h.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            Manchester es una importante ciudad del noroeste de Inglaterra con
            un rico patrimonio industrial.
          </p>
          <a href="http://visitmanchester.com" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>

      <div className="card p-3 border-success">
        <img
          src="https://img3.wallspic.com/originals/1/1/8/3/93811-el_puente_de_la_torre-hito-torre-la_torre_de_londres-noche-2560x1600.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>London</h1>
          <p>
            Londres, la capital de Inglaterra y del Reino Unido, es una ciudad
            del siglo XXI con una historia que se remonta a la época romana.
          </p>
          <a href="http://visitlondon.com" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
