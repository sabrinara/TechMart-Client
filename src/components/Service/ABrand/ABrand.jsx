import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Rating from 'react-rating';

const ABrand = () => {
    const [products, setProducts] = useState();
    const [filterProducts, setFilterProducts] = useState([]);
    const abrands = useLoaderData();
    const { id } = useParams();
    const abrand = abrands.find(brand => brand.id == id);
    const { brand_name, slider1, slider2, slider3 } = abrand || {};

    useEffect(() => {
        fetch('https://tech-elec-shop-backend.vercel.app/products', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                const filteredProducts = data.filter((product) => product.brand_name === brand_name);
                setProducts(data);
                setFilterProducts(filteredProducts);
            })
            .catch((error) => console.error(error));
    }, [brand_name]);
    console.log(filterProducts)
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
                filterProducts.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 md:mx-8 lg:mx-16 my-8">
                        {filterProducts.map(product => (
                            <div key={product._id} className="card lg:h-[20rem] lg:card-side bg-base-100 shadow-xl">
                                <figure className=" lg:w-[50%]" >
                                    <img src={product.photo} className="w-full h-96 md:h-64 lg:h-full lg:object-center " alt="Album" />
                                </figure>
                                <div className="card-body lg:w-[50%] md:mt-6 md:mb-4">
                                    <h2 className="card-title text-2xl">{product.name}</h2>
                                    <p className=" text-xl">{product.type}</p> 
                                    <p className="text-cyan-900 font-bold text-xl">Price: {product.price} $</p>
                                    <p className="text-sm md:text-lg ">
                                        <Rating
                                            className='text-center mb-2'
                                            initialRating={product.rating}
                                            readonly={true}
                                            emptySymbol={<span style={{ fontSize: '30px', color: 'teal' }}>☆</span>}
                                            fullSymbol={<span style={{ fontSize: '30px', color: 'teal' }}>★</span>}
                                        /></p>
                                    <div className="flex flex-row items-center justify-start gap-6 lg:gap-3 ">
                                        <Link to={`/abranddetail/${product._id}`}>
                                            <button className="py-2 px-4 text-sm  rounded bg-sky-600 text-white hover:bg-cyan-500 hover:text-white">Details</button>
                                        </Link>
                                        <Link to={`/updateproduct/${product._id}`}>

                                            <button className="py-2 px-4 text-sm  rounded bg-sky-600 text-white hover:bg-cyan-500 hover:text-white ml-2">Update</button>
                                        </Link>
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
