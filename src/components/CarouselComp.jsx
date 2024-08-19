
"use client";

import { Carousel } from "flowbite-react";

const images = [
  "../../public/assets/enigma/DSC04007.jpg",
  "../../public/assets/enigma/DSC04009.jpg",
  "../../public/assets/enigma/DSC04010.jpg",
  "../../public/assets/enigma/DSC04023.jpg",
  "../../public/assets/enigma/DSC04026.jpg",
  "../../public/assets/enigma/DSC04029.jpg",
  "../../public/assets/enigma/DSC04033.jpg",
];

export function CarouselComp() {
  return (
    <div className="h-[500px] sm:h-64 xl:h-[500px] 2xl:h-[500px]">
      <Carousel pauseOnHover>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Carousel image ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
}
