import { useEffect } from "react";
import { useState } from "react";



const MyCart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/carts`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => console.error(error));
    },[]);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/carts/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully");
                    const remaining = products.filter((product) => product._id !== id);
                    setProducts(remaining);
                }
            })
            .catch((error) => console.error(error));
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