import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
    return (
        <>
            <div>
                <div className='container-fluid color_gr_footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4  col-md-4 innertext  '>
                                <h5 className='px-4 pt-2'>Nagesh Talbhandare</h5>
                                <h6 className='ms-3'>© 2022 Nagesh Talbhandare <br />
                                    All rights reserved</h6>

                                <span className='icons'>
                                    <a href="https://www.google.com/" target="_blank">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </span>

                                <span className='icons'>
                                    <a href="https://www.google.com/" >
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
                                </span>

                                <span className='icons'>
                                    <a href="https://www.google.com/" target="_blank">
                                        <i class="fa-brands fa-telegram"></i>
                                    </a>
                                </span>
                            </div>

                            <div className='col-lg-4 col-md-4 innertext  px-4 py-2'>
                                <h5>Get in Touch</h5>



                                <h6>nagesh7460@gmail.com</h6>
                                <h6>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quo facere consequuntur illo dolor voluptates animi atque laborum nesciunt voluptatibus magnam, pariatur minus saepe commodi ratione!
                                </h6>
                                <br />

                                <h6>
                                    +91 9922334455
                                </h6>

                            </div>

                            <div className='col-lg-4 col-md-4 innertext  px-4 py-2'>
                                <h5>About</h5>
                                <h6>Resume</h6>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
