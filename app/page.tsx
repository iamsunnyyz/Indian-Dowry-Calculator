"use client";
import { useState } from "react";
import Form from "../components/Form";
import CounterPage from "../components/CounterPage";

export default function HomePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-start items-center px-4"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Dynamic Heading */}
      <h1
        className="text-3xl sm:text-4xl font-bold text-center mb-6 mt-10"
        style={{
          WebkitTextStroke: "2px white",
          color: "black",
        }}
      >
        {isSubmitted ? "Are Their Lives Worth it?" : "How much dowry are you worth?"}
      </h1>

      {/* Two-column structure */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Column: Female-Hand image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/images/Female-Hand.png"
            alt="Female Hand"
            className="w-3/4 md:w-full h-auto object-contain"
          />
        </div>

        {/* Right Column: Form Card */}
        <div className="flex-1 p-6 md:p-8 bg-white bg-opacity-90 rounded-md shadow-lg w-full max-w-md">
          {!isSubmitted ? (
            <Form onSubmit={handleFormSubmit} />
          ) : (
            <CounterPage formData={formData} />
          )}
        </div>
      </div>
    </div>
  );
}
