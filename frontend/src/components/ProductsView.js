import './ProductsView.css'
import Product from './Product';
const ProductsView = () => {
    return (
        <div className="productsview">
            <h1 className="productsview_title">
            Products
            </h1>
            <div className="productsview_content">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
            </div>
        </div>

    );
}

export default ProductsView;