import React from 'react'
import './Successpage.css'
import { GrStatusGood } from "react-icons/gr";
import React from 'react'


const Successpage = () => {
    return (
        <div className='successBody'>
            <div className='successMain'>
                <div className='formSuccess'>
                    <h1>SUCCESSFUL</h1>
                    <GrStatusGood />
                    <p> You completed your donation</p>
                    <button className='backtoHome'>BACK TO HOME</button>
                </div>
            </div>
        </div>
    )
}

export default Successpage
