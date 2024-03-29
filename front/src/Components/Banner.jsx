import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn } from "react-icons/fa";
import img from "../assets/foto_perfil.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
    useEffect (() =>{
        AOS.init({
            easing: 'ease-out-cuart',
            delay: 0,
            duration: 750
        })
    },[])
    return (
                                            //lg:px-56 px-10 lg:py-0 py-20 text-center lg:text-left gap-5 lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center
        <div data-aos='fade-up' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-left flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
                <h1 data-aos='fade-right' className=" text-4xl lg:text-[50px] font-semibold mb-2 lg:mb-8 leading-normal uppercase">Welcome to <span className="text-fuchsia-500">My website</span></h1>
                <h2 data-aos='fade-right' className="text-xl lg:text-[20px] font-semibold mb-8 uppercase">Full-Stack/Front-end developer</h2>
                    <div className="flex mt-8 gap-2">
                        <div className="flex items-center justify-center">
                            <div className="flex space-x-2">
                                <a href="https://github.com/AlanAlmeida77" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                    <AiFillGithub className="text-[30px]" />
                                </a>
                                <a href="https://www.linkedin.com/in/alan-almeida77/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                    <FaLinkedinIn className="text-[30px]" />
                                </a>

                            </div>
                        </div>
                    </div>
            </div>
            <img data-aos='fade-up' src={img} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="profile_pic" />
        </div>
    );
};

export default Banner