import React, { useState } from 'react';

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <section className="fixed bottom-0 w-full z-10 bg-prim bg-opacity-75">
            <div className="max-w-5xl px-4 py-4 mx-auto md:flex md:items-center md:gap-x-6">
                <div className="flex items-start md:items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 shrink-0 dark:text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <p className="text-gray-700 dark:text-gray-200">
                        We use cookies to enhance your user experience. By continuing to visit this site you agree to <a href="https://theblogspace.notion.site/Neuro-Notion-Cookies-Policy-c8fde8f3024a4a0389b888d0ec107e5b" className="underline transition-colors duration-200 hover:text-blue-500" target="_blank" rel="noopener noreferrer">our use of cookies</a>.
                    </p>
                </div>
                <button onClick={handleDismiss} className="items-center justify-center hidden text-gray-700 transition-colors duration-300 rounded-full md:flex dark:text-gray-200 dark:hover:bg-gray-700 w-7 h-7 focus:outline-none hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default Cookies;
