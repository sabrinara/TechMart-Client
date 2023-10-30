import { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateProduct = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://tech-elec-shop-backend.vercel.app/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((error) => console.error(error));
    }, [id]);
    console.log(product)
    const { photo, name, brand_name, description, price, type, rating : prevrating } = product || {};

    const [rating, setRating] = useState(prevrating);

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const photo = form.photo.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const type = form.type.value;
        const updatedProduct = { name, photo, price, description, type, rating, brand_name };
        console.log(updatedProduct);

        fetch(`https://tech-elec-shop-backend.vercel.app/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success',
                        text: 'Updated Product Sucessfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool!',
                      })  
                      navigate(-1);
                }
            })
    }
    return (
        <div className="hero" style={{ height: '150vh', backgroundImage: 'url(https://i.ibb.co/B6bgwG4/bg.jpg)' }} >
            <div>
                <h1 className="text-5xl text-center font-bold mb-10 text-cyan-900">Update Product</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="hidden lg:flex text-center lg:text-left">
                        <img src="https://i.ibb.co/N6NRHKM/Upload.png" className="max-w-lg rounded-lg shadow-2xl ml-10 h-[70vh]" alt="" />

                    </div>

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleUpdateProduct}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="name"   defaultValue={brand_name} className="input input-bordered" name='brand_name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="text" name="photo" defaultValue={photo} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="name" name='name' defaultValue={name} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Type</span>
                                </label>
                                <select className="select select-bordered" name="type" defaultValue={type} required>
                                    <option value="" disabled selected>Select product type</option>
                                    <option value="phone">Phone</option>
                                    <option value="computer">Computer</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="refrigerator">Refrigerator</option>
                                    <option value="headphone">Headphone</option>
                                    <option value="webcam">Webcam</option>
                                    <option value="speaker">Speaker</option>
                                    <option value="Airpods">Airpods</option>
                                    <option value="Monitor">Monitor</option>
                                    <option value="Tablet">Tablet</option>
                                    <option value="Smart_Watch">Smart Watch</option>
                                    <option value="Keyboard">Keyboard</option>
                                    <option value="Adapter">Adapter</option>
                                    <option value="CPU">CPU</option>
                                    <option value="SSD">SSD</option>
                                    <option value="Server">Server</option>
                                    <option value="Graphics Card">Graphics Card</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product price</span>
                                </label>
                                <input type="text" name='price' defaultValue={price} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' defaultValue={description} className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <Rating
                                    className='text-center mb-6'
                                    initialRating={rating}
                                    onChange={(updatedRating) => setRating(updatedRating)}
                                    emptySymbol={<span style={{ fontSize: '30px', color: 'teal' }}>☆</span>}
                                    fullSymbol={<span style={{ fontSize: '30px', color: 'teal' }}>★</span>}
                                />
                                <button className="btn text-cyan-900 font-semibold">Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpdateProduct;