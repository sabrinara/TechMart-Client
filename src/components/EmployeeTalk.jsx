import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const EmployeeTalk = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
        });
    }, []);
    const emplyees = [
        {
            image: "https://i.ibb.co/smNpBGt/p-2.png",
            text: "I had an amazing experience with TechShade! Their team helped me organize a flawless event that exceeded all my expectations.",
            author: "Jessica Brown",
        },
        {
            image: "https://i.ibb.co/SnhTkgN/p1.png",
            text: "TechShade made event planning so easy and stress-free. Their attention to detail and creative ideas made our event truly special.",
            author: "Smith Williams",
        },
        {
            image: "https://i.ibb.co/GWxDLxr/p-3.png",
            text: "I can't thank TechShade enough for making my dream wedding a reality. From venue selection to decorations, everything was perfect.",
            author: "Emma Watson",
        },
    ];

    return (
        <div>
            <div className="w-full h-[5px] bg-cyan-950 my-2"></div>
            <div className="py-12 bg-teal-100 text-center">
                <div className="container mx-auto">
                    <h2 className="text-6xl font-bold  text-cyan-900 my-10">Employees Talk..</h2>
                   
                        <div className="flex justify-center items-center ">
                            <div className="grid grid-cols-1 my-20 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {emplyees.map((emplyee, index) => (
                                    <div key={index} className="p-6 bg-white rounded-xl  shadow-2xl" data-aos="zoom-in">
                                        <p className='flex justify-center'><img className="rounded-full w-28" src={emplyee.image} alt="" />
                                        </p>
                                        <p className="text-cyan-900 mt-3 mb-3">- {emplyee.author}</p>
                                        
                                        <p className="text-gray-800">{emplyee.text}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                 
                </div>
            </div>
        </div>
    );
};

export default EmployeeTalk;
