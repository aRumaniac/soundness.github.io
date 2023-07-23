import React, { useState, useEffect} from "react";
import Content from "./Content";
import axios from 'axios';
import "./SecondPage.css";
export default function Second__page() {
  let passage = "Mental illnesses are health conditions involving changes in emotion, thinking or behavior (or a combination of these). Mental illnesses are associated with distress and/or problems functioning in social, work or family activities. Mental health conditions are far more common than you think, mainly because people don’t like to, or are scared to, talk about them. A mental health condition isn’t the result of one event. Research suggests multiple, linking causes. Genetics, environment and lifestyle influence whether someone develops a mental health condition. A stressful job or home life makes some people more susceptible, as do traumatic life events. Biochemical processes and circuits and basic brain structure may play a role, too. None of this means that you’re broken or that you, or your family, did something “wrong.” Mental illness is no one’s fault. And for many people, recovery — including meaningful roles in social life, school and work — is possible, especially when you start treatment early and play a strong role in your own recovery process."
  let [Content_, setContent_] = useState([]);
  useEffect(() => 
        {
            axios.get("https://soundnessapi-rumi.onrender.com/api/Mentals/find",{
            headers: {
            'content-type': 'text/json'
            }
            })
            .then(res=>{
              setContent_(res.data);
                
            }).catch(err=>console.log(err));
        }, []);

  return (
    <div className="container">
      <div className="box">
          <div className="content">
            <Content title={'MENTAL HEALTH'} passage={passage}/>
            <div className="topic__detail__nav">
            {Content_.map(content => {
              return(
                <section key={content._id}>
                <a style={{textDecoration:"none", color:"black"}}
                href="#Causes" >
                  <h1 className="home__title">{content.title}</h1>
                </a>
                <Content passage={content.Mental}/>
                </section>
              )
            })}
            </div>
          </div>
      </div>
    </div>
  );
}
