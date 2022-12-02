import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";
import "../style/Trending.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Trending = () => {
    const { response} = useAxios('search/trending');

  return (
  <div className="spacetop20 trending">
    <h1 className='txt-2xl spacebot20'>Trending</h1>
    <TableContainer component={Paper} className="spacetop20">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>

          {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item}/>)}
        
          </TableBody>
        </Table>
      </TableContainer>
  </div>
  
  )
}

export default Trending;