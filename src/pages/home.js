import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {


    const [data, setData] = useState(null);
   
    useEffect(() => {
        axios.get('http://54.236.250.116:8000/product/')
          .then(response => {
            setData(response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
  
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
                        <img src={product.image} alt='hello' />
                        <ul className="featured__item__pic__hover">
                            <li><a href="/"><i className="fa fa-heart"></i></a></li>
                            <li><a href="/"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="/">{product.title}</a></h6>
                        <h5>$30.00</h5>
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