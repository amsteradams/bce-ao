import { useParams } from "react-router-dom"
import useAxiosStable from "../hooks/useAxiosStable";
import moment from "moment";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
  
ChartJS.register(ArcElement, Tooltip, Legend);

function mapping(response){
    var circulatingMap = new Map();
    response.peggedAssets.forEach(e => circulatingMap.set(e.name, e.circulating.peggedUSD *1));
    const mapSort = new Map([...circulatingMap.entries()].sort((a, b) => b[1] - a[1]));
    return mapSort;
}

const StableGraph = () => {
    const { id } = useParams();
    const { response} = useAxiosStable(`/stablecoins?includePrices=true`);
    if(!response){
        return <div> Loading...</div>
    }
    //const coinCharData = response.map(value =>({x: value.date*1000, y: value.totalLiquidityUSD}))
    
    const options = {
        responsive: false,
        maintainAspectRatio: true

    }

    var circulatingMap = mapping(response);
    let myArr = [];
    const iterator = circulatingMap.values();
    for (const value of iterator) {
        myArr.push(value);
    }

    let myArr2 = [];
    const iterator2 = circulatingMap.keys();
    for (const value of iterator2) {
        myArr2.push(value);
    }


    const data = {
        labels: [
          myArr2[0],
          myArr2[1],
          myArr2[2],
          myArr2[3],
          myArr2[4],
        ],
        datasets: [{
          label: 'Stablecoin Overview',
          data: myArr,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(114, 239, 94)',
            'rgb(255, 205, 86)',
            'rgb(233, 51, 255)',
            'rgb(255, 159, 51)',
            
          ],
          hoverOffset: 4
        }]
    };



    return (
        
        <div className="display: flex; justify-content: center;" >
            <Doughnut options={options} data={data} />
        </div>
    )
}

export default StableGraph