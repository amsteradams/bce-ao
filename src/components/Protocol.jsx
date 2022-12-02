import { Link } from "react-router-dom"
import { currencyFormat, numberFormat } from "../utils"
import { percentageFormat } from "../utils"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Protocol.css";
const Protocol = ({protocol}) => {
    
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row"><img className="w-6 logo-protocol" src={protocol.logo} alt={protocol.name}/> {protocol.name} </TableCell>
            <TableCell align="right">{protocol.chain}</TableCell>
            <TableCell align="right">{protocol.change_1d} %</TableCell>
            <TableCell align="right">{protocol.change_7d} %</TableCell>
            <TableCell align="right">{numberFormat(protocol.tvl)} $</TableCell>
        </TableRow>
    )


  }
  
  export default Protocol