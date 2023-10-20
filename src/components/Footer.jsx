const Footer = () => {
    return (
        <footer className="w-full p-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-y-6   text-center md:justify-between">
                <div className="flex  items-center  md: mr-10 lg:ml-32 ">
                    <img src={"https://i.ibb.co/ThYFm6z/logo.png"} alt="logo-ct" className="w-10" />
                    <h1 className="text-2xl font-serif font-semibold">TechMart</h1>
                </div>

                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 lg:mr-32">
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            License
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            Contribute
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-cyan-800 lg:mx-24" />
            <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                © 2023, TechMart -Technology & Electronics <br /> Brand Shop Website<br /> <small> @Sabrina Rashid</small>
            </p>
        
</footer >
      
    );
};

export default Footer;