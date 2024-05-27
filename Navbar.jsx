import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import './Nav.css'
export default function Navbar() {
    const [info, setInfo] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
            .then((res) => { setInfo(res.data) })
            .catch((err) => { console.log(err) })
    },[])
    return (
        <div>
                <nav>
                <ul>
                    <li style={{paddingLeft:'40px'}}>
                        <Link to='/'><b>Home</b></Link>
                    </li>
                    <li className="dropdown" style={{paddingLeft:'40px'}}>
                    <h4 className="dropbtn" style={{color:'white'}}>Categories</h4>
                    <div className="dropdown-content">
                        {
                            info.map((val)=>{
                                return <Link to={`/${val}`}>{val}</Link>
                            })
                        }        
                    </div>
                    </li>
                    <li style={{paddingLeft:'40px'}}>
                        <Link to='/carts'><b>My Cart</b></Link>
                    </li>
                </ul>
            </nav>
    </div>
        
    )}

 
