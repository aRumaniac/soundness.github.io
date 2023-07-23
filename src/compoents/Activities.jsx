import React, { useEffect, useState, useRef } from "react";
import "./One.css";
import Content from "./Content";
import "./Cards.css";
import Crousel from "./Crousel";

function Activities() {
  let passage =
    "While worry and anxiety are nothing new, unique shifts in technology and the ways we interact with and relate to the world around us have had a psychological impact. You may have found it difficult to maintain meaningful connections with the people in your life. Or maybe you’re beginning to think it’s impossible to juggle all your responsibilities at once. Add concerns like these to the general sense of uneasiness that comes with living in these uncertain times, and it becomes easy to feel overwhelmed. Establishing a routine that supports your psychological well-being can make all the difference in the world. Discover some straightforward ways to put yourself first as we explore five mental health activities for adults, and take charge of your personal wellness.";

  return (
    <div className="counselling__container">
      <section className="wave">
        <Content title={"Activity"} passage={passage} />
      </section>
      <Crousel parser="activities"/>
    </div>
  );
}

export default Activities;
