import React from 'react'
import { useState, useEffect } from "react";
import {Button} from 'react-bootstrap';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'
import axios from 'axios'

import "./show.css"


const Chart = (props) => {

    const [pdata,setPdata] = useState([])  
    useEffect(()=>{
      const url = `http://192.168.43.183:5000/${props.data}/${props.comp}`;
      fetch(url).then(resp=>resp.json()).then((resp)=>{
        var data = resp;
        var tosend=[];

        if(props.data == "oyears" || props.data == "fyears"){
          for(var i=0;i<data.length;i++){
  
            tosend[i] = {
              "date": data[i].date.substring(0,4),
              "high": data[i].high
            }
          }
        }
        else{
          for(var i=0;i<data.length;i++){
  
            tosend[i] = {
              "date": data[i].date.substring(0,10),
              "high": data[i].high
            }
          }
        }
        
        setPdata(tosend.reverse());
  
      })
      },[])


  return (
    <>
    <div className="cont">
      <ResponsiveContainer aspect={3} >
      <AreaChart width={730} height={250} data={pdata}
        margin={{ top: 20, right: 0, left: 0, bottom: 0 }}  >
        <defs>
          {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient> */}
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis dataKey="high"/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {/* <Area  dataKey="date" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
        <Area  dataKey="high" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default Chart