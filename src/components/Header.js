import { useEffect, useState } from 'react';
// import logo from '../logo/Screenshot (76).png';
import logo from '../logo/swiggy1.png';
import { Link } from 'react-router-dom';

const Header = () => {
    //---Dynamically change logIn 🔄️ logOut. 
    // let btnName = "login";
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render....");

    useEffect(() => {
        console.log("useEffect() called....");
    }, []);


    return (
        <div className="header">
            <div className="logo-container">
                {/* https://e7.pngegg.com/pngimages/332/214/png-clipart-restaurant-name-logo-layout-illustration-logo-restaurant-food-food-logo-design-food-text.png */}
                {/* src="./logo/food-high-resolution-logo.png" */}
                {/* <img className="logo"
                    src={logo} alt='logo'
                /> */}
                <div className="logo-container">
                    <Link to="/" className="logo-link">
                        <img className="logo" src={logo} alt="logo" />
                        <span className="logo-text">Swiggy</span>
                    </Link>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    {/* <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li> */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/order'>Order</Link></li>
                    <button className="login"
                        onClick={() => {
                            // btnName = "Logout" ✅
                            // btnNameReact = "Logout".❌
                            ////
                            // setBtnNameReact("Logout"); // ✅
                            // console.log(btnNameReact);
                            ////
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login");
                        }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;