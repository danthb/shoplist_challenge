import './NewProduct.css';
import React from 'react'
import { accountAPI } from '../services/index'

const NewProduct = () => {
    const [product, setProduct] = React.useState({
        name: '',
        description: '',
        price: '',
        imageUrl: '',
        fav: false
    });

    const handle = async() => {
        const product = await accountAPI.createProduct({ 
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            price: document.getElementById('price').value,
            imageUrl: 'http://placeimg.com/640/480/food'
        })
        setProduct(product)
        window.alert('Product Created')
    }
    
    return(
        <div className="newproduct">
            <h1 className="newproduct_title">
                New Product
            </h1>
            <div className="newproduct_content">
                <div className="newproduct_form">
                    <form onSubmit={
                        ()=>handle()}
                    >
                        <div className="form_input">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="price">Price</label>
                            <input type="text" id="price" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" />
                        </div>  
                        <div className="form_input">
                            <label htmlFor="image">Image</label>
                            <div className="image_input">
                                <input type="text" id="image" />
                                <button type="submit" id="load">Load image</button>
                            </div>
                        </div>
                        <div className="form_input">
                            <button type="submit" >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>  
            </div>  
        </div>  
    )
}
export default NewProduct;