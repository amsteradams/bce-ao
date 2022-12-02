import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./Address.css";
import axios from 'axios';
import Transactions from './Transactions';
export default function Address() {
    const data = useParams();
    const chain = data.network;
    const address = data.str;

    const [type, setType] = useState();
    const [balance, setBalance] = useState();
    const [totVol, setTotVol] = useState();
    const [pl, setPl] = useState();
    const [trxs, setTrxs] = useState([]);
    const [txCount, setTxCount] = useState();
    const [current, setCurrent] = useState(1);
    const [totPages, setTotPages] = useState(0);
    const getType = async () => {
        setType('#')    
    }   

    const getBalance = async() => {
        try {
            const res = await axios.get('https://api.etherscan.io/api', {
            params: {
                module:'account',
                action:'balance',
                address:address,
                tag:'latest',
                apikey:"623M7N7P9YND5E7PXTN7G9PTP3HH3BRKTP"
                } 
            });
            setBalance(res.data.result);   
        } catch (error) {
            console.log(error);
        }
    }

    const getTotVol = async () => {
        setTotVol('#')
    }
    const getPl = async() => {
        setPl('#')
    }

    
    /*TRANSACTIONS : */

    const getTrxs = async () => {
        try {
            const res = await axios.get('https://api.etherscan.io/api', {
             params: {
                module:'account',
                action:'txlist',
                address:address,
                startblock:0,
                endblock:99999999,
                page:current,
                offset:5,
                sort:'asc',
                apikey:"623M7N7P9YND5E7PXTN7G9PTP3HH3BRKTP"
                } 
            });
            setTrxs(res.data.result);   
        } catch (error) {
            console.log(error);
        }
    }
    const getTxCount = async () => {
        try {
            const res = await axios.get('https://api.etherscan.io/api', {
             params: {
                module:'account',
                action:'txlist',
                address:address,
                startblock:0,
                endblock:99999999,
                sort:'asc',
                apikey:"623M7N7P9YND5E7PXTN7G9PTP3HH3BRKTP"
                } 
            });
            console.log(res.data.result)
            setTxCount(res.data.result.length); 
            setTotPages(Math.floor(res.data.result.length / 5));
        } catch (error) {
            console.log(error);
        }
    }
    console.log(txCount)
    const paginate =(tmp) => {
        if(tmp === '-' && current > 0){
            setCurrent(current - 1)
         getTrxs();
        }
        else if(tmp === '+' && current < totPages){
        setCurrent(current + 1)
         getTrxs();
        }
        else{
            setCurrent(tmp)
        getTrxs();
        }
    }
    useEffect(() => {
        getType();
        getBalance();
        getTotVol();
        getPl();
        getTxCount();
        getTrxs();
      }, [])
      
      console.log(trxs)
    /*TRANSACTIONS*/ 

  return (
    <div id='address'>
        <div id='add-infos'>
            <p id='add-title'>Address</p>
            <p id='add-str'>{address}</p>
            <p id='add-type'>Address type : {type}</p>
        </div>
        <div id='add-tab'>
            <div id='add-tab-up'>
                <div id='tab-up-left'>
                     <div className='tabs-left'>
                        <p className='text-left'>Overview</p>
                     </div>
                     <div className='tabs-left'>
                        <p className='text-left'>Balance</p>
                        <p className='text-right'>{balance / (10**18)} ETH</p>
                     </div>
                     <div className='tabs-left'>
                        <p className='text-left'>Total Volume Transferred</p>
                        <p className='text-right'>{totVol} ETH</p>
                     </div>
                     <div className='tabs-left'>
                        <p className='text-left'>Total Number of transactions</p>
                        <p className='text-right'>{txCount} txs</p>
                     </div>
                </div>
                <div id='tab-up-right'>
                        <p id='right-pl'>P&L</p>
                        <p id='pl'>{pl}</p>
                </div>
            </div>
            <div id='add-tab-middle'>
                <div className='middle-tabs'>
                    <p className='middle-left'>CEX Inflow</p>
                    <p className='middle-right'> ETH</p>
                </div>
                <div className='middle-tabs'>
                    <p className='middle-left'>CEX Outflow</p>
                    <p className='middle-right'> ETH</p>
                </div>
                <div className='middle-tabs'>
                    <p className='middle-left'>DEX Inflow</p>
                    <p className='middle-right'> ETH</p>
                </div>
                <div className='middle-tabs'>
                    <p className='middle-left'>DEX Outflow</p>
                    <p className='middle-right'> ETH</p>
                </div>
            </div>
            <div id='add-tab-down'>
                <p id='down-title'>Remarkable operations</p>
            </div>
        </div>
            <Transactions trxs={trxs} txCount={txCount} totPages={totPages} paginate={paginate} current={current}/>
    </div>
  )
}
