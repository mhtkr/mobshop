import React from 'react'
import './Phone_Card.css'

function Phone_Card({imageUrl, p_name, ratings, discount, price}) {
  return (
    <div className='phone-card'>
        <div className='phone-image'>
            <img src={imageUrl}/>
            <h3>{p_name}</h3>
        </div>
        <div className='details'>
            <p>{ratings}</p>
            <p>{discount}</p>
            <h4>{price}</h4>
        </div>
    </div>
  )
}

export default Phone_Card