import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/slices/cartSlice";

export default function AnyProduct() {
  const { pid } = useParams();
  const dispatch = useDispatch();
  const [info, setInfo] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => { 
        setInfo(res.data);
        const product = res.data.find(product => product.id === parseInt(pid));
        if (product) {
          setCategory(product.category);
        }
      })
      .catch((err) => { console.log(err); });
  }, [pid]);

  return (
    <div>
      <div>
        <h2 style={{ textAlign: 'center', color: 'darkgreen' }}><b>You have an Excellent Choice</b></h2>
        <div style={{ display: "flex" }}>
          <div>
            {
              info.map((val) => {
                if (val?.id === parseInt(pid)) {
                  return (
                    <div key={val.id}>
                      <img src={val?.image} alt="" width='85%' />
                      <br /><br />
                      <button
                        style={{ backgroundColor: 'green', color: 'lightorange', marginLeft: '85px' }}
                        onClick={() => dispatch(addItem(val))}
                      >
                        Add to cart
                      </button>
                    </div>
                  );
                }
                return null;
              })
            }
          </div>
          <div>
            {
              info.map((val) => {
                if (val?.id === parseInt(pid)) {
                  return (
                    <div key={val.id} style={{ marginLeft: '20px' }}>
                      <h3><b style={{ color: 'darkred' }}>PRODUCT DETAILS</b></h3>
                      <h4 style={{ color: 'blue' }}><b style={{ color: 'brown' }}>Name:</b> {val?.title}</h4>
                      <h4 style={{ color: 'blue' }}><b style={{ color: 'brown' }}>Description:</b> {val?.description}</h4>
                      <h4 style={{ color: 'blue' }}><b style={{ color: 'brown' }}>Category:</b> {val?.category}</h4>
                      <h4 style={{ color: 'blue' }}><b style={{ color: 'brown' }}>Price:</b> ₹{val?.price}</h4>
                      <h4 style={{ color: 'blue' }}><b style={{ color: 'brown' }}>Rating:</b> {val?.rating?.rate}</h4>
                      <h4 style={{ color: 'blue' }}><b style={{ color: 'brown' }}>Rated by</b> {val?.rating?.count} <b style={{ color: 'brown' }}>persons</b></h4>
                    </div>
                  );
                }
                return null;
              })
            }
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: 'center', color: 'indigo' }}><b>Shop For More..!!</b></h2>
        <div>
          <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-evenly", margin: "15px" }}>
            {
              info.map((val) => {
                if (val?.category === category && val?.id !== parseInt(pid)) {
                  return (
                    <div className="card-container" key={val.id} style={{ width: "25%", marginBottom: "40px", marginLeft: '20px', marginTop: '60px' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div className="image-container">
                          <Link to={`/${val?.id}`}>
                            <img src={val?.image} alt="" style={{ width: "60%", height: "auto" }} />
                          </Link>
                        </div>
                        <div className="card-body">
                          <h3>{val?.title}</h3>
                          <h4>₹{val?.price}  {val?.rating?.rate}</h4>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })
            }
          </div>
        </div>     
      </div>
    </div>
  );
}
