import React from 'react'
import "./User.css";
export default function User(props) {
  return (
    <div id='user'>
        <div id='user-left'>
            <p id='username'>{props.name}</p>
            <p id='user-title'>{props.title}</p>    
        </div>
        <img id='img-user' src='/user.png' alt='utilisateur'/>
    </div>
  )
}
