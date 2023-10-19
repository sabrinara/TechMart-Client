import { useLoaderData, useParams } from "react-router-dom";

const ABrand = () => {
    const abrands = useLoaderData();
    const { id } = useParams();
    const abrand = abrands.find(brand => brand.id == id);
    const { brand_image, brand_name, slider1, slider2, slider3, products } = abrand || {};
    console.log(abrand);

    return (
        <div>
            {/* <img src={brand_image} alt="" /> */}
            <h1>{brand_name}</h1>

            {/* slider div */}
            <div className="text-center">
                <div className="carousel w-[80%] ">
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
            {
                products.map(product => <div key={product.id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                  
                </div>)
            }
        </div>
    );
};

export default ABrand;