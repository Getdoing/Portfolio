import React from 'react'

export default function About() {
    return (
        <>
            <div className='container-fluid '>
                <div className='container box_shadow  '>
                    <div className='row color_gr2 pb-3'>
                        <div className='col-lg-6  col-md-6 col-sm-12'>
                            <img className="card-img  about-img  img_left " src="Image/banner-guy.png" alt="Card image" id="boy" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <span><h4 className='mee'>About Me</h4></span>
                            <p className='font_size '>
                                Hello World, I'm Nagesh Talbhandare,a FullStack Web Developer.I love combining the worlds of logic and creative design to make eye-catching,accessible and user-friendly websites and applications.
                                <br />
                                I'm excited to make the leap and continue reflecting my skills with right company.Also I am learn new Libraries and  Framework like Reactjs,Boostrap and programing languanges javascript and lot of more...

                            </p>
                            <div className='row mt-4 bg-white  img_box py-3 me-2'>
                                <div className='col-lg-2  col-md-2 col-sm-2'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" className='img-fluid imges' alt="" />
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className='img-fluid imges' alt="" />
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                    <img src="https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg " className='img-fluid imges img_3' style={{ height: "55px" }} alt="" />
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" className='img-fluid imges' alt="" />
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-1024.png" className='img-fluid' alt="" />
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                    <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg" className='img-fluid imges img_6' style={{ height: "50px", width: "150px" }} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
