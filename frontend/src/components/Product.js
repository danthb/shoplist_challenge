import './Product.css'
import React from 'react'
import {accountAPI} from '../services/index'
import { Link } from 'react-router-dom'



const Product = ({ ...props }) => {

    const handleDelete = async (id) => {
        await accountAPI.deleteProduct(id)
         props.getProducts()
        
    }

    const refreshPage = ()=>{
        window.location.reload();
     }
     

    return (
    <div className="product">
          <img src={
            props.product.imageUrl
        } alt="" />
        <div className="product__info">
            <h3 className="info__name">
                  {
                        props.product.name
                  }
            </h3>
            <p className="info__description">
                  {
                        props.product.description
                }
            </p>
            <p className="info__price">
                 $ {
                        props.product.price
                }
              </p>
              <div className= "content__button">
              <Link to={`/product/${props.product._id}`} className="info__button">
                  View/Edit
              </Link>
                    <div >
                        <form onSubmit={(e) => {
                            handleDelete(props.product._id);
                            refreshPage();
                        }}>
                        <button className="info__button">
                            Delete
                            </button>
                            </form>
              </div>
              </div>
        </div>      
      </div>
  )
}

export default Product