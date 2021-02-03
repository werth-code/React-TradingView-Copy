import CardComp from './components/CardComp'
import Header from './components/Header'
import SecondaryNav from "./components/SecondaryNav"
import MarketQuotes from './components/MarketQuotes';
import UpperTicker from './components/upper-ticker/UpperTicker';
import FooterContainer from "./components/footer-container/FooterContainer"
import './App.css';



function App() {

    return (

        <div>
          <UpperTicker />
          <Header />
          <SecondaryNav />
          <MarketQuotes/>
          <CardComp />
          <FooterContainer />
        </div>
    )

}

export default App