import React from 'react';

export default function Contact() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[700px] bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold mb-8">We will give you a call to help you out!</h1>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight">
                                Get in touch:
                            </h2>
                            <p className="text-lg font-medium text-gray-300 mt-2">
                                Plan your next Trip.
                            </p>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center text-gray-300">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-400"
                                >
                                    <path
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    Kamla Nagar, New Delhi
                                </div>
                            </div>

                            <div className="flex items-center text-gray-300">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-400"
                                >
                                    <path
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    +91 9899471084
                                </div>
                            </div>

                            <div className="flex items-center text-gray-300">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-400"
                                >
                                    <path
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-xs tracking-wide font-semibold">
                                    farazansari7950@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col justify-center">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="tel" className="hidden">Query</label>
                            <textarea
                                name="query"
                                id="query"
                                placeholder="Write Your Query"
                                className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-green-700 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
