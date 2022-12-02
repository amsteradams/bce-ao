import { Link } from "react-router-dom"
import { currencyFormat, numberFormat, numberFormatWithoutToFixed } from "../utils"
import { percentageFormat } from "../utils"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Stable = ({stable}) => {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{stable.name} ({stable.symbol}) </TableCell>
            <TableCell align="right">{stable.pegType}</TableCell>
            <TableCell align="right">{stable.pegMechanism} </TableCell>
            <TableCell align="right">{numberFormat(stable.circulating.peggedUSD *1)}</TableCell>
            <TableCell align="right">{stable.price} </TableCell>
        </TableRow>
    )


}
  
export default Stable