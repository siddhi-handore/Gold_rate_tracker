import React,{useEffect, useState}from 'react'
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { AiFillGolden } from "react-icons/ai";

const Box1 = (props) => {
  const [growth,setGrowth] = useState(false);
  useEffect(()=>{
    if(props.priceDiff > 0)
    {
      setGrowth(true);
    }
    else{
      setGrowth(false);
    }
  })
  
  return (
    <div className="box1">
      <div className="data">
      <h1>Gold rate </h1>
      <h2>Rs. {props.data}</h2>
      </div>
      <div className="growth">
        {growth && (
          <>
          <h2 style={{color:'green'}}>Increased <HiMiniArrowTrendingUp color="green" font-size="3.5vw" /></h2>
          </>)}
        {!growth && (
          <>
          <h2 style={{color:'red'}}>Decreased <HiMiniArrowTrendingDown color="red"/></h2>
          </>)}
      </div>
    </div>
  )
}

export default Box1