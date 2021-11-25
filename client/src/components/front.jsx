import React from 'react'
import { useState, useEffect } from "react";
import Shower from './aapl/showgraph';
import "./front.css"



const Front = () => {

    const [showResults, setShowResults] = useState(false)
    const [showResults1, setShowResults1] = useState(false)
    const [showResults2, setShowResults2] = useState(false)
    const [showResults3, setShowResults3] = useState(false)
    const onClick = () => {
        if(showResults) setShowResults(false);
        else {
            setShowResults(true);setShowResults1(false);setShowResults2(false);setShowResults3(false);
        }
    }
    const onClick1 = () => {
        if(showResults1) setShowResults1(false);
        else {
            setShowResults(false);setShowResults1(true);setShowResults2(false);setShowResults3(false);
        }
    }
    const onClick2 = () => {
        if(showResults2) setShowResults2(false);
        else {
            setShowResults(false);setShowResults1(false);setShowResults2(true);setShowResults3(false);
        }
    }
    const onClick3 = () => {
        if(showResults3) setShowResults3(false);
        else {
            setShowResults(false);setShowResults1(false);setShowResults2(false);setShowResults3(true);
        }
    }

    return (
        <div>
        <input type="submit" value="Apple" onClick={onClick} class="buts" />
         
        <input type="submit" value="Tesla" onClick={onClick1} class="buts"/>
        
        <input type="submit" value="Google" onClick={onClick2} class="buts"/>
        
        <input type="submit" value="Facebook" onClick={onClick3} class="buts"/>
     
      
        { showResults ? <Shower data="aapl"/> : null }
        { showResults1 ? <Shower data="tsla"/> : null }
        { showResults2 ? <Shower data="googl"/> : null }
        { showResults3 ? <Shower data="fb"/> : null }

        </div>
  )
}
export default Front