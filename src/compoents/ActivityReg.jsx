import React from "react";
import { formDataA } from "./Data";
import { handleSubmitA } from "./Functions";
import "./Reg.css";

function ActivityReg() {
  return (
    <div className="reg__container">
      <header>Activity Registration</header>

      <form action={handleSubmitA ? "/activity":"#"} onSubmit={handleSubmitA}>
        <div className="form first">
          <div className="details personal">
            <span className="title">Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Name</label>
                <input 
                onChange={(e) => formDataA.Name=e.target.value}
                type="text" 
                placeholder="Enter your name" 
                required />
              </div>

              <div className="input-field">
                <label>Type</label>
                <select 
                defaultValue={"DEFAULT"}
                onClick={(e) => formDataA.Mode = e.target.value}
                required>
                  <option value={"DEFAULT"} disabled>
                    Select Mode
                  </option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>
              <div className="input-field">
                <label>Email</label>
                <input 
                onChange={(e) => formDataA.Email = e.target.value}
                type="text" 
                placeholder="Enter your email" 
                required />
              </div>

              <div className="input-field">
                <label>Mobile Number</label>
                <input
                  onChange={(e) => formDataA.contact = e.target.value}
                  type="number"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              <div className="input-field">
                <label>Charge</label>
                <input 
                onChange={(e) => formDataA.charge = e.target.value}
                type="number"
                placeholder="Enter Charge" 
                min="0" 
                required />
              </div>
              <div className="input-field">
                <label>Establishment ID</label>
                <input
                  style={{textTransform:"uppercase"}}
                  onChange={(e) => formDataA.EstablishmentID = e.target.value.toUpperCase}
                  type="text"
                  maxLength="12"
                  placeholder="Enter your Establishment ID"
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
                    onChange={(e) => formDataA.Street = e.target.value}
                    type="text"
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>City</label>
                  <input
                    onChange={(e) => formDataA.City = e.target.value}
                    type="text"
                    placeholder="Enter block number"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Zipcode</label>
                  <input
                    onChange={(e) => formDataA.Zipcode = e.target.value}
                    type="number"
                    placeholder="Enter ward number"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>District</label>
                  <input
                    onChange={(e) => formDataA.District = e.target.value}
                    type="text"
                    placeholder="Enter your district"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>State</label>
                  <input 
                  onChange={(e) => formDataA.State = e.target.value }
                  type="text" 
                  placeholder="Enter your state" 
                  required />
                </div>
                <div className="input-field">
                  <label>Country</label>
                  <input 
                  onChange={(e) => formDataA.Country = e.target.value}
                  type="text" 
                  placeholder="Enter nationality" 
                  required />
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

export default ActivityReg;

// location, charge, name, email, number, image
