import React from 'react';
import DeFiHistoricalChart from '../components/DeFiHistoricalChart';
import TotalValueLocked from '../components/TotalValueLocked';
import "./DeFiOverview.css"
const DeFiOverview = () => {
  
  return (
    <div className="wrapper-container defiOverview"> 
        <DeFiHistoricalChart/>
        <TotalValueLocked />
    </div>
  )
}

export default DeFiOverview;