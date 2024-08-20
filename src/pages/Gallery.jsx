export const Gallery = () => {
  return (
    <>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/FotoSungaiKelaiBerauKaltim.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/FotoBukitTelangKalsel.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img1.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img2.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img3.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img5.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img6.jpg)` }}></div>

      <div class="px-5 py-6 lg:px-10 bg-black">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="/assets/gallery/img1.jpg"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="/assets/gallery/img2.jpg"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="/assets/gallery/img3.jpg"
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="/assets/gallery/img4.jpg"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="/assets/gallery/img5.jpg"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="/assets/gallery/img6.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img1.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img2.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img3.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img5.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/gallery/img6.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/FotoSungaiKelaiBerauKaltim.jpg)` }}></div>
      <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(/assets/FotoBukitTelangKalsel.jpg)` }}></div>

    </>
  )
}
