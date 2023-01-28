import React from 'react'
import axios from "axios"
import {Col, Row} from "react-bootstrap"
import { useState, useEffect } from 'react';
import Styles from "./imge.module.css"
import Image from './Image';
const Mainpage = () => {
    const [get, setGet]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{

        // const getPostsData = () => {
            setLoading(true);
            axios
            .get("https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json")
            .then(data =>{
                console.log("nnnn",data.data.data.products)
                setGet(data.data.data.products)
            }
           
            )
            .catch(error => console.log(error));
            
            
    },[]);
    
  console.log("uuuu",get)
     
       //getPostsData();

  return (
    <>
    <div className={Styles.g}>
     
   {/* {<img src={get.plpimaage}></img>} */}
   {get.map((item,index)=>{
    // console.log("name",item.name,index)
    // 
    return(
        <Row  >
        <Col  key={index}>
       <Image item={item} />
       </Col>
       </Row>
   
    // <div ><img src={item.plpimaage} alt="" /></div>
    
    )
   
   })}


</div>
  </>
  )
  }

export default Mainpage
