import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Icon.css";
export default function Icon(props) {
    const navigate = useNavigate();
    const goTo = () => {
      navigate(props.route);
    }
  return (
    <div onClick={goTo} id='icon'>
        <img class='icons' src={props.image} alt='icon menu'></img>
    </div>
  )
}
