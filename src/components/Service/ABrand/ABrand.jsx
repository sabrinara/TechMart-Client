import { useLoaderData, useParams } from "react-router-dom";

const ABrand = () => {
    const abrands = useLoaderData();
    const { id } = useParams();
    const abrand = abrands.find(brand => brand.id == id);
    const { brand_name, slider1, slider2, slider3, products } = abrand || {};
    console.log(abrand);

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-16 text-cyan-900">{brand_name}</h1>

            {/* slider div */}
            <div className="text-center">
                <div className="carousel w-[70%] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slider1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slider2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slider3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-20 my-20 ">
                {
                    products.map(product => <div key={product.id}>
                        <div className="card w-96 md:w-[90vh] h-[75vh] md:h-[60vh] lg:card-side bg-base-100 shadow-xl">
                            <figure><img className="w-56 md:w-[50vh] md:h-80" src={product.image} alt="Album" /></figure>
                            <div className="card-body md:mt-10">
                                <h2 className="card-title">{product.name}</h2>
                                <h1>{product.type}</h1>
                                <h1>{product.price} $</h1>
                                <h1>{product.rating}</h1>

                                <div className="card-actions flex items-center justify-left ">
                                    <button className="py-2 px-2 text-sm rounded bg-sky-600 text-white hover:bg-cyan-500 hover:text-white ">Details</button>
                                    <button className="py-2 px-2 text-sm rounded bg-sky-600 text-white hover:bg-cyan-500 hover:text-white ">Update</button>

                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ABrand;