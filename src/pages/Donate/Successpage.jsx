import React from 'react'
import './Successpage.css'
import { GrStatusGood } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Successpage = () => {
    const navigate = useNavigate();
  return (
    <div className='successBody'>
      <div className='successMain'>
       <div className='formSuccess'>
          <h1>SUCCESSFUL</h1> 
          <GrStatusGood />
           <p> You completed your donation</p>
           <button className='backtoHome' onClick={()=>("/")}>BACK TO HOME</button>
       </div>
      </div>
    </div>
  )
}

export default Successpage