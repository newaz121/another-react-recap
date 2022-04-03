import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one item!!</p>
    }
    else if (cart.length === 1) {
        command = <p>PLease add more...</p>
    }
    else {
        command = <p> <small>Thanks for adding item</small> </p>
    }
    return (

        <div>
            <h2>items selected:{cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>Yay!You are buiying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>3 jon ke gift diba</p>

            </div>}

            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}
            {cart.length === 4 && <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;