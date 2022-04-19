import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/media/Basketball2.png";
import release2 from "../assets/media/bball1.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Early Birds</h2>
          <p className="description">
            For beleving in us early, you get a free mint before date!
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Ball is life"
            title="Backyard Park"
            price={1000.00}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Ball is life"
            title="Home Court"
            price={500.00}
            tag="1094"
            time={2}
          />
        </div>
      </div>
    </div>
  );
}
