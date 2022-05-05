import React from 'react'
import abc_product from '../images/abc_product.svg';
import logo from '../images/hrclogo.svg';


function Header(){
return(
  <div style={{margin:"0.5rem"}}>
      <img  src={abc_product} height="30" />
      
      <img  style={{marginLeft:"22rem"}} height="30"  src={logo}/>
      <p style={{color:"white",fontSize:22,fontWeight:"bold"}}>Invoice List</p>
  </div>
  )
}

export default Header;