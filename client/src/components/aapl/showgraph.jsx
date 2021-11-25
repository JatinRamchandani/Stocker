import React from 'react'
import { useState, useEffect } from "react";
import Chart from './graph'
import "./show.css"


const Shower = (props) => {

    const [showResults, setShowResults] = useState(false)
    const [showResults1, setShowResults1] = useState(false)
    const [showResults2, setShowResults2] = useState(false)
    const [showResults3, setShowResults3] = useState(false)
    const [showResults4, setShowResults4] = useState(false)
    const [showResults5, setShowResults5] = useState(false)
    const onClick = () => {
        if(showResults) setShowResults(false);
        else {
            setShowResults(true);setShowResults1(false);setShowResults2(false);setShowResults3(false);setShowResults4(false);setShowResults5(false);
        }
    }
    const onClick1 = () => {
        if(showResults1) setShowResults1(false);
        else {
            setShowResults(false);setShowResults1(true);setShowResults2(false);setShowResults3(false);setShowResults4(false);setShowResults5(false);
        }
    }
    const onClick2 = () => {
        if(showResults2) setShowResults2(false);
        else {
            setShowResults(false);setShowResults1(false);setShowResults2(true);setShowResults3(false);setShowResults4(false);setShowResults5(false);
        }
    }
    const onClick3 = () => {
        if(showResults3) setShowResults3(false);
        else {
            setShowResults(false);setShowResults1(false);setShowResults2(false);setShowResults3(true);setShowResults4(false);setShowResults5(false);
        }
    }
    const onClick4 = () => {
        if(showResults4) setShowResults4(false);
        else {
            setShowResults(false);setShowResults1(false);setShowResults2(false);setShowResults3(false);setShowResults4(true);setShowResults5(false);
        }
    }
    const onClick5 = () => {
        if(showResults5) setShowResults5(false);
        else {
            setShowResults(false);setShowResults1(false);setShowResults2(false);setShowResults3(false);setShowResults4(false);setShowResults5(true);
        }
    }

    return (
        <div>
        <input type="submit" value="1 day" onClick={onClick} class ="bus" />
         
        <input type="submit" value="5 day" onClick={onClick1} class ="bus" />
        
        <input type="submit" value="1 month" onClick={onClick2} class ="bus" />
        
        <input type="submit" value="6 month" onClick={onClick3} class ="bus" />
        
        <input type="submit" value="1 year" onClick={onClick4} class ="bus" />

        <input type="submit" value="5 year" onClick={onClick5} class ="bus" />
       
        { showResults ? <Chart data = "oday" comp = {props.data} /> : null }
        { showResults1 ? <Chart data = "fday" comp = {props.data} /> : null }
        { showResults2 ? <Chart data = "omonth" comp = {props.data} /> : null }
        { showResults3 ? <Chart data = "smonth" comp = {props.data} /> : null }
        { showResults4 ? <Chart data = "oyears" comp = {props.data} /> : null }
        { showResults5 ? <Chart data = "fyears" comp = {props.data} /> : null }
        </div>
  )
}
export default Shower