import HTML5Logo from '../logos/HTML5.svg';
import CSS3logo from '../logos/CSS3.svg';
import JSlogo from '../logos/JS.svg';
import TSlogo from '../logos/TS.svg';
import ReactJSlogo from '../logos/ReactJS.svg';
import Tailwindlogo from '../logos/Tailwind.svg';
import NextJSlogo from '../logos/NextJS.svg';
import PostregsSQLlogo from '../logos/PostgresSQL.svg';
import MongoDBlogo from '../logos/MongoDB.svg';
import NodeJSlogo from '../logos/NodeJS.svg';
import FirebaseLogo from '../logos/Firebase.svg';
import SQLlogo from '../logos/sql.svg';

const Services = () => {
    return (
        <div id="Services"  className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-right" className=" text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Services</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <img data-aos="fade-up" src={HTML5Logo} alt="HTML5 Logo" className="h-36 w-44" />
                <img data-aos="fade-down" src={CSS3logo} alt="CSS3 logo" className="h-36 w-44" />
                <img data-aos="fade-up" src={JSlogo} alt="JS logo" className="h-36 w-44" />
                <img data-aos="fade-down" src={TSlogo} alt="TS Logo" className="h-36 w-44" />
                <img data-aos="fade-up" src={ReactJSlogo} alt="ReactJS logo" className="h-36 w-44" />
                <img data-aos="fade-down" src={Tailwindlogo} alt="Tailwind logo" className="h-36 w-44" />
                <img data-aos="fade-up" src={NextJSlogo} alt="NextJS logo" className="h-36 w-44" />
                <img data-aos="fade-down" src={PostregsSQLlogo} alt="Postgres logo" className="h-36 w-44" />
                <img data-aos="fade-up" src={MongoDBlogo} alt="MongoDB logo" className="h-36 w-44" />
                <img data-aos="fade-down" src={NodeJSlogo} alt="NodeJS logo" className="h-36 w-44" />
                <img data-aos="fade-up" src={FirebaseLogo} alt="Firebase logo" className="h-36 w-44" />
                <img data-aos="fade-down" src={SQLlogo} alt="SQL logo" className="h-36 w-44" />
                </div>
        </div>
    )
}

export default Services