import React from 'react'
import { Carousel } from 'react-bootstrap'
import carousel1 from '../images/1.jpg'
import carousel2 from '../images/2.jpg'
import carousel3 from '../images/3.jpg'
import carousel4 from '../images/4.jpg'

const CarouselBootstrap = () => {
  return (
    <div className='section carousel'>
      <h1 className='carousel__title'>pizza 365</h1>
      <p className="carousel__slogan">Truly Italian!</p>
      <Carousel className='carousel__bootstrap'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default CarouselBootstrap