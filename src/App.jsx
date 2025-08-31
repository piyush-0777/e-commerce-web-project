
import './App.css';
import Nav from './navbar/Nav';
import Recommended from './recommended/recommended';
import Product from './product/Product';
import products from "./db/data";
import { useEffect, useState } from 'react';

function App() {
 
  const [selectedCategory , setselectedCategory] = useState('');
  const [filterData , setfilterData] = useState(products);
  const [search , setSearch] = useState("");

  useEffect(()=>{
    if(selectedCategory)
      filter(selectedCategory)

  },[selectedCategory]);

  useEffect(()=>{
    console.log(search)
    if(search) {
      setfilterData(products.filter((e)=> e.title.slice(0, search.length).toLowerCase() ===search))
    } else {
      setfilterData(products);
    }
      

  },[search]);

  const filter = (category) => {
    if(category!="All"){
    setfilterData(products.filter((e)=> 
      e.category===category || e.color === category || e.newPrice === category
       ));
  } else {
    setfilterData(products);
  }
  }
  

  const hendalSelect = e => {
    setselectedCategory(e.target.value);
   
   
  }

  
 const hendalchang = e => {
  setSearch(e.target.value.toLowerCase());
 }
 

  return (
    <>
   
    <Nav  hendalchang={hendalchang} search = {search}/> 
    <Product products = {filterData}/>
    <Recommended hendalSelect = {hendalSelect}/>

    </>
  )
}

export default App
