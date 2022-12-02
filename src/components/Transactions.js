import React, {useState, useEffect} from 'react'
import Transaction from './Transaction';
import "./Transactions.css";

export default function Transactions(props) {
    const [transacs, setTransacs] = useState([]);

    const getTransacs= () => {
        const arr = [];
        for (let index = 0; index < props.trxs.length; index++) {
            const current = props.trxs[index];
            arr.push(
                <Transaction hash={current.hash} block={current.blockNumber} from={current.from} to={current.to} value={current.value} timestamp={current.timeStamp} />
            )
        }
        setTransacs(arr);
    }
    useEffect(() => {
      getTransacs();
    }, [props.trxs])
    
  return (
    <div id='transactions'>
        <p id='trx-title'>List of transactions</p>
        <div id='trx-tab'>
            <div className='line-trx'>
                <p className='line-child'><strong>Txn hash</strong></p>
                <p className='line-child'><strong>Block</strong></p>
                <p className='line-child'><strong>From</strong></p>
                <p className='line-child'><strong>To</strong></p>
                <p className='line-child'><strong>Value</strong></p>
                <p className='line-child'><strong>Timestamp</strong></p>
            </div>
            {transacs}
            <div id='pagination'>
                <p className={props.current !== props.totPages ? "hide" : ""} onClick={()=>{props.paginate(1)}}>1</p>
                <p className={props.current === 1 ? "hide": ""} onClick={()=>{props.paginate('-')}} id='prec'>{props.current - 1}</p>
                <p id='current-p'><strong>{props.current}</strong></p>
                <p className={props.current === props.totPages || props.current === props.totPages -1 ? "hide": ""} onClick={()=>{props.paginate('+')}} id='next'>{props.current + 1}</p>
                <p className={props.current === props.totPages || props.current === props.totPages -1 ? "hide": ""} id='...'>...</p>
                <p className={props.current === props.totPages ? "hide": ""} onClick={()=>{props.paginate(props.totPages)}}id='last'>{props.totPages}</p>
            </div>
        </div>
    </div>
  )
}
