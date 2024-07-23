import React from 'react'
import './Cat_Card.css'

function Cat_Card({title, caption, linkUrl, linkText, imageUrl}) {
  return (
    <div className='cat-card'>
        <div>
            <h2>{title}</h2>
            <p>{caption}</p>
            <a href={linkUrl}>{linkText}</a>
        </div>
        <div>
            <img src={imageUrl}/>
        </div>
    </div>
  )
}

export default Cat_Card