import React, {useState} from "react";
import { formDataC } from "./Data";
import { handleSubmitC } from "./Functions";
import "./Reg.css";

function CounsellorReg() {
  let [Mode, setMode] = useState();
  return (
    <div className="reg__container">
      <header>Counsellor Registration</header>

      <form action={handleSubmitC?"/counsellors":"#"} onSubmit={handleSubmitC}>
        <div className="form first">
          <div className="details personal">
            <span className="title">Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Name</label>
                <input
                  onChange={(e) => (formDataC.Name = e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-field">
                <label>Type</label>
                <select 
                defaultValue={"DEFAULT"}
                onClick={(e) => formDataC.Mode = e.target.value}
                required>
                  <option value={"DEFAULT"} disabled>
                    Select Mode
                  </option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>
              {Mode === "Online" && (
                <div className="input-field">
                  <label>Meet Link</label>
                  <input
                    onChange={(e) => (formDataC.MeetLink = e.target.value)}
                    type="text"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              )}
              <div className="input-field">
                <label>Email</label>
                <input
                  onChange={(e) => (formDataC.Email = e.target.value)}
                  type="text"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="input-field">
                <label>Mobile Number</label>
                <input
                  onChange={(e) => (formDataC.contact = e.target.value)}
                  type="number"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              <div className="input-field">
                <label>Charge</label>
                <input
                  onChange={(e) => (formDataC.charge = e.target.value)}
                  type="number"
                  placeholder="Enter Charge"
                  min="0"
                  required
                />
              </div>
              <div className="input-field">
                <label>Medical License</label>
                <input
                  onChange={(e) => (formDataC.MedicalLicense = e.target.value)}
                  type="text"
                  placeholder="Enter your Medical License"
                  required
                />
              </div>
            </div>
          </div>

          <div className="reg__details ID">
            <div className="details address">
              <span className="title">Address Details</span>
              <div className="fields">
                <div className="input-field">
                  <label>Street</label>
                  <input
                    onChange={(e) => (formDataC.Street = e.target.value)}
                    type="text"
                    placeholder="Street"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>City</label>
                  <input
                    onChange={(e) => (formDataC.City = e.target.value)}
                    type="text"
                    placeholder="Enter block number"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Zipcode</label>
                  <input
                    onChange={(e) => (formDataC.Zipcode = e.target.value)}
                    type="number"
                    placeholder="Enter ward number"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>District</label>
                  <input
                    onChange={(e) => (formDataC.District = e.target.value)}
                    type="text"
                    placeholder="Enter your district"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>State</label>
                  <input
                    onChange={(e) => (formDataC.State = e.target.value)}
                    type="text"
                    placeholder="Enter your state"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Country</label>
                  <input
                    onChange={(e) => (formDataC.Country = e.target.value)}
                    type="text"
                    placeholder="Enter nationality"
                    required
                  />
                </div>
              </div>
            </div>
            <button className="sumbit">
              <span className="btnText">Submit</span>
              <i className="uil uil-navigator"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CounsellorReg;
