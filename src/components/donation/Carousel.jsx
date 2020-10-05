import React, { Fragment } from "react";
import { Carousel } from 'react-responsive-carousel';
import fotoprueba from '../../img/foto.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style/Carousel2.css';

const Carousel2= () => {
    return (
        <Fragment>

        <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
        <div className='carro'>
            <img className='imgCarro' alt="" src={fotoprueba} />
            <p className="legend">Legend 1</p>
        </div>
        <div className='carro'>
            <img className='imgCarro' alt="" src={fotoprueba} />
            <p className="legend">Legend 2</p>
        </div>
        <div className='carro'>
            <img className='imgCarro' alt="" src={fotoprueba} />
            <p className="legend">Legend 3</p>
        </div>
        <div className='carro'>
            <img className='imgCarro' alt="" src={fotoprueba}/>
            <p className="legend">Legend 4</p>
        </div>
        
        </Carousel>
        
        </Fragment>
        )
        } 

export default Carousel2



