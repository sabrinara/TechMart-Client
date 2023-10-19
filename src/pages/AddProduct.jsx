import { useState } from 'react';
import Rating from 'react-rating';

const AddProduct = () => {
    const [rating, setRating] = useState(0);

    return (
        <div className="hero" style={{ height: '150vh', backgroundImage: 'url(https://i.ibb.co/B6bgwG4/bg.jpg)' }} >
            <div>
                <h1 className="text-5xl text-center font-bold mb-10 text-cyan-900">Add Product</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="hidden lg:flex text-center lg:text-left">
                        <img src="https://i.ibb.co/N6NRHKM/Upload.png" className="max-w-lg rounded-lg shadow-2xl ml-10 h-[70vh]" alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                <input type="name" placeholder="Product name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Type</span>
                                </label>
                                <input type="text" placeholder="Type of the Product" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product price</span>
                                </label>
                                <input type="text" placeholder="Product price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" placeholder="Write Short Description" className="input input-bordered" required />
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