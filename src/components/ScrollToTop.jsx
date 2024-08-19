import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false); 
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={styles.button}
                >
                    <FontAwesomeIcon
                        icon={faArrowUp}
                        style={styles.icon}
                    />
                </button>
            )}
        </>
    );
};

const styles = {
    button: {
        position: "fixed",
        bottom: "90px",
        right: "30px",
        backgroundColor: "grey",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "24px",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: "1000",
    },
    icon: {
        fontSize: "24px",
        color: "#fff",
    },
};

export default ScrollToTop;
