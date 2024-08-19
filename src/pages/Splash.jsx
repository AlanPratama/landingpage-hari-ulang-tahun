import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SplashVideo from "../assets/splashvideo.mp4";

export const Splash = () => {
    const [isVideoFinished, setIsVideoFinished] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVideoFinished(true);
            // history.push('/home'); // Redirect ke HomePage setelah 13 detik
        }, 5000); // 13 detik

        return () => clearTimeout(timer); // Bersihkan timeout jika komponen unmount
    });

    return (
        <div className="fixed z-[9999] w-full transition-fade">
            <div className="w-full h-screen relative flex flex-col justify-center items-center">
                <video
                    className="w-full h-screen object-cover"
                    autoPlay
                    muted >
                    <source src={SplashVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
