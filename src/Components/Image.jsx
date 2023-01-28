import React from 'react'
import {Button, Card} from "react-bootstrap"
import Styles from "./imge.module.css"

const Image = ({item}) => {
    console.log("item",item)
  return (
  <>
 
  
  <Card  >
 <Card.Img width={150}  src={item.plpimaage}>
 </Card.Img>
 <Card.Body>
    <Card.Title className={Styles.t}  width={50}>
        {item.name}
    </Card.Title>
    <Card.Subtitle>
        <div style={{display:"flex", gap:"10px", marginLeft:"70px",marginTop:"10px"}}>
        <div> { `₹ ${item.price} ${"  "}`} </div>
        <div  style={{color:"green" , fontSize:"10px",marginTop:"10px" ,textDecoration:"line-through"}}> {item.discount_usd} </div>
        <div style={{color:"green" , fontSize:"10px",marginTop:"10px",marginLeft:"-6px" }}>(50%) off</div>
        <div style={{marginLeft:"30px"}}><img width={30} src="https://static.vecteezy.com/system/resources/thumbnails/010/926/876/small/shopping-bag-line-style-icon-diwali-vector.jpg" alt="" /></div>
        </div>
    </Card.Subtitle>

 </Card.Body>
  </Card>

  </>   
    
  )
}

export default Image