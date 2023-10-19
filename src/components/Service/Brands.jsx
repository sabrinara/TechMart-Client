import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Brands = ({ brand }) => {
    const { id, brand_image, brand_name } = brand || {};
    return (
        <div>
            <div className="relative flex flex-col mt-6 text-cyan-700 bg-white shadow-md w-72 h-80 rounded-xl bg-clip-border">
                <Link to={`/abrand/${id}`}>
                    <div className="flex flex-col items-center justify-center pt-10">
                        <img src={brand_image} className="w-40 h-36" alt="" />
                        <h5 className="block mb-2 mt-3 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {brand_name}
                        </h5>
                    </div>

                    <div className="flex flex-col p-6 pt-0 items-center justify-center ">
                        <a
                            className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-blue-500"
                            href="#"
                        >
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-sky-600 uppercase align-middle transition-all rounded-lg select-none hover:bg-sky-100 active:bg-sky-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-dark="true"
                            >
                                Explore More <FaArrowRight></FaArrowRight>

                            </button>
                        </a>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Brands;