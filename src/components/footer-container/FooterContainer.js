import React from 'react'
import Footer from "../footer/Footer"
import "./FooterContainer.css"

export default function FooterContainer() {
    return (
        <div className="rows-of-footer">
            <Footer className="foot"/>
            <Footer className="foot"/>
            <Footer className="foot"/>
            <Footer className="foot"/>
        </div>
    )
}
