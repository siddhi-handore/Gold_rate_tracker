import React,{useState}from 'react'
import { FaRupeeSign } from "react-icons/fa";
const Box3 = (props) => {
  const rate = props.list;
  const [list,setList] = useState(true);
  return (
      <div className="box3">
      <div class="prev-data">
        { list && rate.length > 0 && (rate.map((temp,index)=>(
          <div key={index}>
          <h1><FaRupeeSign />{temp.price}</h1>
          <h2>{temp.date}</h2>
          </div>
        ))
      )}
          {/* <div>
          <h1><FaRupeeSign /></h1>
          <h2></h2>
          </div>
        <div>
          <h1><FaRupeeSign />71,200</h1>
          <h2>9 Nov 2024</h2>
          </div>
        <div>
          <h1><FaRupeeSign />71,100</h1>
          <h2>8 Nov 2024</h2>
          </div> */}
      </div>
    </div>
  )
}

export default Box3