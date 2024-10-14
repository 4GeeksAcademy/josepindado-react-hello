import React from "react";
import Card from "./Card";

const Cards = () => {
  
  let CardsInfo = [
    { title: "Card #1", description: "Este es el texto de mi Card" },
    { title: "Card #2", description: "Este es el texto de mi Card" },
    { title: "Card #3", description: "Este es el texto de mi Card" },
    { title: "Card #4", description: "Este es el texto de mi Card"},
  ];

  let randomImages = CardsInfo.map(() => {
    let randomSeed = Math.floor(Math.random() * 10000);
    return `https://picsum.photos/seed/${randomSeed}/400/600`;
  });


  return (
    <div className="container">
      <div className="row">
        {CardsInfo.map((value, index, array) => {
          return (
            <div key={index} className="col">
              <Card title={value.title} description={value.description} images={randomImages[index]}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;