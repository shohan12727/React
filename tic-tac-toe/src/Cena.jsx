import React from "react";
import Jhon from "./assets/cena.jpg";
const Cena = () => {
  const person = {
    name: "Jhon Cena",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };

  return (
    <div className="m-20">
      <div style={person.theme}>
        <h1>Name: {person.name}</h1>
        <img className="w-64 h-auto mx-auto" src={Jhon} alt="cena" />
      </div>
      <h1 className="text-2xl text-center font-bold text-white-600">
        {person.name} was my chilhood hero
      </h1>
    </div>
  );
};

export default Cena;
