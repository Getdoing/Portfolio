import React from 'react';

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {




    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-8 border color_gr_contact contact_last py-2'>
                            <h3>Contact Us</h3>
                            <p className='contact_para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quae quasi neque, necessitatibus incidunt dignissimos, repellendus unde magni eius est illum quos quis amet facilis veritatis commodi excepturi exercitationem molestiae.
                            </p> <br />

                            <form action="https://formsubmit.co/nagesh7460@gmail.com" method='POST' >

                                <label htmlFor="name" >Name:</label>
                                <label htmlFor="email" className='email_label' >Email:</label>  <br />

                                <input type="text" name='name' placeholder="Enter Name" required />

                                <input type="email" name='email' className='email_box' placeholder='Enter Email' required /> <br />


                                <label htmlFor="message" className='mt-3  '>Message:</label> <br />

                                <textarea name="Message" id="textArea" cols="50" rows="5" placeholder="your message here"></textarea>
                                {/* <input type="message" className='w-75   mb-3 input_height' name='message' required /> <br /> */}

                                <input type='submit' value="Send" className='btn btn-primary' />

                            </form>
                            {/* <ToastContainer /> */}


                        </div>

                        <div className='col-lg-4 col-md-4 border  contact_right ps-5 py-3'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12'>
                                    <h5>Email:</h5>
                                    <h6>nagesh7460@gmail.com</h6>
                                </div>


                                <div className='col-lg-12 col-md-12'>
                                    <h5>Telephone:</h5>
                                    <h6>+32 6356478</h6>
                                </div>


                                <div className='col-lg-12 col-md-12'>
                                    <h5>Email:</h5>
                                    <h6>nagesh7460@gmail.com</h6>

                                </div>


                                <div className='col-lg-12 col-md-12'>
                                    <h5>Address:</h5>
                                    <h6>At Post Barshi <br />
                                        Dist.Solapur, Maharshtra

                                    </h6>
                                </div>

                                <div className='col-lg-12 col-md-12 contact_icon '>
                                    <span className='icons'>
                                        <a href="https://www.google.com/" target="_blank">
                                            <i class="fa-brands fa-instagram" ></i>
                                        </a>
                                    </span>


                                    <span className='icons'>
                                        <a href="https://www.google.com/" >
                                            <i class="fa-brands fa-facebook"></i>
                                        </a>
                                    </span>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

