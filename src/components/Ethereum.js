import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Ethereum.css';
export default function Ethereum() {
  const navigate = useNavigate();
  const ethRegex = /^0x[a-fA-F0-9]{40}$/g;
  const [address, setAddress] = useState('');
  const [error, setError] = useState(false);
  
  const handleInput = (e) => {
  setAddress(e.target.value)
  }

  useEffect(() => {
    
    if(!address.match(ethRegex)){
      setError(true)
    }else{
      setError(false)
      navigate('/address/eth/'+ address);
    }
  }, [address])

  useEffect(() => {
    if(address.length === 0){
      setError(false);
    }
  }, [])

  return (
    <div id='ethereum'>
      <p id='eth-title'>The Ethereum Blockchain Explorer</p>
      <div id='input-frame'>
      <img src='rechercher.png' alt='recherche'/><input onChange={handleInput}
      onBlur={handleInput} type='text' placeholder='Search by Address / Transaction' ></input>
      </div>
      <p className={error === true ? "error-activ" : "error-msg"}>Address doesn't match</p>
    </div>
  )
}
