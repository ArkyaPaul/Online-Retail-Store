import React, {useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Women() {
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
            .then((res) => { setInfo(res.data) })
            .catch((err) => { console.log(err) })
    },[])

    return (
        <div>
            <h1 style={{ color: 'darkred', backgroundColor: 'violet', textAlign: 'center', height: '2%', width: '100%' }}><b>Welcome to Women's Fashion</b></h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", margin: "15px" }}>
                {
                    info.map((val) => {
                        if (val?.category === "women's clothing") {
                            return (
                                <div className="card-container" style={{ width: "25%", marginBottom: "40px", marginLeft: '20px', marginTop: '60px' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div className="image-container">
                                        <Link to={`/${val?.id}`}>
                                            <img src={val?.image} alt="" style={{ maxWidth: "80%", height: "auto" }} />
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <h3>{val?.title}</h3>
                                            <h4>₹{val?.price}  {val?.rating?.rate}</h4>
                                            {/* <button style={{ backgroundColor: 'green', color: 'lightorange', marginLeft: '10px' }}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })
                }
            </div>
        </div>
    )
}
