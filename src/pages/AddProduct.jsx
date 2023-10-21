import { useState } from 'react';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value; 
         const brand_name = form.brand_name.value;
        const photo = form.photo.value;
        const price =  parseFloat(form.price.value);
        const description = form.description.value;
        const type = form.type.value;
        const newProduct = { name, photo, price, description,type,rating, brand_name };
        console.log(newProduct);

        form.reset();
        setRating(0);

        fetch('https://tech-elec-shop-backend.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'Product Added Sucessfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool!',
                      })
                      navigate('/');
                }
            })
    }

    return (
        <div className="hero" style={{ height: '150vh', backgroundImage: 'url(https://i.ibb.co/B6bgwG4/bg.jpg)' }} >
            <div>
                <h1 className="text-5xl text-center font-bold mb-10 text-cyan-900">Add Product</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="hidden lg:flex text-center lg:text-left">
                        <img src="https://i.ibb.co/N6NRHKM/Upload.png" className="max-w-lg rounded-lg shadow-2xl ml-10 h-[70vh]" alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleAddProduct}>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="name" placeholder="Brand name" className="input input-bordered" name='brand_name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="text" name="photo" placeholder="PhotoUrl" className="input input-bordered" required />
                            </div>
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="name" placeholder="Product name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Type</span>
                                </label>
                                <select className="select select-bordered" name='type' required>
                                    <option value="" disabled selected>Select product type</option>
                                    <option value="Phone">Phone</option>
                                    <option value="Computer">Computer</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Headphone">Headphone</option>
                                    <option value="Webcam">Webcam</option>
                                    <option value="Speaker">Speaker</option>
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
                                <input type="text" name='price' placeholder="Product price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Write Short Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <Rating
                                    className='text-center mb-6'
                                    initialRating={rating}
                                    onChange={(newRating) => setRating(newRating)}
                                    emptySymbol={<span style={{ fontSize: '30px', color: 'teal' }}>☆</span>}
                                    fullSymbol={<span style={{ fontSize: '30px', color: 'teal' }}>★</span>}
                                />
                                <button className="btn text-cyan-900 font-semibold">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddProduct;