import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './Data'
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Project() {

    const [spin, setSpin] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setSpin(false);
        }, 1500)
    }, [])

    return (
        <>
            <h1 className='text-center my-1 '>Project</h1>

            {
                spin ?
                    <div className='d-flex justify-content-center align-items-center h-50'>
                        <Spinner animation="border" variant="danger" /> &nbsp; &nbsp; Loading...
                    </div> :
                    <div className='container-fluid'>

                        <div className='container'>
                            <div className='row d-flex justify-content-around '>
                                {
                                    data.map((current, index) => {
                                        return (
                                            <Card style={{ width: '17rem' }} className="just my-3 ">
                                                <Card.Img variant="top" src={current.img} className="mt-2" />
                                                <Card.Body>

                                                    <Card.Title className='ms-4 my-3'>
                                                        <h5>{current.projectName}</h5>
                                                    </Card.Title>
                                                    <Button variant="primary" className='mx-5'>
                                                        <a href={current.demo} target="_blank">Live Demo</a>
                                                    </Button>


                                                </Card.Body>
                                            </Card>

                                        )
                                    })
                                }



                            </div>



                        </div>

                    </div>



            }




        </>
    )
}
