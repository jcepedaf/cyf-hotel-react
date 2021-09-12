import React from "react";
import TouristInfoCards from "./TouristInfoCards";

const cities = [
  {
    name: "Glasglow",
    description:
      "Glasgow es una ciudad portuaria en el río Clyde, en el oeste de las Tierras Bajas de Escocia.",
    url: "http://peoplemakeglasgow.com",
    img:
      "https://cdn2.civitatis.com/reino-unido/glasgow/galeria/header/universidad-glasgow.jpg"
  },
  {
    name: "Manchester",
    description:
      "Manchester es una importante ciudad del noroeste de Inglaterra con un rico patrimonio industrial.",
    url: "http://visitmanchester.com",
    img: "https://img.bekiaviajes.com/articulos/portada/74000/74570-h.jpg"
  },
  {
    name: "London",
    description:
      "Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana.",
    url: "http://visitlondon.com",
    img:
      "https://img3.wallspic.com/originals/1/1/8/3/93811-el_puente_de_la_torre-hito-torre-la_torre_de_londres-noche-2560x1600.jpg"
  }
];

const InfoCities = () => {
  return cities.map(city => {
    return (
      <TouristInfoCards
        name={city.name}
        description={city.description}
        url={city.url}
        img={city.img}
      />
    );
  });
};

export default InfoCities;
