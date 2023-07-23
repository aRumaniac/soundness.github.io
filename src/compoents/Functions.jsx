import axios from "axios";
import { formDataA, formDataC } from "./Data";

let valid = false;
let regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
let ID = /^[0-9a-zA-Z]+$/;

function handleSubmitC() {
  validationC();
  if(valid){
  axios
    .post("https://soundnessapi-rumi.onrender.com/api/counsellors/post", formDataC)
    .then((res) => alert("THANK YOU!!!"))
    .catch((err) => alert("TRY AGAIN LATER!!!"));
  }
  return valid;
}
function handleSubmitA() {
  validationA();
  if (valid) {
    axios
      .post("https://soundnessapi-rumi.onrender.com/activities/post", formDataA)
      .then((res) => alert("THANK YOU!!!"))
      .catch((err) => alert("TRY AGAIN LATER!!!"));
    }
    return valid;
}

function validationA() {
  if (!regEx.test(formDataA.Email)) {
    console.log(regEx.test(formDataA.Email));
    console.log(formDataA.Email);
    alert("Invalid Email Format");
  }else if(formDataA.contact.length !== 10){
    alert("Invalid Number Format");
  } else if(!formDataA.EstablishmentID.match(ID)){
    console.log("match")
    alert("Invalid EstablishmentID Format");
  }else {
    valid = true;
  }
}
function validationC() {
 
  if (!regEx.test(formDataC.Email)) {
    alert("Invalid Email Format");
  } else if(formDataC.contact.length !== 10){
    alert("Invalid Number Format");
  }else if(!formDataC.MedicalLicense.match(ID)){
    alert("Invalid MedicalLicense Format");
  }else {
    valid = true;
  }
}

export { handleSubmitA, handleSubmitC };
