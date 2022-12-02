import { useParams } from "react-router-dom"
import useAxiosDeFi from "../hooks/useAxios"
import moment from "moment";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const DeFiHistoricalChart = () => {
    const { id } = useParams();
    const { response } = useAxiosDeFi(`/charts`);
    if(!response){
        return <div> Loading...</div>
    }
    const coinCharData = response.map(value =>({x: value.date*1000, y: value.totalLiquidityUSD}))

    const options = {
        responsive: true,
        maintainAspectRatio: true

    }

    const data = {
        labels: coinCharData.map(value => moment(value.x).format('DDMMMYYYY')),
        datasets: [
            {
                fill: true,
                label: "DeFi TVL ($) without CEX",
                data: coinCharData.map(value => value.y),
                borderColor: 'rgb(255,215,0)'
            }
        ]
    }

    return (
        <div >
            <Line options = {options} data={data}/>
        </div>
    )
}

export default DeFiHistoricalChart