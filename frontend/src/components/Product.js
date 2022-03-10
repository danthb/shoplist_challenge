import './Product.css'
import React from 'react'
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <div className="product">
        <img src="http://placeimg.com/640/480/food" alt="" />
        <div className="product__info">
            <h3 className="info__name">
                Product title
            </h3>
            <p className="info__description">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="info__price">
                $100
              </p>
              <div className= "content__button">
              <Link to={`/product/${1}`} className="info__button">
                  View/Edit
              </Link>
              <Link to={`/product/${1}`} className="info__button">
                  Delete
              </Link>
              </div>
              
        </div>      
      </div>
  )
}

export default Product