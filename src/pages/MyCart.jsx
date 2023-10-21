import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const MyCart = () => {
    const {user} = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://tech-elec-shop-backend.vercel.app/carts`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // filter data by email address
                const filteredData = data.filter(
                    (product) => product.email === user.email
                )
                setProducts(filteredData);
            })
            .catch((error) => console.error(error));
    }, []);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tech-elec-shop-backend.vercel.app/carts/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = products.filter((product) => product._id !== id);
                            setProducts(remaining);
                        }
                    })
                    .catch((error) => console.error(error));
            }
        })

    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 md:mx-8 lg:mx-16 my-8">
            {
                products?.map((product) => (
                    <div key={product._id} className="card lg:h-[20rem] lg:card-side bg-base-100 shadow-xl">
                    <figure className=" lg:w-[50%]" >
                        <img src={product.photo} className="w-full h-96 md:h-64 lg:h-full lg:object-center " alt="Album" />
                    </figure>
                    <div className="card-body lg:w-[50%] md:mt-10 md:mb-10">
                        <h2 className="card-title text-2xl">{product.name}</h2>
                        <p className=" text-xl">{product.type}</p> 
                        <p className="text-cyan-900 font-bold text-xl">Price: {product.price} $</p>
                        <div className="card-actions justify-start ">
                            <button className="py-2 px-4 text-sm  rounded bg-sky-600 text-white hover:bg-cyan-500 hover:text-white ml-2"onClick={() => handleDelete(product._id)}>Delete</button>
                        </div>
                    </div>
                </div>
                      
                ))
            }
        </div>
    );
};

export default MyCart;