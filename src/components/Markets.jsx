import useAxios from "../hooks/useAxios"
import Coin from './Coin';
import '../style/Markets.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Markets.css';
const Markets = () => {
  const { response} = useAxios('coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=false');

  /*return (
    <section className="spacetop20">
      <h1 className="txt-2xl spacebot20">Markets</h1>
      {response && response.map(coin => <Coin key={coin.id} coin={coin} />)}
    </section>
  )*/

  return (
    <section className="spacetop20">
      <h1 className="txt-2xl spacebot20">Markets</h1>
      <TableContainer component={Paper} className="spacetop20 market-tab">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#b3cde0" }}>
            <TableRow>
              <TableCell>Crypto Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">1d Change </TableCell>
              <TableCell align="right">Trends</TableCell>
              <TableCell align="right">Market Cap. </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

          {response && response.map(coin => <Coin key={coin.id} coin={coin} />)}
        
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default Markets