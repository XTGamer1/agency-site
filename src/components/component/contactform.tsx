"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        websiteType: '',
        budget: ''
    });

    const [showAlert, setShowAlert] = useState(false); // State for managing alert visibility

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "925bee80-2062-4af2-8c44-a458f1b9236c",
                ...formData
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setShowAlert(true); // Show the alert on successful form submission
        } else {
            console.error("Form submission failed:", result.error);
            // Optionally, provide feedback to the user about the failure.
        }
    }

    const images = [
        "carousel-image-1.jpg",
        "carousel-image-2.jpg",
        "carousel-image-3.jpg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const imageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Carousel Image Section */}
            <motion.div
                className="relative h-full w-full md:w-auto"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={imageVariants}
                transition={{
                    delay: 0.2,
                    ease: "easeInOut",
                    duration: 0.5,
                  }} 
            >
                <motion.img
                    src={images[index]}
                    alt={`Image ${index}`}
                    className="absolute w-full h-full object-cover rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.2,
                        ease: "easeInOut",
                        duration: 0.5,
                      }} 
                />
            </motion.div>

            {/* Form Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.2,
                    ease: "easeInOut",
                    duration: 0.5,
                  }} 
            >
                <form onSubmit={handleSubmit} className="bg-white -md rounded px-8 pt-6 pb-8">
                    <h1 className="text-4xl">START A PROJECT</h1>
                    <br/>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                            placeholder="Your name"
                        />
                    </div>
<div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                            placeholder="email@example.com"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className=" text-lg block text-gray-700  font-bold mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="3"
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                            placeholder="Enter Message"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="websiteType" className="block text-gray-700 text-lg font-bold mb-2">What kind of website do you want?</label>
                        <select
                            name="websiteType"
                            value={formData.websiteType}
                            onChange={handleChange}
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                        >
                            <option value="">Select...</option>
                            <option value="portfolio">Portfolio</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="agency">Agency</option>
                            <option value="shopAdvertising">Shop Advertising</option>
                            <option value="managementSystem">Management System</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="budget" className="block text-gray-700 text-lg font-bold mb-2">Budget (in dollars)</label>
                        <input
                            type="number"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            max={50000}
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                            placeholder="Enter Budget"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-black text-white font-bold py-2 ml-auto px-4 rounded focus:outline-none text-md focus:-outline"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>
            </motion.div>

            {/* Alert Section */}
            {showAlert && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-0 left-0 right-0 mt-16 p-5 mx-auto w-1/2 bg-white border border-black p-4 rounded-lg shadow-lg"
                >
                    <p className="text-lg text-black">Form submitted successfully!</p>
                    <button className="absolute top-0 right-0 p-2" onClick={() => setShowAlert(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </motion.div>
            )}
        </div>
    );
}
