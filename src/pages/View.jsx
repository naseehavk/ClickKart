import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartslice';

function View() {

  const [pro, setPro] = useState({})
  const { id } = useParams()
  console.log(id);
  // const {loading,product,error}=useAccordionButton((state)=>state.productSlice)
  const product = JSON.parse(localStorage.getItem('products'))
  console.log(JSON.parse(localStorage.getItem('products')));

  const dispatch = useDispatch()

  useEffect(() => {
    setPro(product.find(item => item.id == id))
  }, [])

  console.log(pro);


  return (
    <>

      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          {
            pro ?
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={pro.thumbnail} alt="..." /></div>
                <div className="col-md-6">
                  {/* <div className="small mb-1">ID :{pro.id}</div> */}
                  <h1 className="display-5 fw-bolder">{pro.title}</h1>
                  <div className="fs-5 mb-5">
                    <span className="text-decoration-line-through">$45.00</span>
                    <span>${pro.price}</span>
                  </div>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                  <div className="d-flex">
                    <input className="form-control border-primary bg-dark text-light text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: '3rem' }} />
                    <button onClick={() => dispatch(addToCart(pro))} className="btn btn-outline-primary flex-shrink-0" type="button">
                      <i className="bi-cart-fill me-1"></i>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              :
              <h4>Not available!!</h4>

          }
        </div>
      </section>

    </>
  )
}

export default View
