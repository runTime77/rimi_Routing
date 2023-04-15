import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className="App">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href="http://localhost:3000/">Home</a></li>
                                <li tabIndex={0}>
                                    <a
                                        className="justify-between"
                                        href="http://localhost:3000/products">
                                        Products
                                    </a>

                                </li>
                                <li><a href="http://localhost:3000/contactus">Contact Us</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                {/*<a href="http://localhost:3000/">Home</a> */}
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li tabIndex={0}>
                                {/*<a href="http://localhost:3000/products">
                                    Products
                                 </a>*/}
                                <Link to={"/products"}>Products</Link>
                            </li>
                            <li>
                                {/*<a href="http://localhost:3000/contactus">Contact Us</a>*/}
                                <Link to={"/contactus"}>ContactUs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Get started</a>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;