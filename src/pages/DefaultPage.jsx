import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DefaultPage = () => {
    const navigate = useNavigate();

    const handleHutRiClick = () => {
        navigate('/ri');
    };

    const handleHutEnigmaClick = () => {
        navigate('/enigma');
    };

    return (
        <div id="menu-default" className="w-screen h-screen bg-white relative">
            <div className="border w-auto h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col w-1/2 relative">
                    <div id="hut-ri-btn" onClick={handleHutRiClick} className="text-6xl sm:text-3xl md:text-5xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-bold cursor-pointer hover:text-white relative z-[1000]">
                        <p>HUT RI</p>
                    </div>
                    <div id="hut-enigma-btn" onClick={handleHutEnigmaClick} className="text-6xl sm:text-3xl md:text-5xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-bold cursor-pointer hover:text-white relative z-[1000]">
                        <p>HUT ENIGMA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
