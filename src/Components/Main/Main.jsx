import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import Cat_Card from '../Category_Card/Cat_Card'
import Phone_Card from '../Phone_Card/Phone_Card'
import Cart from '../Cart/Cart'
function Main() {

  const [showCart, setShowCart] = useState(false);

  const toggleCart = ()=> {
    setShowCart(prevShowCart => !prevShowCart)
  };

  return (
  <div className='main'>
    <div className='main-top'>
        <div className='site-title'>
            <h1>PhonShop</h1>
        </div>
        <div className='site-links'>
            <a href='#news'>New</a>
            <a href='#offers'>Offers</a>
            <a href='#refurbished'>Refurbished</a>
            <div className='cart-icon' onClick={toggleCart}>
              <img src={assets.shopping_cart}/>
            </div>
        </div>
    </div>

    <div className='mid'>
      <div className='mid-head'>
        <div className='tag-line'>
          <h2>Upgrade Your Phone</h2>
          <h2>Upgrade Your Life</h2>
          <p>Find Your Perfect Phone Here.</p>
          <div className='head-illust'>
            <img src={assets.head_ilust}/>
          </div>
          <div className='pros'>
            <div className='pro'>
              <img src={assets.check}/>
              <p>Maximum Value</p>
            </div>
            <div className='pro'>
              <img src={assets.check}/>
              <p>Safe & Hassle-free</p>
            </div>
            <div className='pro'>
              <img src={assets.check}/>
              <p>Free Delivery</p>
            </div>
          </div>
        </div>
      </div>
      <div className='search-bar'>
        <input type="text" placeholder='Search your desirable phone here...'/>
        <button><img src={assets.search_icon}/></button>
      </div>
      <div className='brand-cards'>
        <Cat_Card
          title="Google"
          caption="Get your Pixel now!"
          linkUrl="#google"
          linkText="Know more"
          imageUrl={assets.google}
        />
        <Cat_Card
          title="Apple"
          caption="Get your iPhone now!"
          linkUrl="#apple"
          linkText="Know more"
          imageUrl={assets.apple}
        />
        <Cat_Card
          title="Samsung"
          caption="Get your Galaxy now!"
          linkUrl="#samsung"
          linkText="Know more"
          imageUrl={assets.samsung}
        />
        <Cat_Card
          title="Xiaomi"
          caption="Get your Redmi now!"
          linkUrl="#xiaomi"
          linkText="Know more"
          imageUrl={assets.xiaomi}
        />
        <Cat_Card
          title="Motorola"
          caption="Get your Moto now!"
          linkUrl="#motorola"
          linkText="Know more"
          imageUrl={assets.motorola}
        />
      </div>

      <div className='available-phones'>
      <h2>Flash Sale</h2>
        <div className='category'>
          <Phone_Card
            imageUrl={assets.pixel_7a}
            p_name = "Pixel 7a - 128 GB"
            ratings = "★★★★☆"
            discount = "13% Off"
            price = "₹37,999"
          />
          <Phone_Card
            imageUrl={assets.iphone_14}
            p_name = "iPhone 14 - 128 GB"
            ratings = "★★★☆☆"
            discount = "11% Off"
            price = "₹70,999"
          />
          <Phone_Card
            imageUrl={assets.iphone_14}
            p_name = "iPhone 14 - 128 GB"
            ratings = "★★★☆☆"
            discount = "11% Off"
            price = "₹70,999"
          />
          <Phone_Card
            imageUrl={assets.pixel_7a}
            p_name = "Pixel 7a - 128 GB"
            ratings = "★★★★☆"
            discount = "13% Off"
            price = "₹37,999"
          />
          <Phone_Card
            imageUrl={assets.iphone_14}
            p_name = "iPhone 14 - 128 GB"
            ratings = "★★★☆☆"
            discount = "11% Off"
            price = "₹70,999"
          />
          <Phone_Card
            imageUrl={assets.pixel_7a}
            p_name = "Pixel 7a - 128 GB"
            ratings = "★★★★☆"
            discount = "13% Off"
            price = "₹37,999"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main