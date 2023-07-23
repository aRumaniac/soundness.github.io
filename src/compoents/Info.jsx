import React, {useState, useEffect} from "react";
import "./Info.css";
import axios from 'axios';
import Content from "./Content";
import Gmaps from './Gmaps';

function Info() {
  let [Infos, setInfos] = useState();
  useEffect(() => 
  {
      axios.get("https://soundnessapi-rumi.onrender.com/api/contents/find",{
      headers: {
      'content-type': 'text/json'
      }
      })
      .then(res=>{
        setInfos(res.data);
          
      }).catch(err=>console.log(err));
  }, []);
  return (
    <>
    <div className="info__container">
      {Infos && Infos.map(info => {
        return(
          <Content key={info._id} title={info.title} passage={info.content}/>
        )
      })}
    </div>
    <div 
    style={{width: "85%", margin: "0 auto"}}>
      <h1 className="content__title">Campaigns</h1>
      <Gmaps/>
  </div>
  </>
  );
}

export default Info;
