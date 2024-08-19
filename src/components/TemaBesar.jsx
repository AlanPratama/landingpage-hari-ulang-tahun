import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

function TemaBesar({ slides }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return (
        <div className="slider-container mx-0 w-screen overflow-x-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className='mx-0'> 
                        <div className="flex flex-row items-center justify-center w-auto mx-0 font-lato">
                            <div className="w-1/2 flex-shrink-0 mx-0">
                                <img src={slide.imageSrc} alt="background" className="w-auto border border-gray-300 rounded-lg shadow-lg mx-0" />
                            </div>
                            <div className="w-1/3 text-left pl-8 flex flex-col">
                                <motion.h1 className="text-red-600 text-4xl font-bold"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >{slide.title}</motion.h1>
                                <motion.h2 className="text-black text-2xl pt-5"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >{slide.subtitle}</motion.h2>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TemaBesar