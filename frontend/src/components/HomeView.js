import './HomeView.css';
import { Fragment } from 'react';
import Product from './Product';

const HomeView = () => {
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
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />

                </div>
            </div>
        </Fragment>

    );
}

export default HomeView;