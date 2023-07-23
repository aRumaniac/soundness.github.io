import React, {useState} from "react";
import "./Cards.css";
import Trigger from "./Trigger";

function CButton({_id, charge, name}) {
  let [trigger, setTrigger] = useState(false);
  let [feedback_trigger, setFeedback_trigger] = useState(false); 
  return (
    <section>
    <div>
      <a href="#payrole" className="card__button">
        <button 
        onClick={() => {
          setTrigger(true);
        }}
        className="btn">
          Book Now
        </button>
      </a>
      <a href="#feedback" className="card__button">
        <button 
        onClick={() => {
          setFeedback_trigger(true)
        }}
        className="btn">
          Feedback
        </button>
      </a>
    </div>
    <Trigger
    trigger={trigger}
    setTrigger={setTrigger}
    setFeedback_trigger={setFeedback_trigger}
    feedback_trigger={feedback_trigger}
    _id={_id}
    charge={charge}
    name={name}
    />
    </section>
  );
}

export default CButton;
