import './Sidedrawer.css';
import { Link } from 'react-router-dom';

const Sidedrawer = ({show, click}) => {
    const sidedrawerClasses = ['sidedrawer'];

    if (show) {
        sidedrawerClasses.push('show');
    }


    return (
        <div className={sidedrawerClasses.join(" ")}>
            <ul className='sidedrawer_links' onClick={click}>
                
                <li>
                    <Link to="/products" className="links" >
                    <span><i className="fas fa-shopping-cart"></i></span>
                    Products
                    </Link>
                        
                </li>
                <li>
                    <Link to ="/" className="links">Home</Link>
                </li>

           </ul>
        </div>
    )
};

export default Sidedrawer;