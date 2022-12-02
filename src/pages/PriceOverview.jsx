import React from 'react';
import Trending from '../components/Trending';
import Markets from '../components/Markets';
import { TextField } from '@mui/material';
import SearchNav from '../components/SearchNav';
import "./PriceOverview.css"
const PriceOverview = () => {
  
  return (
    <div className="wrapper-container priceoverview"> 
        <Trending />
        <Markets />
    </div>
  )
}

export default PriceOverview;