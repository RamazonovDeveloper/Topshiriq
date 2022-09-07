import React from 'react';
import logo from '../images/IMAGE.svg'
import cart from '../images/Vector.svg'


const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className='menu'>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        
                    </ul>


                    <div className='btn'>
                        <div className="cart">
                            <img src={cart} alt="" />
                            <p>Cart</p>
                            <p>0</p>
                        </div>
                        <button className='sighup'>Sign up for Beta</button>
                    </div>

                    <div className='toggle'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </nav>
            </div>
        </header>
    );
}

export default Navbar;
