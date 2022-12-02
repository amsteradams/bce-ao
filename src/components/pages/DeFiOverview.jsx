import React from 'react';
import DeFiHistoricalChart from '../components/DeFiHistoricalChart';
import TotalValueLocked from '../components/TotalValueLocked';

const DeFiOverview = () => {
  
  return (
    <div className="wrapper-container"> 
        <DeFiHistoricalChart/>
        <TotalValueLocked />
    </div>
  )
}

export default DeFiOverview;