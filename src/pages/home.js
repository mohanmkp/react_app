import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import * as commaon from "../components/commaon"



function Home() {
    // var base_url =  "http://34.122.53.242:8000"
    var base_url =  commaon.base_url;



    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(base_url+'/product/')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, [base_url]);
  
  return (
    <>

    {/* <!-- Categories Section Begin --> */}
    <section className="categories">
        <div className="container">
            <div className="row">
                <div className="categories__slider owl-carousel">
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                            <h5><a href="/">Fresh Fruit</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                            <h5><a href="/">Dried Fruit</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                            <h5><a href="/">Vegetables</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                            <h5><a href="/">drink fruits</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                            <h5><a href="/">drink fruits</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Categories Section End --> */}



    {/* <!-- Featured Section Begin --> */}
    <section className="featured spad">
        <div className="container">
        
            <div className="row featured__filter">

            {data &&
                data.map((product) => (
                
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg" data-setbg={product.image}>
                        <Link to={`/product/${product.id}`}>
                          <img src={base_url+product.image} alt='hello' />
                        </Link>
                        <ul className="featured__item__pic__hover">
                            <li><i className="fa fa-heart"></i></li>
                            <li><i className="fa fa-retweet"></i></li>
                            <li><i className="fa fa-shopping-cart"></i></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6 className='text-truncate'><Link to="/product">{product.title}</Link></h6>
                        <h5>₹ {product.price}</h5>
                    </div>
                </div>
                </div>
            ))}

              
              

            </div>
        </div>
    </section>
    {/* <!-- Featured Section End --> */}

    </>
  )
}

export default Home