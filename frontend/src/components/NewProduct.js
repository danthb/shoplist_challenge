import './NewProduct.css';
import React from 'react';

const NewProduct = () => {
    return(
        <div className="newproduct">
            <h1 className="newproduct_title">
                New Product
            </h1>
            <div className="newproduct_content">
                <div className="newproduct_form">
                    <form>
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
                            <button type="submit">
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