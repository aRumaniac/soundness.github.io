import React from 'react';
import Booking from "./Booking";
import Feedback from "./Feedback";

function Trigger({trigger, feedback_trigger, setTrigger, setFeedback_trigger, _id, charge, name}) {
    
  return (
    <div>
        {trigger && (
        <Booking
          id="payroll"
          setTrigger={setTrigger}
          trigger={trigger}
          _id={_id}
          charge={charge}
          name={name}
        />
      )}
      {feedback_trigger && (
        <Feedback
          id="feedback"
          setFeedback_trigger={setFeedback_trigger}
          feedback_trigger={feedback_trigger}
          _id={_id}
        />
      )}
    </div>
  )
}

export default Trigger