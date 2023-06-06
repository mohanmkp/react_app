import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import * as commaon from "../components/commaon"
import axios from 'axios';


 const ProductDetail = () => {
    var base_url =  commaon.base_url;
    let params = useParams();
    console.log(params.id)
    const [data, setData] = useState(null);


    
    useEffect(()=>{
        axios.get(base_url+'/product/?id='+String(params.id))
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });

    }, [base_url, params.id])
  return (
    <>

    {data ?     <section className="product-details spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="product__details__pic">
                        <div className="product__details__pic__item">
                            <img className="product__details__pic__item--large"
                                src={base_url+data.image} alt="product details" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="product__details__text">
                        <h4>{data.title}</h4>
                        <div className="product__details__rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div className="product__details__price">Rs {data.price}</div>
                        <p>{data.more_details}</p>
                        {/* <div className="product__details__quantity">
                            <div className="quantity">
                                <div className="pro-qty">
                                    <input type="text" value="1" />
                                </div>
                            </div>
                        </div> */}
                        <a href="/" className="primary-btn">Buy Now</a>
                        {/* <a href="/" className="heart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg></a> */}
                        <ul>
                            <li><b>Availability</b> <span>In Stock</span></li>
                            <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                            <li><b>Weight</b> <span>0.5 kg</span></li>
                            <li><b>Share on</b>
                                <div className="share">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                    <a href="/"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
              
            </div>
        </div>
    </section> : 
    "loading"
    }

  
    </>
  )
}



export default ProductDetail;



