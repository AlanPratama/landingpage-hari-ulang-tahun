import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

function TemaBesar({ slides }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
    };

    return (
        <div className="bg-[url('./vector/gelombang-tema-besar.svg')] bg-cover bg-opacity-10">
        <div className={`slider-container py-56 max-sm:py-12 container mx-auto`}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-auto font-lato max-sm:px-8">
                            <div className="sm:w-1/2 flex-shrink-0">
                                <img src={slide.imageSrc} alt="background" className="w-auto h-auto border border-gray-300 rounded-lg shadow-lg mx-0" />
                            </div>
                            <div className="sm:w-1/3 text-left flex flex-col">
                                <motion.h1 className="text-red-600 text-3xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >{slide.title}</motion.h1>
                                <motion.h2 className={`text-black ${slide.subtitle.length > 35 ? "text-4xl sm:text-base lg:text-2xl xl:text-4xl" : "text-7xl sm:text-4xl lg:text-6xl xl:text-7xl"} pt-5 font-bold`}
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
        </div>
    );
}

export default TemaBesar