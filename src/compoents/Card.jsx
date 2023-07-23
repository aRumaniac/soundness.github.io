import React from "react";
import CButton from "./CButton";
import "./Cards.css";

function Card({ pars }) {
  return (
    <section className="pars__container" key={pars._id}>
      <div className="pars__image">
        <img src={pars.image} alt="" />
      </div>
      <div className="pars__subcontainer">
        <h3 style={{ textDecoration: "underline" }}>{pars.Name}</h3>
        <p>
          <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
          <i className="fa fa-inr" aria-hidden="true"></i>
          {pars.charge}
        </p>
        <p style={{ textTransform: "lowercase" }}>
          <i className="fa fa-envelope"></i>
          {pars.Email || pars.contact}
        </p>
        <p>
          <i className="fa fa-address-card"></i>
          {pars.Street}, {pars.City}, {pars.Country}
        </p>
        {pars.Mode === "Offline" && <CButton
          _id={pars.EstablishmentID || pars.MedicalLicense}
          charge={pars.charge}
          name={pars.Name}

          />}
        {pars.Mode === "Online" && 
        <button className="playBtn">
          <a style={{textDecoration: "none", padding: "50px 12px", fontSize: "1.1rem"}} href="https://skribbl.io/"> Play </a>
        </button>}
      </div>
    </section>
  );
}

export default Card;
