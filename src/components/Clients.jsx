import React from "react";
import clients1 from "../assets/btc2.jpg";
import clients2 from "../assets/Nike2.png";
import clients3 from "../assets/media/ethlogo.png";
import clients4 from "../assets/media/Adias.png";


export default function Clients() {
  const data = [clients1, clients2, clients3, clients4,];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
