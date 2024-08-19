import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import lagu from "../assets/lagu.mp3";

export const MusicButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(lagu)); // Keep a single instance of Audio

    useEffect(() => {
        const audio = audioRef.current;

        // Event listener to restart music when it ends
        const handleEnded = () => {
            audio.currentTime = 0; // Reset to the beginning
            audio.play(); // Play again
        };

        audio.addEventListener('ended', handleEnded);

        // Play music by default when component mounts
        audio.play();

        return () => {
            audio.pause();
            audio.removeEventListener('ended', handleEnded); // Cleanup event listener
        };
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button onClick={togglePlayPause} style={styles.button}>
            <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                style={styles.icon}
            />
        </button>
    );
};

const styles = {
    button: {
        position: "fixed",
        bottom: "30px",
        right: "30px", // This will appear next to the ScrollToTop button
        backgroundColor: "grey",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: "1000",
    },
    icon: {
        fontSize: "24px",
        color: "#fff",
    },
};

export default MusicButton;
