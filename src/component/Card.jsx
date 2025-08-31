import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";

const Card = ({img , title , newPrice }) => {
  return (
     <div className="card" key={title}>
          <div className="card-img"  >
    
            <img src={img} alt="this is img" />
          </div>
          <div className="card-title">
            <span>{title}</span>
            </div>
            <div className="card-review">
            <span className="review">
              <FaRegStar color='yello'/>
              <FaRegStar color='yello'/>
              <FaRegStar color='yello'/>
              <FaRegStar color='yello'/>
    
            </span>
            <span>review</span>
            </div>
            <div className="card-price">
              <span>{newPrice}</span>
              <span>
                <FaCartArrowDown/>
              </span>
            </div>
          
        </div>
  )
}

export default Card
