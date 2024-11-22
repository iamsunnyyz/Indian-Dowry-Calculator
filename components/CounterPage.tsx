"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface CounterPageProps {
  formData: any;
}

const CounterPage: React.FC<CounterPageProps> = ({ formData }) => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [imageIndex, setImageIndex] = useState(1);
  const router = useRouter();

  // Counters for animated counting
  const [dailyDeaths, setDailyDeaths] = useState(0);
  const [tenYearDeaths, setTenYearDeaths] = useState(0);
  const [fiveYearDeaths, setFiveYearDeaths] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      const dowryAmount = calculateDowry(formData); // Calculate dowry
      router.push(`/result?dowryAmount=${dowryAmount}`); // Redirect with query parameter
    }
  }, [timeLeft, formData, router]);

  useEffect(() => {
    // Change image index every 3 seconds
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev % 3) + 1); // Cycle through images 1 to 3
    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  // Animated counters
  useEffect(() => {
    const animateCounter = (
      target: number,
      setFunc: React.Dispatch<React.SetStateAction<number>>,
      speed: number
    ) => {
      let current = 0;
      const increment = Math.ceil(target / 100);

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setFunc(current);
      }, speed);
    };

    animateCounter(20, setDailyDeaths, 50); // Increment to 20+
    animateCounter(187879, setTenYearDeaths, 5); // Increment to 187,879+
    animateCounter(35493, setFiveYearDeaths, 10); // Increment to 35,493+
  }, []);

  const calculateDowry = (formData: any) => {
    let dowry = 2000000;

    // Age contributions
    switch (formData.age) {
      case "18-24":
        dowry += 100000; // Prime age for marriage
        break;
      case "25-30":
        dowry += 80000;
        break;
      case "31-35":
        dowry += 50000;
        break;
      case "36-40":
        dowry += 20000;
        break;
      case "more than 40":
        dowry += 10000;
        break;
      default:
        dowry += 0;
    }

// Profession contributions
switch (formData.profession) {
  case "Doctor":
    dowry += 500000; // High-income profession
    break;
  case "Engineer":
    dowry += 400000;
    break;
  case "Entrepreneur":
    dowry += 300000;
    break;
  case "Banker":
    dowry += 250000;
    break;
  case "Others":
    dowry += 100000;
    break;
  default:
    dowry += 0;
}

// Salary contributions
switch (formData.salary) {
  case "Less than 50000":
    dowry += 50000;
    break;
  case "50100-1 lakh":
    dowry += 150000;
    break;
  case "1-2 lakhs":
    dowry += 300000;
    break;
  case "2-5 lakhs":
    dowry += 500000;
    break;
  case "more than 5 lakhs":
    dowry += 700000;
    break;
  default:
    dowry += 0;
}

// Education contributions
switch (formData.education) {
  case "High School":
    dowry += 50000;
    break;
  case "Graduation":
    dowry += 100000;
    break;
  case "Post Graduation":
    dowry += 200000;
    break;
  case "PhD":
    dowry += 400000; // High value for advanced education
    break;
  case "Dropout":
    dowry -= 50000; // Negative contribution
    break;
  default:
    dowry += 0;
}

// Marital Status contributions
switch (formData.maritalStatus) {
  case "Single":
    dowry += 100000;
    break;
  case "Married":
    dowry += 50000; // Less demand
    break;
  case "Divorced":
    dowry += 20000; // Lower market value
    break;
  default:
    dowry += 0;
}

// House contributions
switch (formData.house) {
  case "Self-owned":
    dowry += 500000; // High asset value
    break;
  case "Rented":
    dowry += 200000;
    break;
  case "Parent’s house":
    dowry += 100000;
    break;
  default:
    dowry += 0;
}

// Residence contributions
switch (formData.residence) {
  case "India-Urban":
    dowry += 200000;
    break;
  case "India-Rural":
    dowry += 100000;
    break;
  case "Abroad":
    dowry += 700000; // High value for living abroad
    break;
  default:
    dowry += 0;
}
    return dowry;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Animated Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 text-center">
        <div className="bg-white p-4 rounded">
          <span className="text-2xl font-bold">{dailyDeaths}+</span>
          <p className="text-sm mt-2">Deaths Daily</p>
        </div>
        <div className="bg-white p-4 rounded">
          <span className="text-2xl font-bold">{tenYearDeaths}+</span>
          <p className="text-sm mt-2">
            Dowry deaths reported in India in the past 10 years
          </p>
        </div>
        <div className="bg-white p-4 rounded">
          <span className="text-2xl font-bold">{fiveYearDeaths}+</span>
          <p className="text-sm mt-2">
            Dowry deaths reported between 2017-2021
          </p>
        </div>
      </div>

      {/* Countdown Timer
      <p className="text-lg mt-6">{timeLeft} seconds remaining...</p> */}

      {/* Dynamic Image */}
      <div className="mt-6">
        <img
          src={`/images/dowry${imageIndex}.jpg`}
          alt="Dynamic Image"
          className="w-full max-w-md mx-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default CounterPage;
