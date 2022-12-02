import useAxiosNft from "../hooks/useAxiosNft"
import Coin from './Coin';
import useAxiosNFT from "../hooks/useAxiosNft";
import NftRow from "./NftRow";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StableGraph from "./StableGraph";
import '../style/NftCollections.css';

const NftCollections = () => {
  const { response} = useAxiosNFT('/top-100');
  console.log(response)
  return (
    <section className="spacetop20 tab-nfts">
      <h1 className="txt-2xl spacebot20">NFT Collections</h1>
      <TableContainer component={Paper} className="spacetop20">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: "#3eb489" }}>
                <TableRow>
                    <TableCell>Collection Name</TableCell>
                    <TableCell align="right">Buyer Count</TableCell>
                    <TableCell align="right">Seller Count</TableCell>
                    <TableCell align="right">Sales Volume Change Percentage</TableCell>
                    <TableCell align="right">Transaction Count</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>

                
                {response && response.data.map(nft => <NftRow key={nft.id} nft={nft} />)} 
        
                </TableBody>
            </Table>
        </TableContainer>
    </section>
  )
}

export default NftCollections