import CardComp from './components/CardComp'
import Header from './components/Header'
import SecondaryNav from "./components/SecondaryNav"
import MarketQuotes from './components/MarketQuotes';
import UpperTicker from './components/upper-ticker/UpperTicker';
import './App.css';



function App() {

    return (

        <div>
          <UpperTicker />
          <Header />
          <SecondaryNav />
          <MarketQuotes/>
          <CardComp />
        </div>
    )

}

export default App