import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { fetchProduct, nextPage, prevPage } from '../redux/slices/productSlice';
import { addToWishlist } from '../redux/slices/wishSlice';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartslice';



function Home() {
  const dispatch = useDispatch()
  const { loading, product, error, currentPage, productsPerPage } = useSelector((state) => state.productSlice)
  //state destructured to loading and product
  // console.log(loading, product);

  const totalpages = Math.ceil(product.length / productsPerPage)
  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const validCard = product.slice(firstProductIndex, lastProductIndex)

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  const navigateNextPage = () => {
    if (currentPage < totalpages) {
      dispatch(nextPage())
    }
  }

  const navigatePrevPage = () => {
    if (currentPage > 1) {
      dispatch(prevPage())
    }
  }


  return (
    <>
      <Carousel className='mb-5'>
        <Carousel.Item>
          <img className='d-block w-100' src="https://static.vecteezy.com/system/resources/previews/006/388/787/non_2x/online-shopping-illustration-there-is-a-white-mobile-a-red-shopping-cart-and-a-shopping-bag-design-for-website-sale-banner-landing-page-mobile-app-shop-online-online-store-business-vector.jpg" alt="" height={'400px'} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" height={'400px'} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src="https://www.shutterstock.com/shutterstock/photos/1413467285/display_1500/stock-vector-vector-illustration-super-sale-banner-template-design-big-sales-special-offer-1413467285.jpg" alt="" height={'400px'} />
        </Carousel.Item>
      </Carousel>

      <section className="py-5">
        <h3 className='text-light px-3'>Suggested for You</h3>
        {
          loading ?
            <h1 className='text-center'><i className="fa-solid fa-spinner fa-spin fa-spin-reverse fa-xl" /></h1>
            :
            <div className="container-fluid px-4 px-lg-5 mt-3">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                {
                  product.length > 0 ?

                    validCard.map(item => (
                      <div className="col mb-5">
                        <div className="card h-100">
                          <Link to={`/view/${item.id}`}>
                            <img className="card-img-top" src={item.thumbnail} alt="..." height={'200px'} />
                          </Link>
                          <div className="card-body p-4">
                            <div className="text-center">
                              <h5 className="fw-bolder">{item.title.slice(0, 10)}...</h5>
                              ${item.price}
                            </div>
                          </div>
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className='d-flex justify-content-between'>
                              <button onClick={() => dispatch(addToWishlist(item))} className='btn btn-success'>
                                <i className="fa-solid fa-heart-circle-plus" style={{ color: "#b70606", }} />
                              </button>
                              <button onClick={() => dispatch(addToCart(item))} className='btn btn-success'>
                                <i className="fa-solid fa-cart-plus" style={{ color: " #2c8c4c" }}></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                    ))
                    :
                    <h3>{error}</h3>
                }
              </div>
            </div>
        }

        <div className='text-center'>
          <button className='btn' onClick={navigatePrevPage}>
            <i className="fa-solid fa-angles-left" />
          </button>
          {currentPage} of {totalpages}
          <button className='btn' onClick={navigateNextPage}>
            <i className="fa-solid fa-angles-right" />

          </button>
        </div>
      </section>
    </>
  )
}

export default Home
