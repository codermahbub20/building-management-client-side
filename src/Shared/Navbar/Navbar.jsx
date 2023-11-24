import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import MenuDropdown from "./MenuDropDown";
import useAuth from "../../Components/hooks/useAuth";


const Navbar = () => {

    const { user } = useAuth()
    console.log(user)
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><Link >Apartment</Link></li>
        <li><Link >Home</Link></li>
    </>

    return (
        <Container>
            <div className="navbar bg-neutral-600 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="cursor-pointer"><div className="flex items-center">
                        <img className="w-24 h-16" src="/public/logo11.png" alt="" />
                        <h1 className="text-xl hidden md:block">West Cot</h1>
                    </div></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <MenuDropdown></MenuDropdown> :
                            <Link to="/login">
                                Login
                            </Link>
                    }
                </div>
            </div>
        </Container>
    );
};

export default Navbar;