import React from 'react';
import { Link } from "react-router-dom"
import HistoryChart from '../components/HistoryChart';
import CoinDetail from '../components/CoinDetail';

const CryptoDetail = () => {

  return (
    <div className="wrapper-container mt-10">
        <Link to="/" relative="path">
        Go Back Home
        </Link>
        <HistoryChart />
        <section className='mt-8'> 
            <CoinDetail />
        </section>
    </div>
  );
}

export default CryptoDetail;