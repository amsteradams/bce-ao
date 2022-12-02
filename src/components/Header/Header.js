import React, {useState} from 'react';
import './Header.css';
import Icon from './Icon';
export default function Header() {
    const [toggle, setToggle]= useState(false)

    const handleToggle = () => {
        setToggle(!toggle);
    }
  if(toggle === true){
    return(
    <header id='menu-activ'>
        <div id='burger' onClick={handleToggle}>
        <img id='burger-img' src='/menu.png' alt='menu burger'/>
        </div>
        <div id='rest-ctn'>
          <Icon image='/rechercher.png' route='/#'/>
          <Icon image='/accueil.png' route='/'/>
          <Icon image='/charte-de-croissance.png' route='/marketPrice'/>
          <Icon image='/camemberts.png' route='/defi'/>
          <Icon image='/bank.png' route='/#'/>
          <Icon image='/insert-picture-icon.png' route='/nft'/>
          <Icon image='/ethereum.png' route='/ethereum'/>
          <Icon image='/bitcoin.png' route='/#'/>
          <Icon image='/dai.png' route='/stablecoinOverview'/>
        </div>
    </header>
  )}else{
    return (
    <header>
        <div id='burger' onClick={handleToggle}>
        <img id='burger-img' src='/menu.png' alt='menu burger'/> 
        </div>
    </header>
  )
}
}
