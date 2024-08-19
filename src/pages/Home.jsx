import img from "../../public/assets/pesonaIndonesia.gif";

export const Home = () => {
  return (
    <>
      <div
        className="-z-10 flex flex-col justify-center items-center h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
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

      <video src="../../public/assets/pesonaIndonesia.gif" autoPlay loop className="h-screen"></video>

    </>
  );
};
