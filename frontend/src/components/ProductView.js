import './ProductView.css'
import {useState, useEffect} from 'react'



const ProductView = () => {
    const [isEditable, setIsEditable] = useState(false)
    const handle = () => {
        setIsEditable(!isEditable)
    }
    return (
    <div className="productview">
        <div className="productview__left">
                <div className="left__image">
                    <img src="http://placeimg.com/640/480/food" alt="" />
                </div>
                <div className="left__info">
                    <div className="info__name">
                    </div>
                </div>
        </div>
        <div className="productview__right">
                <div className="right__info">
                <form>
                        <div className={isEditable?"form_input":"form_input_n"}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value="Product Name"
                                disabled={!isEditable}
                            />

                        </div>
                        <div className={isEditable?"form_input":"form_input_n"}>
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                id="description"
                                value="Here the description"
                                disabled={!isEditable}
                            />
                        </div>  
                        <div className={isEditable?"form_input":"form_input_n"}>
                            <label htmlFor="price">Price</label>
                            <input
                                type="text"
                                id="price"
                                value="$300"
                                disabled={!isEditable}
                            />
                        
                        </div>
                        <div className="form_input">
                            <button type="submit">
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