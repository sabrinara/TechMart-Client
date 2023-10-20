import { useLoaderData, useParams } from "react-router-dom";

const ABrandDetail = () => {
    const abrands = useLoaderData();
    console.log(abrands);
    const {id } = useParams();
    console.log(id);

    const product = abrands.products?.find(brand => brand.id == id);
    console.log(product);
    const { image, title, short_description, price } = product || {};
   
    
    return (
        <div>
            <h1>{image}</h1>
            {/* <div className="m-10">
                <h1 className="text-3xl text-cyan-800 lg:text-5xl my-10 font-bold text-center">{title}</h1>
                <img className="w-full md:w-[80%] md:h-[70vh]  lg:w-[80%] lg:h-[80vh] mx-auto my-auto" src={image} alt="" />
               <div className="my-10 lg:mx-24">
               <p >{short_description}</p>
                <br />
                <p>{price} $</p>
               </div>
            </div> */}
        </div>
    );
};

export default ABrandDetail;