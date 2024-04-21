import { BsHeart } from "react-icons/bs"
import './index.css'

const ProductItem = (props) => {
    const {productsData } = props
    const {imageUrl,title} = productsData

    return(
        <div className='product-container'>
            <div className='product-image-container'>
                <img className='product-image' src={imageUrl} alt={title}/>
            </div>
            <h2 className='product-title'>{title}</h2>
            <div className="info-container">
                <p className='user-account-info'> <a href="login">Sign in</a> or Create an account to see pricing</p>
                <BsHeart/>
            </div>
        </div>
    )
}

export default ProductItem