

const Brands = () => {
    return (
        <div>
            <div className="bg-sky-900 p-10">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="p-6">
                        <img src="https://i.ibb.co/SnhTkgN/p1.png" alt="" />
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            UI/UX Review Check
                        </h5>

                    </div>
                    <div className="p-6 pt-0">
                        <a
                            className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-blue-500"
                            href="#"
                        >
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-sky-600 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-dark="true"
                            >
                                Explore More

                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;