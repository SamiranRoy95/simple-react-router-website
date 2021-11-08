import React from 'react';
import { useState,useEffect } from 'react';
import "./Service.css"
import Course  from './Course';

 const Service = () => {
    const [infos, setInfos]=useState([]);

    useEffect(()=>{
fetch("./data.JSON")
.then(res=>res.json())
.then(data=>setInfos(data))


    });
    return (
        <div>
             <div className="service__container">
               {
                   infos.map(info=><Course info={info} 
                   key={info.key}
                   />)
               }
           </div>
        </div>
    )
}

export default Service;