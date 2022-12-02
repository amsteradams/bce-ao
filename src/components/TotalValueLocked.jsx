import useAxiosDeFi from "../hooks/useAxiosDeFi"
import Protocol from "./Protocol";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./TotalValueLocked.css";
const TotalValueLocked = () => {
  const { response } = useAxiosDeFi('/protocols');

  return (
    <section className="mt-8 protocols">
      <h1 className="text-2xl mb-2" align="center">DeFi Overview </h1>
      <TableContainer component={Paper} className="mt-5">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#b3cde0" }}>
            <TableRow>
              <TableCell>Protocol Name</TableCell>
              <TableCell align="right">Chain</TableCell>
              <TableCell align="right">1d Change </TableCell>
              <TableCell align="right">7d Change </TableCell>
              <TableCell align="right">Total Value Locked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          {response && response.map(protocol => <Protocol key={protocol.id} protocol={protocol} />)} 
        
          </TableBody>
        </Table>
    </TableContainer>

    </section>
  )
}

export default TotalValueLocked