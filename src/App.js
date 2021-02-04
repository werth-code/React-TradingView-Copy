import './App.css';
import React from 'react'
import Header from './components/Header'
import SecondaryNav from "./components/SecondaryNav"
import MarketQuotes from './components/MarketQuotes';
import UpperTicker from './components/upper-ticker/UpperTicker';
import FooterContainer from "./components/footer-container/FooterContainer"
import FinalFooter from './components/final-footer/FinalFooter';
import MainContainer from './components/MainContainer';


const productFooter = [
                      { 
                        header: "Products", 
                        values: ["Chart", "Pine Script", "Stock Screener", "Forex Screener", "Crypto Screener", "Economic Calendar"]
                      },
                       { 
                        header: "Company", 
                        values: ["About", "How It Works", "Different", "Set", "Calendar"]
                      },
                       { 
                        header: "Community", 
                        values: ["Refer A Friend", "Ideas", "Scripts", "Streams"]
                      },
                       { 
                        header: "For Business", 
                        values: ["Widgets", "Advertising", "Website", "Screener", "Crypto", "Partner Calendar"]
                      }
                    ]

const futuresSymbolsInsideCards = [
                      {
                        desc: "Crude Oil Futures",
                        price: 55.40,
                        chg: "+1.10%"
                      },
                        {
                        desc: "Natural Gas Futures",
                        price: 2.82,
                        chg: "-0.50%"
                      },
                        {
                        desc: "Brent Oil Futures",
                        price: 58.10,
                        chg: "+0.70%"
                      }
                    ]

export const ListingContext = React.createContext(futuresSymbolsInsideCards);
export const UserContext = React.createContext(productFooter);

export default function App() {

    return (

      <div>
          <UpperTicker />
          <Header />
          <SecondaryNav />
          <MarketQuotes />
          <MainContainer />
          <FooterContainer />
          <FinalFooter />
      </div>
    )

}