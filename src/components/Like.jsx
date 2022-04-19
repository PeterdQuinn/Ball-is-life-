import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">1st basketball lovers nft!</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live!.
          </p>
          <p className="description">
            Our Nft will hold utility from staking and add value to your nft as it
            grows in poplularity as well as Vip Acess to drops.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">An NFT for the ages!</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Recive bang for your buck
            let your nft work for you! not for your nft!
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recive what you will have in your wallet!
          </p>
        </div>
      </div>
    </div>
  );
}
