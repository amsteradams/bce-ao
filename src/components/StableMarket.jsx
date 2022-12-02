import useAxiosStable from "../hooks/useAxiosStable";
import useAxiosDeFi from "../hooks/useAxiosDeFi";
import Stable from "./Stable";
import Protocol from "./Protocol";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StableGraph from "./StableGraph";
import "./StableMarket.css";
const StableMarket = () => {
    const { response} = useAxiosStable(`/stablecoins?includePrices=true`);

    return (
        <section className="mt-8 stablecoins">
        <StableGraph/>
        <h1 className="text-2xl mb-2" align="center">Stablecoins Overview </h1>
        <TableContainer component={Paper} className="mt-5 stableTab">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ backgroundColor: "#b3cde0" }}>
            <TableRow>
                <TableCell>Stablecoin Name </TableCell>
                <TableCell align="right">Peg currency  </TableCell>
                <TableCell align="right">Peg Mechanism </TableCell>
                <TableCell align="right">Circulating supply </TableCell>
                <TableCell align="right">Price </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>

             
            {response && response.peggedAssets.map(stable => <Stable key={stable.id} stable={stable} />)} 
    
            </TableBody>
        </Table>
    </TableContainer>

    </section>
    
    )
}

export default StableMarket;