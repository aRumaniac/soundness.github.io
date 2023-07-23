import React, { useState } from "react";
import "./Popup.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { validation } from "./Functions";

import "react-toastify/dist/ReactToastify.css";

function Booking({ setTrigger, trigger, _id, name, charge }) {
  let [valid, setValid] = useState(false);
  let [success, setSuccess] = useState(false);
  let [error, setError] = useState("");
  let [Name_, setName_] = useState("");
  let [Email_, setEmail_] = useState("");
  let [Date, setDate] = useState("");
  let [Time, setTime] = useState("");
  let booking__data = {
    booking_id: _id,
    booked: name,
    name: Name_,
    email: Email_,
    date: Date,
    time: Time,
  };
  let product = {name: name, price: charge};
  function validation() {
    let regEx =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!Email_|| !Name_ || !Date || !Time) {
      alert("ERROR: ALL FIELDS ARE REQUIRED. Fill all the queries.");
      setTrigger(false);
    }else if(!regEx.test(Email_)){
      setError("Invalid Email Format");
    }else{
      setValid(true);
    }
  }
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://soundnessapi-rumi.onrender.com/checkout",
      { token, product }
    );
    const { status } = response.data;
    // console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
      axios
        .post("https://soundnessapi-rumi.onrender.com/api/bookings/post", booking__data)
        .then((res) => setSuccess(true))
        .catch((err) => {
          alert("TRY LATER");
          setTrigger(false);
        });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  };
  function booking(){
    validation()
      axios
        .post("https://soundnessapi-rumi.onrender.com/api/bookings/post", booking__data)
        .then((res) => setSuccess(true))
        .catch((err) => {
          alert("TRY LATER");
          setTrigger(false);
        });
  }
  return { trigger } ? (
    <section className="booking__container">
      <div className="btn__close" onClick={() => setTrigger(false)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      {success && 
        <div style={{color:"white", fontSize: "2rem"}}>
        Thank You!!!
    </div>
    }
    {!success && 
      <div className="booking__form">
      <div>
        <p>{name}</p>
      </div>
      <div className="booking__name">
        <input
          onChange={(e) => {
            setName_(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="Name"
          value={Name_}
          id="name"
          required/>
      </div>
      <div className="booking__email">
        <input
          onChange={(e) => {
            setEmail_(e.target.value);
          }}
          type="email"
          name="email"
          placeholder="E-mail"
          value={Email_}
          id="email"
          required
        />
        <p className={error?"red":"error"}>Error:{error}</p>
      </div>
      <div className="booking__datetime">
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          value={Date}
          required
        />
        <input
          onChange={(e) => setTime(e.target.value)}
          type="time"
          value={Time}
          required
        />
      </div>
      {!valid && 
        <div 
        onClick={{charge} === 0? validation : booking}
        className="btn">
          <button type="submit">Proceed</button>
        </div>
      }
      {valid && 
      <StripeCheckout
          style={{marginTop: "12px"}}
          stripeKey="pk_test_51Jre9zSH0POjlF8PeB4KEjCjnTfrqv4aMfWVB0o1DCX04t7jN4WSPIaBoAFfCFG09dhsfwffESWqmIW2DJB9zbI100HZEPBp0c"
          token={handleToken}
          amount={charge * 100}
          name={name}
        />}
    </div>
    }
    </section>
  ) : (
    ""
  );
}

export default Booking;
