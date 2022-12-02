import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../style/CoinTrending.css';

const CoinTrending = ({ coin }) => {
  const navigate = useNavigate();
  const goTo = (param) => {
      navigate(param)
  }

    return (
      <TableRow className="onClickOver" onClick={()=> {goTo(`/coin/${coin.id}`)}} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">{coin.score+1}</TableCell>
          <TableCell  align="right"><img className="logo" src={coin.small} alt={coin.name} /></TableCell>
          <TableCell align="right">{coin.name} ({coin.symbol})</TableCell>
      </TableRow>
    )
}

export default CoinTrending;