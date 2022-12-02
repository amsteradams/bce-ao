import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav/Nav';
import Ethereum from './components/Ethereum';
import Address from './components/Address';
import PriceOverview from './pages/PriceOverview'
import CryptoDetail from './pages/CryptoDetail';
import DefiOverview from "./pages/DeFiOverview";
import StablecoinOverview from "./pages/StablecoinOverview";
import NftOverview from "./pages/NftOverview";
function App() {
  return (
    <div className="App">
      <div id='ctn'>
        <BrowserRouter>
        <p id='work-progress'>Work in progress</p>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ethereum' element={<Ethereum />} />
            <Route path='/address/:network/:str' element={<Address />} />
            <Route path='/marketPrice' element={<PriceOverview />} />
            <Route path="/cryptoDetails/coin/:id" element={<CryptoDetail />} />
            <Route path='/defi' element={<DefiOverview />} />
            <Route path="/coin/:id" element={<CryptoDetail />} />
            <Route path='/stablecoinOverview' element={<StablecoinOverview />} />
            <Route path="/nft" element={<NftOverview/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
