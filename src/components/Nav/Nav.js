import React from 'react'
import Header from '../Header/Header';
import './Nav.css';
import User from './User';
export default function Nav() {
  return (
    <nav>
        <Header />
        <div id='nav-ctn'>
            <p id='nav-title'>@<span> Quanteam</span></p>
            <User name='Renee McKelvey' title='EBA Analyst'/>
        </div>
    </nav>
  )
}
