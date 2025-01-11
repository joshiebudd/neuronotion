import React, { useState, useEffect } from 'react';

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(true);
    const [showContent, setShowContent] = useState(false);

    const handleDismiss = () => {
        setIsVisible(false);
    };

    const handleToggle = () => {
        if (isMinimized) {
            setIsMinimized(false);
            // Wait for the box to expand before showing content
            setTimeout(() => setShowContent(true), 300);
        } else {
            setShowContent(false);
            // Wait for the content to fade out before minimizing
            setTimeout(() => setIsMinimized(true), 200);
        }
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isMinimized ? 'w-12 h-12' : 'w-64 h-36'}`}>
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-3 border border-gray-200 h-full relative">
                <button 
                    onClick={handleDismiss}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 z-10 transition-colors"
                    aria-label="Close cookie notice"
                >
                    ×
                </button>
                {isMinimized ? (
                    <button 
                        onClick={handleToggle}
                        className="w-full h-full flex items-center justify-center text-2xl"
                        aria-label="Show cookie notice"
                    >
                        🍪
                    </button>
                ) : (
                    <div className={`transition-opacity duration-200 h-full flex flex-col justify-between ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                        <div>
                            <div className="flex justify-between items-start">
                                <div className="text-base font-pop text-center w-full pr-6 font-bold">Cookie Notice</div>
                                <button 
                                    onClick={handleToggle}
                                    className="text-gray-400 hover:text-gray-600 absolute top-3 right-3"
                                    aria-label="Minimize cookie notice"
                                >
                                    −
                                </button>
                            </div>
                            <div className="text-center text-xs text-gray-600 mt-1">
                                We use cookies to enhance your user experience. By continuing to visit this site you agree to our use of cookies.
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <a
                                href="https://theblogspace.notion.site/Neuro-Notion-Cookies-Policy-c8fde8f3024a4a0389b888d0ec107e5b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-accent2 hover:bg-accent3 text-white px-3 py-1.5 rounded-lg flex items-center space-x-2 transition-colors text-xs"
                            >
                                <span>Learn More</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cookies;
