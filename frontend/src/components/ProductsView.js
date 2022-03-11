import './ProductsView.css'
import React from 'react'
import  {accountAPI} from '../services/index'
import Product from './Product';
const ProductsView = () => {
    const [products, setProducts] = React.useState([]);
    const getProducts = async () => {
        const products = await accountAPI.all();
        setProducts(products.data);
    }

    React.useEffect(() => {
        getProducts();

    }, []);

    return (
        <div className="productsview">
            <h1 className="productsview_title">
            Products
            </h1>
            <div className="productsview_content">
                {
                    console.log(typeof products)
                }
                {
                    Object.keys(products).map(key => {
                        console.log(products[key])
                        return <Product key={key} product={products[key]} />
                    })
                }
            </div>
        </div>

    );
}

export default ProductsView;