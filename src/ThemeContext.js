import React from 'react'

export const UserContext = React.createContext();

const productFooter = { 
                        header: "Products", 
                        values: ["Chart", "Pine Script", "Stock Screener", "Forex Screener", "Crypto Screener", "Economic Calendar"]
                      }

const futuresSymbolsInsideCards = [
  {
    marker: "Crude Oil",
    desc: "Crude Oil Futures",
    price: 55.40,
    chg: "+1.10%"
  },
    {
    marker: "Natural Gas",
    desc: "Natural Gas Futures",
    price: 2.82,
    chg: "-0.50%"
  },
    {
    marker: "Brent Oil",
    desc: "Brent Oil Futures",
    price: 58.10,
    chg: "+0.70%"
  }
]

const value = "HELLO"


export default function ThemeContext() {
    return (
        <div>
            
        </div>
    )
}
