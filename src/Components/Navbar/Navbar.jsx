import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = (
        <>
            <li className="hover:text-[#494949] text-[#737373] font-[700] text-[14px] cursor-pointer">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-[#494949] text-[#737373] font-[700] text-[14px] cursor-pointer">
                <NavLink to="/listing_book">Listed Books</NavLink>
            </li>
            <li className="hover:text-[#494949] text-[#737373] font-[700] text-[14px] cursor-pointer">
                <NavLink to="/page_to_read">Pages To Read</NavLink>
            </li>
        </>
    );

    return (
        <div>
            <nav className="mb-6 work-sans">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <Link to="/" className="btn btn-ghost text-xl flex items-center justify-center">
                            <span className="md:text-3xl text-2xl font-[700]">Book Vibe</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1 space-x-7">{links}</ul>
                    </div>
                    <div className="navbar-end">
                        <div className="md:block hidden py-3 px-5 rounded-full">
                            <button className="mr-5 rounded-lg py-4 px-5 bg-[#23BE0A] text-white font-semibold">Sign In</button>
                            <button className="rounded-lg py-4 px-5 bg-[#59C6D2] text-white font-semibold">Sign Up</button>
                        </div>
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                                {links}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
