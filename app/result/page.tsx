'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ResultPage: React.FC = () => {
  const router = useRouter();
  const [dowryAmount, setDowryAmount] = useState<number>(0);

  useEffect(() => {
    const dowryAmountParam = new URLSearchParams(window.location.search).get('dowryAmount');
    if (dowryAmountParam) {
      setDowryAmount(parseInt(dowryAmountParam, 10));
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="p-6 sm:p-8 bg-white shadow-lg rounded-lg max-w-md sm:max-w-lg w-full text-center mx-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            If you're still not convinced...
          </h2>
          <div className="mt-6">
            <h3 className="text-2xl sm:text-1xl font-semibold text-gray-700">
              This much amount you can ask for:
            </h3>
            <p className="text-3xl sm:text-4xl font-bold text-green-500 mt-4">
              ₹{dowryAmount}
            </p>
            <p className="mt-4 text-lg text-gray-600">
              If this amount doesn't seem right, think again!
            </p>
          </div>
          <button
            className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-all"
            onClick={() => router.push('/')} // Go back to home
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
