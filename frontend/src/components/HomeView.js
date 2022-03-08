import './HomeView.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const HomeView = () => {
    return (
        <Fragment>
            <div className="home-view">
                <div className="home-view_container">
                    <h1>Home</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.

                        Quisquam, quia.
                    </p>
                    <Link to="/products">
                        <button>Products</button>
                    </Link>

                </div>
            </div>
        </Fragment>

    );
}

export default HomeView;