import React, { Fragment, useState} from "react";
import { Carousel } from 'react-responsive-carousel';
import colab from './data.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/Carousel2.css'

const Carousel2= () => {
    const [Colab] = useState(colab);
    return (
        <Fragment>
          

        
        {/* <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
            {
                Colab.map((item) =>
                <div className='carro' key={item.id}>
                  <img className='imgCarro' src={item.img} alt='ayuda'/>
                </div>
              )}
        
        </Carousel> */}
        </Fragment>
        )
        } 

export default Carousel2



