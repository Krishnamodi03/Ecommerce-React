import React, { useContext } from 'react'
import { CartCount } from './context/CartCount';

const ItemInFullScreen = ({ item, onClose }) => {
    let { state, setState } = useContext(CartCount);
    return (
        <div className='full-screen-item'>
            <div className='full-screen-item-content'>
                <button className='close-btn' onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h1>{item.title}</h1>
                <img src={item.image} alt="" height='300px' />
                <p className='text'>Description : {item.description}</p>
                <p className='text'>Price : {item.price}$</p>
                <p className='text'>Ratings : {item.rating.rate}<i className="fa-regular fa-star"></i>| {item.rating.count}<i className="fa-regular fa-user"></i></p>
                <div className="btns">
                    <button className='btn'>Buy Now</button>
                    <button className='btn' onClick={() => setState({ count: state.count + 1 })}>AddToCart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemInFullScreen