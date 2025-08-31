import React from 'react';
import './recommended.css'
import Category from "./category/Category";
    import Price from "./price/Price";
    import Colors from "./Colors/Colors";
    import "./recommended.css";
const recommended = ({hendalSelect}) => {
  return (
    
    
   
        <>
          <section  className="sidebar">
            <div className="logo-container">
              <h1>🛒</h1>
            </div>
          <Category hendalSelect = {hendalSelect}  />
            <Price hendalSelect = {hendalSelect} />
            <Colors hendalSelect = {hendalSelect} />
          </section>
        </>
  )
    
  
    

  
}

export default recommended
