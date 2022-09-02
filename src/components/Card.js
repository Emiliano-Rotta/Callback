import { useEffect, useState } from "react";
import React from 'react';


function Card(props) {

const [name, updateName] = useState (props.name);

useEffect (() =>{
  console.log (name)
})

function changeName () {
  updateName (name.toLowerCase())
}

  return (
    <div onClick={changeName}>
      <div>
        <img
          src={props.background}
          alt={props.name}
        />
        <img
          src={props.icon}
          alt={props.name}
        />
      </div>
        <h3>{props.name}</h3>
        <h4>TotalQuizzes: {props.totalQuizzes}</h4>
        <h5>Users: {props.users}</h5>
      <div>

      </div>

    </div>
  );
}

export default Card;
