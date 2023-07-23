import React from "react";
import Content from "./Content";
import "./One.css";
import "./Cards.css";
import Crousel from "./Crousel";

function Counselling() {
  let passage =
    "Psychotherapy, also called talk therapy, involves talking about your condition and related issues with a mental health professional. During psychotherapy, you learn about your condition and your moods, feelings, thoughts and behavior. With the insights and knowledge you gain, you can learn coping and stress management skills. There are many types of psychotherapy, each with its own approach to improving your mental well-being. Psychotherapy often can be successfully completed in a few months, but in some cases, long-term treatment may be needed. It can take place one-on-one, in a group or with family members. When choosing a therapist, you should feel comfortable and be confident that he or she is capable of listening and hearing what you have to say. Also, it's important that your therapist understands the life journey that has helped shape who you are and how you live in the world.";
 
  return (
    <div className="counselling__container">
      <section className="wave">
        <Content title={"Counselling"} passage={passage} />
      </section>
      <Crousel parser="counsellors"/>
      
    </div>
  );
}

export default Counselling;
