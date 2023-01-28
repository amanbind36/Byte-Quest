import React from "react";
import Styles from "./header.module.css"

function Header(){
return(
    <>
    <div className={Styles.container}>
      <div className={Styles.upper}>
        <div className={Styles.left}>
           <div>TANN TRIM</div>
        </div>
        <div className={Styles.right}>
            <div>
            <span class="material-symbols-outlined">search</span>
            <span class="material-symbols-outlined">person</span>
            <span class="material-symbols-outlined">bookmark</span>
            <span class="material-symbols-outlined">shopping_bag</span>
            
            </div>
        </div>
      </div>
      <div className={Styles.lower}>
      <div>Jewelery</div>
        <div>Gifting</div>
        <div>Accesories</div>
        <div>Travel</div>
        <div>Bags</div>
        
        

      </div>
    </div>
    </>
)
}

export default Header;