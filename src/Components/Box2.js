import React from 'react'
import { Chart } from "react-google-charts";
const Box2 = (props) => {
  const raw = props.arr;
  const chartData = [
    ['Day','Price'],
    ...raw.map(entry=>{
      const day = new Date(entry.date).getDate();
      console.log(day);
      return [day,entry.price];
    }),
  ];
  const options = {
    hAxis: { title: "Date",
      gridlines: {
        count: 5,
        color: '#e0e0e0' 
      },
    },
    vAxis: { title: "Price",
      gridlines: {
        count: 5, 
        color: '#e0e0e0'
      }
    },
    legend: "none",
  };
  return (
    <div className="box2">
      <div className="Chart">
      <Chart
      chartType="LineChart"
      width="100%"
      height="100%"
      data={chartData}
      options={options}
    />
    </div>
    </div>
  )
}

export default Box2;