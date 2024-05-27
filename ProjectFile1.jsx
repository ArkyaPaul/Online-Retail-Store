import React, { useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default function ProjectFile1() {
    const [info, setInfo] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
      .then((res) => { setInfo(res.data); })
      .catch((err) => { console.log(err); })
  },[])

  return (
    <div>
      <div>
              <h1 style={{textAlign:'center', color:'red', backgroundColor:'pink'}}>Welcome to paul Retails</h1>
              <p style={{color:'darkblue'}}><b>Welcome to paul Retails</b>
              , your premier destination for all your online shopping needs.
               We have an extensive collection of products ranging from fashion
                apparel and accessories to electronics, we strive to provide you
                 with a seamless and enjoyable shopping experience. 
                 <b>Enjoy Shopping!!</b></p>
        </div>

        <div style={{backgroundColor:'lightorange'}}>
          <h1 style={{color:'darkred', backgroundColor:'green', textAlign:'center',height:'2%',width:'100%'}}><b>Select From:</b></h1>
          <div style={{ display: "flex", justifyContent: "space-evenly", margin: "15px" }}>
            <div className="card-container">
              <div className="image-container">
                <Link to="/men's clothing">
                <img src="./men's fashion.jpg" alt="" height='80%' width='52%' style={{marginLeft:'45px'}}/>
                </Link>
              </div>
              <div className="card-body" style={{marginLeft:'80px'}}>
                  <h3>Men's Fashion</h3>
              </div>
            </div>
            <div className="card-container">
              <div className="image-container">
                <Link to="/women's clothing">
                  <img src="./women'fashion.jpg" alt="" height='45%' width='53%' />
                </Link>
              </div>
              <div className="card-body" style={{marginLeft:'15px',marginRight:'5px'}}>
                  <h3>Women's Fashion</h3>
              </div>
            </div>
            <div className="card-container">
              <div className="image-container">
                <Link to='jewelery'>
                  <img src="./jewellery.webp" alt="" height='auto' width='125%' style={{marginLeft:'5px',marginRight:'55px'}}/>
                </Link>
              </div>
              <div className="card-body" style={{marginLeft:'105px'}}>
                  <h3>Jewelery</h3>
              </div>
            </div>
            <div className="card-container">
              <div className="image-container">
                <Link to='electronics'>
                  <img src="./electronics.jpeg" alt="" height='54%' width='50%' style={{marginLeft:'200px'}}/>
                </Link>
              </div>
              <div className="card-body" style={{marginLeft:'290px'}}>
                  <h3>Electronics</h3>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", margin: "15px" }}>
            <h1 style={{color:'darkred',backgroundColor:'violet', textAlign:'center',height:'2%',width:'100%'}}><b>Our Products:</b></h1>
            {info.map((val, index) => (
                <div className="card-container" style={{ width: "25%", marginBottom: "40px", marginLeft:'20px', marginTop:'60px'}} key={index}>
                    <div style={{ textAlign: "center" }}>
                        <div className="image-container">
                          <Link to={`/${val?.id}`}>
                           <img src={val?.image} style={{ maxWidth: "50%", height: "auto" }}/>
                           </Link>
                         </div>
                        <div className="card-body">
                            <h3>{val?.title}</h3>
                            <h4>₹{val?.price}    {val?.rating?.rate}</h4> 
                        </div>           
                    </div>
                </div>
            ))}
    </div>
  </div>
  )
}
