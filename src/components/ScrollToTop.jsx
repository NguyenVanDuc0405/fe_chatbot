
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 z-50 flex justify-center items-center rounded-md w-10 h-12 bg-red-500 text-white shadow-lg hover:bg-red-700 transition ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
    );
};

export default ScrollToTop;
