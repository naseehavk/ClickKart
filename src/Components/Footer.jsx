import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

            <div className=' bg-dark row p-5 text-light'>
                <div className="col">
                    <h4>E-Cart 2024</h4>
                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maxime minus perferendis aliquid eius eos, cumque cum impedit molestiae, neque saepe adipisci iure praesentium quasi, dignissimos illo voluptas et. Atque.</p>
                </div>
                <div className="col text-white d-flex flex-column align-content-around">
                    <h4 className='text-center'>About Us </h4>
                    <div className='d-flex flex-column justify-content-between text-center'>
                        <Link className='text-decoration-none text-light' >About Us</Link>
                        <Link className='text-decoration-none text-light' to={'/'}>Home</Link>
                        <Link className='text-decoration-none text-light' to={'/wish'}>Wishlist</Link>
                        <Link className='text-decoration-none text-light' to={'/cart'}>Cart</Link>
                    </div>
                </div>
                <div className="col text-white">
                    <h4>Contact Us</h4>
                    <p>Phone : +91949237299</p>
                    <p>Address : Calicut,Kerala</p>
                    <textarea className='form-control' name="" id="" placeholder='enter your feeback here'></textarea>
                    <button className='btn btn-success mt-3'>submit</button>
                </div>
            </div>
        </>
    )
}

export default Footer
