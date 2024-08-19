import { useState } from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const themeColor = [
    {
        background: "#FFFFFF",
        illustration: "#ED1C24",
        secondIllustration: "#ED1C24",
        text: "#000000"
    },
    {
        background: "#ED1C24",
        illustration: "#FFFFFF",
        secondIllustration: "#ED1C24",
        text: "#FFFFFF"
    },
    {
        background: "#000000",
        illustration: "#FFFFFF",
        secondIllustration: "#ED1C24",
        text: "#FFFFFF"
    },
]

const FilosofiCarousel = () => {
    const [theme, setTheme] = useState(1);
    return (
        <div style={{ backgroundColor: themeColor[theme].background }}>
            <div className="container py-16 mx-auto">
                <Carousel showThumbs={false} showStatus={false} useKeyboardArrows swipeable={true}
                    renderArrowPrev={(onClickHandler, hasPrev, label) => (
                        hasPrev && <button type="button" onClick={onClickHandler} title={label} className="p-4 text-5xl absolute left-0 translate-y-1/2 bottom-1/2 z-10 opacity-50" style={{ color: themeColor[theme].text }}>&lt;</button>
                    )}
                    renderArrowNext={(onClickHandler, hasNext, label) => (
                        hasNext && <button type="button" onClick={onClickHandler} title={label} className="p-4 text-5xl absolute right-0 translate-y-1/2 bottom-1/2 z-10 opacity-50" style={{ color: themeColor[theme].text }}>&gt;</button>
                    )}>
                    <div key="content-0" className={`flex justify-center items-center p-16 min-h-full flex-col gap-16`} style={{ color: themeColor[theme].text }}>
                        <h2 className="text-5xl md:text-7xl">Filosofi Logo</h2>
                        <img src={theme == 0 ? "./vector/logo-ri-79-theme-1.svg" : "./vector/logo-ri-79-theme-23.svg"} alt="HUT RI 79" className="!w-1/2 max-sm:!w-5/6" />
                    </div>
                    <div key="content-0" className={`flex justify-center items-center p-16 min-h-full`} style={{ color: themeColor[theme].text }}>
                        <h2 className="text-5xl md:text-7xl">Semangat Baru yang Kuat untuk Menyukseskan 3 Transisi Besar</h2>
                    </div>
                    <div key="content-0" className={`flex justify-center items-center p-16 min-h-full`} style={{ color: themeColor[theme].text }}>
                        <h2 className="text-5xl md:text-7xl">Persatuan Nusantara yang Berprinsip pada Nilai Luhur</h2>
                    </div>
                    <div key="content-0" className={`flex justify-center items-center p-16 min-h-full flex-col gap-16`} style={{ color: themeColor[theme].text }}>
                        <h2 className="text-5xl md:text-7xl">3 Transisi Besar</h2>
                        <h2 className="text-5xl md:text-7xl">⇒</h2>
                    </div>
                    <div key="content-0" className={`flex justify-center items-center p-16 min-h-full`} style={{ color: themeColor[theme].text }}>
                        <h2 className="text-5xl md:text-7xl"><strong>Persatuan</strong> merupakan hal dasar yang harus dicapai Indonesia sebagai negara kepulauan.</h2>
                    </div>
                    <div key="content-0" className={`flex justify-center items-center p-16 min-h-full`} style={{ color: themeColor[theme].text }}>
                        <h2 className="text-5xl md:text-7xl"><strong>Kesetaraan</strong> menjadi salah satu tujuan negara dengan cara pembangunan Indonesia.</h2>
                    </div>
                    <div key="content-0" className={`flex justify-center items-center p-16 min-h-full`} style={{ color: themeColor[theme].text }}>
                        <h2 className="text-5xl md:text-7xl"><strong>Nilai Luhur</strong> Indonesia, Pancasila.</h2>
                    </div>
                </Carousel>
            </div>
            <div className="flex gap-4 justify-center pb-16">
                <button className={`w-8 h-8 shadow rounded-full border-gray-300 border-2`} style={{ backgroundColor: themeColor[0].background }} onClick={() => setTheme(0)}></button>
                <button className={`w-8 h-8 shadow rounded-full border-gray-300 border-2`} style={{ backgroundColor: themeColor[1].background }} onClick={() => setTheme(1)}></button>
                <button className={`w-8 h-8 shadow rounded-full border-gray-300 border-2`} style={{ backgroundColor: themeColor[2].background }} onClick={() => setTheme(2)}></button>
            </div>
        </div>
    )
}

export default FilosofiCarousel