import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartslice'

function Wish() {

    const [wishlistData, setwishlistData] = useState([])

    const dispatch = useDispatch()
    const { wishlist } = useSelector((state) => state.wishSlice)

    useEffect(() => {
        setwishlistData(JSON.parse(localStorage.getItem('wishlist')))
    }, [wishlist])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        alert("Item moved to cart")
        dispatch(removeFromWishlist(product.id))

    }

    return (
        <>

            <div>
                {
                    wishlistData.length > 0 ?
                        <div className='row mt-5 gx-4 gx-lg-5 row-cols-md-3 row-cols-xl-4 justify-content-center p-5'>
                            {
                                wishlistData.map(item => (
                                    <div className='col mb-5'>
                                        <div className='card h-100'>

                                            <Link to={`/view/${item.id}`}>
                                                <img className='card-img-top' src={item.thumbnail} alt="" />
                                            </Link>
                                            <div className='card-body p-4'>
                                                <div className='text-center'>
                                                    <h5>{item.title} </h5>
                                                    ${item.price}
                                                    <div className='d-flex justify-content-between'>
                                                        <button onClick={() => dispatch(removeFromWishlist(item.id))} className='btn btn-success'>
                                                            <i className="fa-solid fa-heart-circle-xmark" style={{ color: "#b70606" }} />
                                                        </button>
                                                        <button onClick={() => handleAddToCart(item)} className='btn btn-success'>
                                                            <i className="fa-solid fa-cart-plus" style={{ color: " #2c8c4c" }}></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }

                        </div>
                        :
                        <h3 className='mt-4 mb-5'>No Wishlist items</h3>

                }

            </div>

        </>
    )
}

export default Wish
