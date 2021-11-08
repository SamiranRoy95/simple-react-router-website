import React from 'react';
import "./Course.css"

const Course = (props) => {
    const {image,name,price,duration,instructor}=props.info;

    return (
        <div className="course__component">
             <img alt="" className ="logo" src={image}/>
            <h2>Name:{name}</h2>
            <h3>Price:{price}</h3>
            <h3>Duration:{duration}</h3>
            <h3>Instructor:{instructor}</h3>

        </div>
    )
}


export default Course;