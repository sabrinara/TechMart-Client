import { Link, useLoaderData, useParams } from "react-router-dom";


const ABrand = () => {
    const abrands = useLoaderData();
    const { id } = useParams();
    const abrand = abrands.find(brand => brand.id == id);
    const { brand_name, slider1, slider2, slider3, products } = abrand || {};

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-16 text-cyan-900">{brand_name}</h1>

            {/* Slider div */}
            <div className="text-center">
                <div className="carousel w-full md:w-3/4 mx-auto">
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

            {/* Products */}
            {
                products ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mx-4 md:mx-8 lg:mx-16 my-8">
                        {products.map(product => (
                            <div key={product.id} className="flex justify-center">
                                <div className="card w-80  h-[75vh]  bg-base-100 shadow-xl">
                                    <figure><img className="w-70 h-64 object-cover" src={product.image} alt="Album" /></figure>
                                    <div className="card-body p-4 md:p-6">
                                        <h2 className="card-title text-lg md:text-xl lg:text-2xl xl:text-3xl">{product.name}</h2>
                                        <p className="text-sm md:text-base lg:text-lg xl:text-xl">{product.type}</p>
                                        <p className="text-sm md:text-base lg:text-lg xl:text-xl">{product.price} $</p>
                                        <p className="text-sm md:text-base lg:text-lg xl:text-xl">{product.rating}</p>

                                        <div className="card-actions flex items-center justify-left mt-2">
                                            <Link to={`/abranddetail/${product.id}`}>
                                                <button className="py-2 px-4 text-sm md:text-base lg:text-lg xl:text-xl rounded bg-sky-600 text-white hover:bg-cyan-500 hover:text-white">Details</button>
                                            </Link>

                                            <button className="py-2 px-4 text-sm md:text-base lg:text-lg xl:text-xl rounded bg-sky-600 text-white hover:bg-cyan-500 hover:text-white ml-2">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    :
                    
                   <div>
                       <h1 className="text-3xl text-cyan-800 lg:text-5xl my-10 font-bold text-center">No Products Found</h1>
                   </div>
                 
            }
            </div>
    );
};

export default ABrand;
