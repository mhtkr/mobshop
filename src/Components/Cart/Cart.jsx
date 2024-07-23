import React from 'react';
import './Cart.css';

function Cart({ toggleCart }) {
  return (
    <div className='cart'>
      <button className='close-cart' onClick={toggleCart}>Close</button>
      <div className='address'>
        <h4>Deliver to:</h4>
        <p>New Delhi - 110032</p>
        <button>Change</button>
      </div>
      <div className='items'>
        <div className='item'>
          <div className='item-img'>
            <img src='' alt='Product' />
          </div>
          <div className='item-info'>
            <h3>Google Pixel 7a (Coral, 128 GB)</h3>
            <p>8 GB RAM</p>
            <p>Seller: Flipkart</p>
          </div>
          <div className='delivery-time'>
            <p>Delivery by 11 PM, Tomorrow</p>
          </div>
        </div>
      </div>
      <div className='place-order'>
        <div>
          <p>₹33,999</p>
        </div>
        <div>
          <button>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
