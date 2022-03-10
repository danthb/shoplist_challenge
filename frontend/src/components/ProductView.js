import './ProductView.css'
import {useState} from 'react'



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
                            <button type="submit" onClick={handle}>
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