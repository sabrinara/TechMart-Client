import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {  useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const ABrandDetail = () => {

    const [product, setProduct] = useState({});
    const { user } = useContext(AuthContext);
    const email = user.email;
    console.log(user);
    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        fetch(`https://tech-elec-shop-backend.vercel.app/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setProduct(data);
            })
            .catch((error) => console.error(error));
    }, [id])

    // console.log(product)
    const { photo, name, description, price,rating } = product || {};

    const cartProduct = {
        photo,
        name,
        description,
        price,
        rating,
        email
    }

    const handleAddToCart = () => {

        fetch('https://tech-elec-shop-backend.vercel.app/carts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data); 
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Product Added into My Cart Sucessfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool!',
                  
                  })
            }
        })
        console.log("here cart",cartProduct);
    }

    return (
        <div>

            <div className="m-10">
                <h1 className="text-3xl text-cyan-800 lg:text-5xl my-10 font-bold text-center">{name}</h1>
                <img className="w-full md:w-[80%] md:h-[70vh]  lg:w-[80%] lg:h-[80vh] mx-auto my-auto" src={photo} alt="" />
                <div className="my-10 lg:mx-24">
                    <p >{description}</p>
                    <br />
                    <p>{price} $</p>
                </div>
                <div>
                   
                        <button className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</button>
                   
                </div>
            </div>
        </div>
    );
};

export default ABrandDetail;