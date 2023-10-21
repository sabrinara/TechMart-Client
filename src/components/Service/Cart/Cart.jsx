

const Cart = ({cart}) => {
    const {image, name, price, type  } = cart;
    return (
        <div className="card card-side bg-base-100 shadow-xl px-3" style={{background: card_bg}}>
        <figure><img src={image} /></figure>
        <div className="card-body">
           <h2>{type}</h2>
            <h2 className="card-name">{name}</h2>

            <p className="" >
                ${price}.00
            </p>


            <div className="card-actions ">
               
                    <button
                        className="btn mt-4" 
                    >
                        Delete
                    </button>
               
            </div>
        </div>

    </div>
    );
};

export default Cart;