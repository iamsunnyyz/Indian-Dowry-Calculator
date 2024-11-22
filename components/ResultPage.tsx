import React from 'react';
import { useRouter } from 'next/router';

interface ResultPageProps {
  dowryAmount: number;
}

const ResultPage: React.FC<ResultPageProps> = ({ dowryAmount }) => {
  const router = useRouter();

  return (
    <div className="p-6 bg-white shadow-lg rounded">
      <h2 className="text-center text-4xl font-bold">If you&apos;re still not convinced...</h2>
      <div className="mt-4 text-center">
        <h3 className="text-2xl">This much amount you can ask for:</h3>
        <p className="text-3xl font-bold mt-2">₹{dowryAmount}</p>
        <p className="mt-2">If this amount doesn&apos;t seem right, think again!</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded"
          onClick={() => router.push('/')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
