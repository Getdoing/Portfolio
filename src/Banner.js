import React from 'react'
import Wave from 'react-wavify';


export default function Banner() {



    return (
        <>
            <div className='container-fluid  color'>

                <div className='row  '>
                    <div className='col-lg-6 col-md-6 col-sm-12  bg-info text  main'>
                        <h3 className="card-title pt-5 ">Hi,I am Nagesh Talbhandare</h3>
                        <h3 className="card-text pt-2 ">A Full Stack Web Developer</h3>
                        <p className="card-text pt-1" id='get'>Get ready to turn ideas into reality</p>
                        <button type="button" id='btns1'>Hire Me</button>
                        <button type="button" id='btns2' >
                            <a href="./Image/Resume.pdf" target="_blank" download>Get Resume</a>
                        </button>



                    </div>


                    <div className='col-lg-6 col-md-6 col-sm-12 main   wow bg-info'>
                        <img className="card-img img-fluid img_banner " src="Image/banner-guy.png" alt="Card image" id="boy" />
                    </div>

                </div>



            </div>


        </>
    )
}
