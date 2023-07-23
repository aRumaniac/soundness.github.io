import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import Card from "./Card";

function Crousel({ parser }) {
  let [Parser, setParser] = useState();
  useEffect(async () => {
    await axios
      .get(`https://soundnessapi-rumi.onrender.com/api/${parser}/find`, {
        headers: {
          "content-type": "text/json",
        },
      })
      .then((res) => {
        setParser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2 style={{textAlign:"center"}}>Offline:</h2>
      <Carousel>
        {Parser &&
          Parser.filter((parser) => parser.Mode === "Offline").map((pars) => {
            return <Card key={pars._id} pars={pars} />;
          })}
      </Carousel>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{textAlign:"center"}}>Online:</h2>
      <Carousel>
        {Parser &&
          Parser.filter((parser) => parser.Mode === "Online").map((pars) => {
            return <Card key={pars._id} pars={pars} />;
          })}
      </Carousel>
    </>
  );
}

export default Crousel;
