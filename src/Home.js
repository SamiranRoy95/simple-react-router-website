import React from 'react';
import Course  from './Course';
import { useState,useEffect } from 'react';
import "./Home.css";


const Home = () => {
    const [infos, setInfos]=useState([]);

    useEffect(()=>{
fetch("./data.JSON")
.then(res=>res.json())
.then(data=>setInfos(data))


    });
    return (
        <div>
           <h1>This is Home Component</h1>

           <div className="info__container">
               {
                   infos.map(info=><Course info={info} 
                   key={info.key}
                   />)
               }
           </div>
        </div>
    )
}

export default Home