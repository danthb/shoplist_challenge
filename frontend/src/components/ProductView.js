import './ProductView.css'
import  {useState, useEffect} from 'react'
import {accountAPI} from '../services/index'
const ProductView = () => {
    const [product, setProduct] = useState({});
    const _id = window.location.pathname.split('/')[2];
    console.log(_id)
    const getProduct = async () => {
        const productDB = await accountAPI.getProduct(_id)
        setProduct(productDB.data)
        console.log('Test'+product)
    }

    const handle = async() => {
        const newProduct = {
            _id: _id,
            name: document.getElementById('name').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description').value,
            imageUrl: 'http://placeimg.com/640/480/food'
        }
        const productDB = await accountAPI.updateProduct(newProduct)
        setProduct(productDB.data)
    }

    useEffect(() => {
        getProduct();
    }, []);
    return (
    <div className="productview">
        <div className="productview__left">
                <div className="left__image">
                    <img src={product.imageUrl } alt="" />
                </div>
                <div className="left__info">
                    <div className="info__name">
                        {product.name}
                    </div>
                    <div className="info__description">
                        {product.description}
                    </div>
                    <div className="info__price">
                        $ {product.price}
                    </div>
                
                </div>
        </div>
        <div className="productview__right">
                <div className="right__info">
                <form onSubmit={handle}>
                        <div className={"form_input"}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Product Name"
                            />

                        </div>
                        <div className={"form_input"}>
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                id="description"
                                placeholder="Description"
                            />
                        </div>  
                        <div className={"form_input"}>
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                id="price"
                                placeholder="$"
                            />
                        
                        </div>
                        <div className="form_input_button">
                            <button type="submit" > 
                               Save
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    );
}

export default ProductView;