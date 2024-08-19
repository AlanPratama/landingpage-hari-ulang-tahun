import img from "../../public/assets/pesonaIndonesia.gif";
import TemaBesar from "../components/TemaBesar";
import FilosofiCarousel from "../components/FilosofiCarousel";
import gambar1 from '../assets/tema_besar_1.jpg';
import gambar2 from '../assets/tema_besar_2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Home = () => {
  const slides = [
    {
      imageSrc: gambar1,
      title: "Tema Besar",
      subtitle: '"Nusantara Baru Indonesia Maju "',
    },
    {
      imageSrc: gambar2,
      title: "Tema Besar",
      subtitle: 'HUT ke-79 RI merupakan sebuah batu loncatan besar bagi Indonesia, karena mengalami 3 transisi penting, yaitu menyongsong Ibu Kota baru, pergantian pemimpin, serta Indonesia Emas 2045.',
    },
  ];
  return (
    <>
      <section className="overflow-hidden relative">

        <div
          id="hero-section"
          className="-z-10 flex flex-col overflow-hidden before:w-[600px] before:h-[300px] after:w-[600px] after:h-[300px] justify-center items-center h-screen bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="z-30 text-center flex flex-col justify-center items-center gap-3">
            <h1 className="text-5xl md:text-8xl font-semibold text-white text-center uppercase">
              unity <br />
              in diversity
            </h1>
            <h2 className="text-sm tracking-[10px] md:text-lg uppercase text-white">
              Indonesian Idependence Day
            </h2>
          </div>
          <div className="bg-black h-screen w-full opacity-60 absolute top-0 z-20"></div>
        </div>

        {/* <video src="../../public/assets/pesonaIndonesia.gif" autoPlay loop className="h-screen"></video> */}
      </section>
      <section>
        <div className="py-[200px]">
          <TemaBesar slides={slides} />
        </div>
      </section>
      <section>
        <FilosofiCarousel />
      </section>
    </>
  );
};
