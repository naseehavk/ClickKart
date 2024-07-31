import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, emptyCart, addToCart, decreaseQuantity } from '../redux/slices/cartslice'
// .use navigate is ued to navigate to a page once a funstion is done
import { useNavigate } from 'react-router-dom'


function Cart() {

  // const {cartlist} = useSelector((state)=>state.cartslice)
  const cartlist = useSelector((state) => state.cartslice.cartlist)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCheckout = () => {
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>
      <div className='row p-5 mt-5'>
        <div className='col-md-9 col-sm-12' >
          {/* <h3>Cart Summary</h3> */}

          {
            cartlist?.length > 0 ?
              <table className="table table-bordered border border-dark shadow p-1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartlist?.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td><img src={item.thumbnail} alt="" height={'200px'} /></td>
                        <td>${Math.ceil(item.quantity * item.price)}</td>
                        <td>
                          <div className='d-flex'>
                          <button onClick={() => (dispatch(addToCart(item)))} className='btn'>+</button>
                          <input  type='text' name='' className='form-control w-25 text-center' width={''} value={item.quantity} readOnly id='' />
                          <button onClick={() => (dispatch(decreaseQuantity(item)))} className='btn' >-</button>
                          </div>
                        </td>
                        <td>
                          <button onClick={() => dispatch(removeFromCart(item.id))} className='btn '><i className="fa-solid fa-trash" style={{ color: "#ec0909", }} />
                          </button>
                        </td>
                      </tr>

                    ))}
                </tbody>
              </table>
              :
              <h3>No Cart Items Added !!! </h3>

          }

        </div>
        <div className='col-md-3 col-sm-12 mt-5' >
          <div className='border w-100 border-light p-4 bg-dark rounded'>
            <h3>Total Products : <span className='text-info'>{cartlist.length}</span></h3>
            <h3>Total Amount : <span className='text-info'>{Math.ceil(cartlist.reduce((prev, item) => prev + (item.quantity * item.price), 0))}</span></h3>
            <div className='d-grid'>
              <button onClick={() => (handleCheckout())} className='btn btn-success'>CheckOut</button>
            </div>
            <div>

            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Cart
