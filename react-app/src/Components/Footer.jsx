import { FaGithub, FaLinkedinIn } from "react-icons/fa"


const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-3x1 font-semibold text-fuchsia-800 py-2 uppercase">Logo</span>
                    <p className="text-[16px] my-4">dasda fasrw  fdg  rfasda sadasd asd asdawd a sd ad asda w ad aw dadas daw a das daw dasd as asdas daf awfraw</p>
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Full-Stack Web Development</li>
                        <li className="my-2">Front-End Web Development</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
                    <p className="text-[16px] my-4">Email: davidalanalmeida@gmail.com</p>
                    <p className="text-[16px] my-4">Phone: +54 9 3435 23-0536 </p>
                </div>
                <div>
                    <div className="flex-space-x-4">
                        <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow me</h2>
                        <a className="text-white hover hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href=""> <FaGithub/></a>
                        <a className="text-white hover hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href=""> <FaLinkedinIn/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer