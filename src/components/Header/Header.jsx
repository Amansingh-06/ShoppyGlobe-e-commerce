import React from 'react';
import { NavLink } from 'react-router-dom';
import headerStyle from './Header.module.css';
import { RiHome4Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";




const Header = ({ setSearchTerm }) => {

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }
    return (
        <>

            <header className={headerStyle.header}>
                <div className={headerStyle.logo}>
                    <img src="https://companieslogo.com/img/orig/SGBX-52ea0f56.png?t=1633031689" alt="logo" style={{ width: 75, height: 75 }} />
                    <h1 className={headerStyle.textlogo}>ShoppyGlobe</h1>
                </div>
                <input type='text' className={headerStyle.input} placeholder='Search Items' onChange={handleSearch} />
                <nav>
                    <NavLink to="/" className={headerStyle.link} style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "rgb(68, 174, 232)"
                        };
                    }}><RiHome4Line className={headerStyle.homeicon} />
                        Home</NavLink>
                    <NavLink to="/cart" className={headerStyle.link} style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "rgb(68, 174, 232)"
                        };
                    }}><AiOutlineShoppingCart />
                        Cart</NavLink>

                </nav>
            </header>
        </>
    );
};

export default Header;
