
import img from "../assets/foto_perfil.jpg"


const About = () => {
    return (
            <div id ="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <img data-aos='fade-down' src={img} width={290} height={290} className=" border-2 p-1 border-fuchsia-500 img_glow" alt="profile_pic" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
                <h1 data-aos='fade-right' className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">About me</h1>
                    <p data-aos='fade-right justify-center' >Full-stack developer certified by the bootcamp Soy Henry with more than 800 hours of study and practice in the PERN stack and working methodologies (Agile and SCRUM). Front-End developer certified by OpenBootcamp bootcamp in responsive web development and basic and advanced JavaScript. Currently studying programming technician at Teclab. I was diagnosed with type 1 diabetes at 21, which gave me adaptability and determination. With experience in customer service, radio and NGOs, I have strong skills in communication, teamwork and problem solving.
In addition, I have solid knowledge in TypeScript and NextJS. My advanced level of English (C1) facilitates international communication. My goals are to apply my skills in solutions beneficial to society. I am looking to integrate into a collaborative and dynamic team, contribute and learn. Open to remote opportunities, connect with me to explore new opportunities in software development.</p>
                    <div className="flex mt-8 gap-2">
                        <div className="flex items-center justify-center">
                            <div className="flex space-x-2">
                                <a href="https://drive.google.com/file/d/1Zm1VjECJXU1ODxMtjqvQ31G7ScyXcJdn/view?usp=sharing" download={"cv"}>
                                <button className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Download CV</button>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About;