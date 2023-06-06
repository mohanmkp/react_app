import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from "react-router";
import { Fragment } from 'react';

function Navbar() {

    var base_url =  "http://127.0.0.1:8000"

    const [open, setOpen] = React.useState(false);
    const [isSignin, setSignin] = React.useState(false)
    const [Category, setCategory] = useState(false)


    const handleClickOpen = () => {
      setOpen(true);
    };



    const handleClose = (event, reason) => {
        if (reason && reason === "backdropClick") 
            return;
            setOpen(false);
    }



    const SingIned = (response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        setSignin(true)
        setOpen(false);

    }

    function Signin_handler(event){
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const data = { email: email, password: password}
        axios.post(base_url+'/user/signin/', data)

        .then(response => SingIned(response))
        .catch(error => {
            console.error('sign in error', error);
        });       

    }

    useEffect(() => {
        // authenctication check
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            if(user){
                setSignin(true)
            }
          }
          catch(err) {
            setSignin(false)
          }
      }, [isSignin]);
      
  return (
    <>
     {/*  <!-- Header Section Begin --> */}
    <header className="header">
    
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <Link to="/"><img src={require('./images/logo.png')} alt="logo" /></Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><a href="./shop-grid.html">Shop</a></li>
                            <li><a href="/">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="/"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="/"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
    {/* header end */}


     {/* <!-- Hero Section Begin --> */}
     <section className="hero hero-normal">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="fa fa-bars" onClick={() => Category ? setCategory(false):setCategory(true)}></i>
                            <span>Categories</span>
                            <i className="fa-solid fa-caret-down float-right" onClick={() => Category ? setCategory(false):setCategory(true)}></i>
                        </div>
                        <ul className={Category ? 'd-block overflow-hidden': "d-none"}>
                            <li><a href="/">Fresh Meat</a></li>
                            <li><a href="/">Vegetables</a></li>
                            <li><a href="/">Fruit & Nut Gifts</a></li>
                            <li><a href="/">Fresh Berries</a></li>
                            <li><a href="/">Ocean Foods</a></li>
                            <li><a href="/">Butter & Eggs</a></li>
                            <li><a href="/">Fastfood</a></li>
                            <li><a href="/">Fresh Onion</a></li>
                            <li><a href="/">Papayaya & Crisps</a></li>
                            <li><a href="/">Oatmeal</a></li>
                            <li><a href="/">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="/">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?" />
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                            <i className="fa-solid fa-user"></i>
                            </div>

                            <div className="hero__search__phone__text">
                                {isSignin ? <div className='mt-2'>{JSON.parse(localStorage.getItem('user')).first_name}
                                </div>: <button type="submit" className="site-btn" onClick={handleClickOpen}>Sing In</button>}
                            
                            {/* <Button  className="site-btn" onClick={handleClickOpen}  variant="contained">Login</Button> */}

                            <Dialog open={open} onClose={handleClose }  aria-labelledby="simple-dialog-title" >
                                <DialogTitle>Login</DialogTitle>
                                       <form onSubmit={Signin_handler}>
                                             <DialogContent>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Email Address"
                                            type="email"
                                            fullWidth
                                            variant="outlined"
                                            name="email"
                                        />
                                        
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="password"
                                            label="Password"
                                            type="password"
                                            fullWidth
                                            variant="outlined"
                                            name='password'
                                            
                                        />

                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleClose}>Close</Button>
                                        <Button type='submit'>Login</Button>
                                        </DialogActions> 
                                        </form>
                                      
                            </Dialog>
                            </div>
                        </div>
                    </div>
                    {/* <div className="hero__item set-bg" data-setbg={require('./images/banner.jpg')}>
                        <img src={require('./images/banner.jpg')} alt='banner'/>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section End --> */}
 
    <Outlet/>
    <Fragment>

  </Fragment>

    </>
  )
}

export default Navbar