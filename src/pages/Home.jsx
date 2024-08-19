import img from "../../public/assets/pesonaIndonesia.gif";
import HeroVideo from "../../public/assets/hero-video.mp4";
import TemaBesar from "../components/TemaBesar"

export const Home = () => {
  return (
    <>
      <div
        className=" flex flex-col justify-center items-center h-screen bg-fixed bg-cover bg-center">
        <div className="slide-bg fixed object-cover object-center w-full h-screen -z-10" data-parallax>
          <video
            className="w-full h-screen object-cover object-center h-screen"
            autoPlay
            muted >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="z-30 text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text-5xl md:text-8xl font-semibold text-white text-center uppercase">
            unity <br />
            in diversity
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Indonesian Idependence Day
          </h2>
        </div>
        <div className="bg-black h-screen w-full opacity-60 absolute top-0 z-20"></div>
      </div>

      <video src={HeroVideo} autoPlay loop className="h-screen"></video>

    </>
  );
};
