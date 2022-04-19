import React from "react";
import Card from "./Card";
import super1 from "../assets/media/basketball-icon1.webp";
import super2 from "../assets/media/basketball-icon1.webp";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Ball is life tour",
      title: "Rucker park",
      price: 100.00,
      tag: 12983,
      time: 1,
    },
    {
      image: super2,
      series: "Ball is life",
      title: "Vinice",
      price: 500.00,
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "Ball is life",
      title: "Coney Island",
      price: 300.00,
      tag: 12983,
      time: 1,
    },
    {
      image: super4,
      series: "Ball is life",
      title: "Brooklyns finest",
      price: 500.00,
      tag: 12983,
      time: 1,
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">A special auction</h2>
        <p className="description">
         For the persons or person that holds more than  will recieve specail discounts and offers
        and also exslusive rights for future nfts air drops!<a href="#">OpenSea</a>.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
