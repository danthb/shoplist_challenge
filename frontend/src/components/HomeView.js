import './HomeView.css';
import React, { Fragment } from 'react';
import  {accountAPI} from '../services/index'
import Product from './Product';

const HomeView = () => {
    const [products, setProducts] = React.useState([]);
    const getProducts = async () => {
        const products = await accountAPI.all();
        setProducts(products.data);
    }

    React.useEffect(() => {
        getProducts();

    }, []);

    return (
        
        <Fragment>
            <div className="homeview">
                <h2 className="homeview__title">Welcome to Zyrebox market</h2>
                <div className="homeview__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque euismod, urna eu tincidunt consectetur,
                        nisi nisl aliquam nunc, eget egestas nunc nisl eu
                        lectus.
                    </p>

                {
                        Object.keys(products).filter(key => {
                            return products[key].fav === true
                        }
                       
                        ).map(key => {
                            return <Product key={key} product={products[key]} />
                        })
                }

                </div>
            </div>
        </Fragment>

    );
}

export default HomeView;