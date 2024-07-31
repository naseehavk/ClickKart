import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productsearch } from '../redux/slices/productSlice';

function Header() {

  const [wishCount, setWishCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const dispatch = useDispatch()

  const wishlist = useSelector((state) => state.wishSlice)
  const { cartlist } = useSelector((state) => state.cartslice)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('wishlist'))) {
      setWishCount(JSON.parse(localStorage.getItem('wishlist')).length)
    }
    setCartCount(cartlist.length)
  }, [wishlist, cartlist])
  console.log(wishCount);
  console.log(cartlist);
  console.log(cartCount);

  return (
    <>
      <Navbar expand="lg" className="bg-primary fixed-top ">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} className='text-decoration-none text-light'>
              <i className=" me-1 fa-solid fa-circle-play fa-beat" style={{ color: "#c2419", }} />{' '}
              ClickCart
            </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <input className='rounded me-2 border-light p-2' onChange={(e) => { dispatch(productsearch(e.target.value.toLowerCase())) }} type="text" placeholder=' enter  search keyword' />
              <Nav.Link className='border border-light rounded'>
                <Link className='text-decoration-none text-light ' to={'/wish'}>
                  <i className="fa-solid fa-heart" style={{ color: "#f50a22", }} />{' '}
                  Wishlist
                  <span className='badge bg-light ms-1 '>{wishCount}</span>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link" className='border border-light rounded ms-2'>
                <Link className='text-decoration-none text-light' to={'/Cart'}>
                  <i className="fa-solid fa-cart-shopping" style={{ color: "#2c8c4c", }} />Cart
                  <span className='badge bg-light ms-1'>{cartCount}</span>

                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  )
}

export default Header
