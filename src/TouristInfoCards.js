import React from "react";

export function TouristInfoCards() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card p-3 border-success">
        <img
          src="https://a.cdn-hotels.com/gdcs/production47/d430/6c042b50-a6c9-11e8-85aa-0242ac110006.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasglow</h1>
          <p>
            Glasgow es una ciudad portuaria en el río Clyde, en el oeste de las
            Tierras Bajas de Escocia. Es famosa por su arquitectura modernista y
            victoriana, un rico legado de la prosperidad de la ciudad entre los
            siglos XVIII y XX debido al comercio y la construcción de
            embarcaciones.
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
            un rico patrimonio industrial. El sistema de canales del siglo XVIII
            de la zona de conservación de Castlefield evoca los días en que la
            ciudad era un motor textil, y los visitantes pueden seguir su
            historia en el Museo de Ciencia e Industria interactivo.
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
            del siglo XXI con una historia que se remonta a la época romana. En
            su centro se alzan el imponente Palacio del Parlamento, la torre del
            icónico reloj "Big Ben" y la Abadía de Westminster, lugar de las
            coronaciones monárquicas británicas.
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
