import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Menubar from './Menubar';

const Details = () => {
    const location = useLocation();
    console.log(location)
    const data = location.state?.data; // Optional chaining to safely access data

    // Check if data is available
    if (!data) {
        return (
            <div>
                <Navbar />
                <Menubar />
                <div className="flex justify-center items-center min-h-screen">
                    <h1 className="text-lg text-red-500">Product details not available.</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <Menubar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-6 max-w-4xl">
                    <img
                        src={data.image}
                        alt=""
                        className="w-96 h-60 object-cover rounded-lg"
                    />
                    <div className="ml-0 lg:ml-6 mt-6 lg:mt-0">
                        <h1 className="font-bold text-3xl text-gray-800">${data.price}</h1>
                        <h1 className="mt-5 text-lg">
                            <span className="font-semibold text-gray-700">Category:</span> {data.category}
                        </h1>
                        <h1 className="mt-5 text-lg">
                            <span className="font-semibold text-gray-700">Title:</span> {data.title}
                        </h1>
                        <h1 className="mt-5 text-lg">
                            <span className="font-semibold text-gray-700">Description:</span> {data.description}
                        </h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;
