import { useParams } from "react-router-dom"
import useAxios from "../hooks/useAxios"
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

const HistoryChart = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=eur&days=30&interval=daily`);
    if(!response){
        return <div> Loading...</div>
    }
    const coinCharData = response.prices.map(value =>({x: value[0], y: value[1].toFixed(2)}))

    const options = {
        responsive: true
    }

    const data = {
        labels: coinCharData.map(value => moment(value.x).format('MMMDD')),
        datasets: [
            {
                fill: true,
                label: id + " prices",
                data: coinCharData.map(value => value.y),
                borderColor: 'rgb(255, 99, 132)'
            }
        ]
    }

    return (
        <div> 
            <Line options = {options} data={data}/>
        </div>
    )
}

export default HistoryChart