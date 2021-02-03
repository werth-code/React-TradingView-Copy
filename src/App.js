import CardComp from './components/CardComp'
import Header from './components/Header'
import SecondaryNav from "./components/SecondaryNav"
import MarketQuotes from './components/MarketQuotes';
import UpperTicker from './components/upper-ticker/UpperTicker';
import FooterContainer from "./components/footer-container/FooterContainer"
import './App.css';
import FinalFooter from './components/final-footer/FinalFooter';
import MainContainer from './components/chart-conatiner/MainContainer';



function App() {

    return (

        <div>
          <UpperTicker />
          <Header />
          <SecondaryNav />
          <MarketQuotes/>
          <MainContainer />
          <FooterContainer />
          <FinalFooter />
        </div>
    )

}

export default App