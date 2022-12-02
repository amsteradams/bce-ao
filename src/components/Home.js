import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css";
export default function Home() {
  const navigate = useNavigate();
  const goTo= (link) => {
    navigate(link)
  }
  return (
    <div id='home'>
      <p id='home-title'>Welcome to Blockchain analytics services</p>
      <div id='home-tab'>
        <div id='tab-up' onClick={() => {
        goTo('/marketPrice')
      }}>
            <img className='logo-overview' src='/charte-de-croissance.png' alt='overview icon'/>
            <p className='overview-text'>Market prices</p>
        </div>
        <div id='tab-down'>
            <div className='overview' onClick={() => {
        goTo('/defi')
      }}>
              <img className='logo-overview' src='/camemberts.png' alt='overview icon'/>
              <p className='overview-text'>DeFi Overview</p>
            </div>
            <div className='overview' onClick={() => {
        goTo('/nft')
      }}>
              <img className='logo-overview' src='/insert-picture-icon.png' alt='overview icon'/>
              <p className='overview-text'>NFT Overview</p>
            </div>
            <div className='overview' onClick={() => {
        goTo('/#')
      }}>
              <img className='logo-overview' src='/bank.png' alt='overview icon'/>
              <p className='overview-text'>CEX Overview</p>
            </div>
            <div className='overview' onClick={() => {
        goTo('/ethereum')
      }}>
              <img className='logo-overview' src='/ethereum.png' alt='overview icon'/>
              <p className='overview-text'>Ethereum Blockchain Data</p>
            </div>
            <div className='overview' onClick={() => {
        goTo('/#')
      }}>
              <img className='logo-overview' src='/bitcoin.png' alt='overview icon'/>
              <p className='overview-text'>Bitcoin Blockchain Data</p>
            </div>
            <div className='overview' onClick={() => {
        goTo('/stablecoinOverview')
      }}>
              <img className='logo-overview' src='/dai.png' alt='overview icon'/>
              <p className='overview-text'>Stablecoin Overview</p>
            </div>
        </div>
      </div>
    </div>
  )
}
