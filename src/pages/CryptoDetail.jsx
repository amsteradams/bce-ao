import React from 'react';
import HistoryChart from '../components/HistoryChart';
import CoinDetail from '../components/CoinDetail';
import "../style/CryptoDetail.css";
const CryptoDetail = () => {

  return (
    <div className="wrapper-container mt-10 cryptodetails">
        <HistoryChart />
        <section className='mt-8'> 
            <CoinDetail />
        </section>
    </div>
  );
}

export default CryptoDetail;