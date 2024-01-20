import { useState } from "react";
import {Link} from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";


const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
        <div className = "lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition  text-white">
            <ul className = "text-center text-x1 p-20">
                <Link  spy={true} smooth={true} to= "About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                </Link>
                <Link  spy={true} smooth={true} to= "Services">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
                </Link>
                <Link  spy={true} smooth={true} to= "Projects">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
                <div className = "flex items-center flex-1">
                    <span className="text-3x1 font-bold">Logo</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className ="flex-10">
                    <ul className ="flex gap-8 mr-16 text-[18px]">
                <Link className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" spy={true} smooth={true} to= "Home">
                    <li>Home</li>
                </Link>
                <Link className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" spy={true} smooth={true} to= "About">
                    <li>About</li>
                </Link>
                <Link className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" spy={true} smooth={true} to= "Services">
                    <li>Services</li>
                </Link>
                <Link className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" spy={true} smooth={true} to= "Projects">
                    <li>Projects</li>
                </Link>
                    </ul>
                    </div>
                </div>
            </div>
                <div>
                        {click && content}
                </div>
                <button className ="  text-white fixed top-4 right-4 sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/> }
                </button>
        </nav>
    );
};

export default Nav;
