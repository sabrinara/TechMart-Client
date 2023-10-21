import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../providers/AuthProvider";

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
        <div>
            {
                products?.map((product) => (
                    <div key={product._id}>
                        <h1>{product.name}</h1>
                        <button className="btn btn-primary" onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default MyCart;