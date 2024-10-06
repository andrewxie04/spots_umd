import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <svg
                className="animate-spin h-10 w-10 text-zinc-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
            >
                <path
                    d="M18.001 20C16.3295 21.2558 14.2516 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.8634 21.8906 13.7011 21.6849 14.5003C21.4617 15.3673 20.5145 15.77 19.6699 15.4728C18.9519 15.2201 18.6221 14.3997 18.802 13.66C18.9314 13.1279 19 12.572 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C13.3197 19 14.554 18.6348 15.6076 18"
                    fill="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </svg>
            <p className="ml-4 text-zinc-400">Loading...</p>
        </div>
    );
};

export default Loading;
