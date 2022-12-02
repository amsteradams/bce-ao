import React from 'react';
import Trending from '../components/Trending';
import Markets from '../components/Markets';
import { TextField } from '@mui/material';
import SearchNav from '../components/SearchNav';
const PriceOverview = () => {
  
  return (
    <div className="wrapper-container"> 
        <Trending />
        <Markets />
    </div>
  )
}

export default PriceOverview;