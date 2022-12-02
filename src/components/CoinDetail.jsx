import { useParams } from 'react-router-dom';
import { getCurrentDate } from "../utils";
import { currencyFormat, numberFormat} from '../utils';
import useAxios from '../hooks/useAxios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CoinDetail = () => {
  const { id } = useParams();
  const date = getCurrentDate("-");
  //const { response } = useAxios(`coins/${id}/history?date=${date}&localization=false`);
  const { response } = useAxios(`coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`);
  console.log(response);
  if(!response){
    return <div> Loading...</div>
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Crypto Name</TableCell>
            <TableCell align="right">Daily price</TableCell>
            <TableCell align="right">Market Cap</TableCell>
            <TableCell align="right">Daily Volume</TableCell>
            <TableCell align="right">Circulating Supply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{response.name}</TableCell>
            <TableCell align="right">{currencyFormat(response.market_data.current_price.eur)}</TableCell>
            <TableCell align="right">{currencyFormat(response.market_data.market_cap.eur)}</TableCell>
            <TableCell align="right">{currencyFormat(response.market_data.total_volume.eur)}</TableCell>
            <TableCell align="right">{numberFormat(response.market_data.circulating_supply)}{response.symbol}</TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CoinDetail;