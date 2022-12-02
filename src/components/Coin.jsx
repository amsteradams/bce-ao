import { Link } from "react-router-dom"
import { currencyFormat } from "../utils"
import { percentageFormat } from "../utils"
import { TrendingDown } from "../icons/icons"
import { TrendingUp } from "../icons/icons"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../style/Coin.css';
import { useNavigate } from "react-router-dom"

const Coin = ({coin}) => {
    
    /*return (
        <Link to={`/coin/${coin.id}`}>
            <div className="classA">
                <div className="flex items-center gap-1 w-full">
                    <img className="w-6" src={coin.image} alt={coin.name} />
                    <p>{coin.name}</p>
                    <span className="text-xs">({coin.symbol})</span>
                </div>
                <span className="w-full text-center">{currencyFormat(coin.current_price)}</span>
                <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                    {percentageFormat(coin.price_change_percentage_24h)}
                </span>
                <div className="hidden sm:block">
                    <p className="font-semibold">Market Cap</p>
                    <span>{currencyFormat(coin.market_cap)}</span>
                </div>
            </div>
        </Link>
    )*/
    const navigate = useNavigate();
    const goTo = (param) => {
        navigate(param)
    }
    return (
            <TableRow className="onClickOver" onClick={()=> {goTo(`/coin/${coin.id}`)}} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row"><img className="logo" src={coin.image} alt={coin.name}/>{coin.name} ({coin.symbol})</TableCell>
                <TableCell align="right">{currencyFormat(coin.current_price)}</TableCell>
                <TableCell align="right">
                    {percentageFormat(coin.price_change_percentage_24h)}
                </TableCell>
                <TableCell className="image-market" align="right">
                {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                </TableCell>
                <TableCell align="right">{currencyFormat(coin.market_cap)} </TableCell>
            </TableRow>
    
    )
  }
  
  export default Coin