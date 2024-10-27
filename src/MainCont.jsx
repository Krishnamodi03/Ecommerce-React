import React, { useContext, useEffect, useState } from 'react'
import ItemInFullScreen from './ItemInFullScreen';
import { CartCount } from './context/CartCount';

const MainCont = () => {
    // useContext for CartCount Increase
    let { state, setState } = useContext(CartCount);
    let {items} = state;
    // useState for data coming through API
    let [data, setData] = useState(null);

    // useState for displaying item in big screen
    let [selectedItem, setSelectedItem] = useState(null);

    // useState for CartData
    const [cartProducts, setCartProducts] = useState([]);

    // function for fetching data from an API
    let fetchingData = async function () {
        let result = await fetch(`https://fakestoreapi.com/products`);
        let pdata = await result.json();
        setData(pdata);
    }
    // function for setting item to display in full screen
    let handleItemClick = (item) => {
        setSelectedItem(item);
    }
    // Function for adding item to the cart and increasing count
    let handleCartClick = (item) => {
        setCartProducts([...cartProducts, item]);
        setState({  count: state.count + 1, items: [...state.items,item] });
    }

    // Call fetchingData function inside useEffect
    useEffect(() => {
        fetchingData();
    }, []);


    // Actual code start here
    if (data) {
        return (
            <div className='body'>
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className='box'>
                                <h3>{item.title}</h3>
                                <img src={item.image} alt="" className='h-36' />
                                <p className='text'>Price : {item.price}$</p>
                                <p className='text'>Ratings : {item.rating.rate}<i className="fa-regular fa-star"></i> | {item.rating.count}<i className="fa-regular fa-user"></i></p>
                                <div className="btns">
                                    <button className='btn' onClick={() => { handleItemClick(item) }}>Buy Now</button>
                                    <button className='btn' onClick={() => { handleCartClick(item) }}>AddToCart</button>
                                </div>
                            </div>
                        );
                    })
                }
                {/* Conditional Rendering */}
                {/* If there is item in the selected item variable then only call the ItemInFullScreen Component*/}
                {
                    selectedItem && (
                        <ItemInFullScreen item={selectedItem} onClose={() => setSelectedItem(null)} />
                    )
                }
            </div>
        );
    }
    else {
        return (
            <div className='body body-waiting'>
                <h1>Data is Loading......</h1>
                <div className="spinner"></div>
            </div>
        )
    }
}

export default MainCont
