import React from 'react';
import Slider from 'react-slick';

function TemaBesar({ slides }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div> 
                    <div key={index} className="flex flex-row items-center justify-center w-full p-4 font-lato">
                        <div className="w-1/2 flex-shrink-0">
                            <img src={slide.imageSrc} alt="background" className="w-full h-auto border border-gray-300 rounded-lg shadow-md" />
                        </div>
                        <div className="w-1/3 text-left pl-8 flex flex-col">
                            <h1 className="text-red-600 text-4xl font-bold">{slide.title}</h1>
                            <h2 className="text-black text-2xl pt-5">{slide.subtitle}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
//   return (
//     <div className="flex flex-row items-center justify-center w-100 p-4 font-lato">
//         <div className="w-1/2">
//             <img src={imageSrc} alt="background"  className="w-full h-auto"/>
//         </div>

//         <div className="w-[400px] text-left pl-8">
//             <h1 className="text-red-600 text-4xl font-bold">{title}</h1>
//             <h2 className="text-black text-2xl pt-5">{subtitle}</h2>
//         </div>
//     </div>
//   )
}

export default TemaBesar