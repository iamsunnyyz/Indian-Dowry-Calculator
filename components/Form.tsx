"use client";
import React, { useState } from "react";

interface FormProps {
  onSubmit: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: "",
    profession: "",
    salary: "",
    education: "",
    maritalStatus: "Single",
    house: "Self-owned",
    residence: "India-Urban",
  });

  const [errors, setErrors] = useState({
    age: false,
    profession: false,
    salary: false,
    education: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      age: !formData.age,
      profession: !formData.profession,
      salary: !formData.salary,
      education: !formData.education,
    };

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-row flex flex-wrap gap-4">
        {/* Age Dropdown */}
        <div className="form-group flex-1">
          <label htmlFor="age">Age</label>
          <select
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors.age ? "border-red-500" : "border-gray-300"
            } rounded`}
          >
            <option value="">Select</option>
            <option value="18-24">18-24 years</option>
            <option value="25-30">25-30 years</option>
            <option value="31-35">31-35 years</option>
            <option value="36-40">36-40 years</option>
            <option value="more than 40">More than 40 years</option>
          </select>
          {errors.age && <p className="text-red-500 text-xs">Age is required.</p>}
        </div>

        {/* Profession Dropdown */}
        <div className="form-group flex-1">
          <label htmlFor="profession">Profession</label>
          <select
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors.profession ? "border-red-500" : "border-gray-300"
            } rounded`}
          >
            <option value="">Select</option>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Investment Banker">Banker</option>
            <option value="Others">Others</option>
          </select>
          {errors.profession && (
            <p className="text-red-500 text-xs">Profession is required.</p>
          )}
        </div>
      </div>

      {/* Salary and Education Row */}
      <div className="form-row flex flex-wrap gap-4">
        <div className="form-group flex-1">
          <label htmlFor="salary">Monthly Salary</label>
          <select
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors.salary ? "border-red-500" : "border-gray-300"
            } rounded`}
          >
            <option value="">Select</option>
            <option value="Less than 50000">Less than 50,000</option>
            <option value="50100-1 lakh">50,100 - 1 lakh</option>
            <option value="1-2 lakhs">1-2 lakhs</option>
            <option value="2-5 lakhs">2-5 lakhs</option>
            <option value="more than 5 lakhs">More than 5 lakhs</option>
          </select>
          {errors.salary && (
            <p className="text-red-500 text-xs">Salary is required.</p>
          )}
        </div>

        <div className="form-group flex-1">
          <label htmlFor="education">Education</label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors.education ? "border-red-500" : "border-gray-300"
            } rounded`}
          >
            <option value="">Select</option>
            <option value="High School">High School</option>
            <option value="Graduation">Graduation</option>
            <option value="Post Graduation">Post Graduation</option>
            <option value="PhD">PhD</option>
            <option value="Dropout">Dropout</option>
          </select>
          {errors.education && (
            <p className="text-red-500 text-xs">Education is required.</p>
          )}
        </div>
      </div>

      <div className="form-row flex flex-wrap gap-4">
      {/* House Dropdown */}
      <div className="form-group flex-1">
        <label htmlFor="house">House</label>
        <select id="residence" name="residence" className="form-select w-full p-2 border border-gray-300 rounded" required>
          <option value="">Select</option>
          <option value="Self-owned">Self-owned</option>
          <option value="Rented">Rented</option>
          <option value="Parent’s house">Parent’s house</option>
        </select>
      </div>

      {/* Residence Dropdown */}
      <div className="form-group flex-1">
        <label htmlFor="country">Residence</label>
        <select id="country" name="country" className="form-select w-full p-2 border border-gray-300 rounded" required>
          <option value="">Select</option>
          <option value="India">India-Urban</option>
          <option value="India">India-Urban</option>
          <option value="Abroad">Abroad</option>
        </select>
      </div>
    </div>

      {/* Marital Status */}
      <div>
        <label className="block font-medium mb-2">Marital Status</label>
        {["Single", "Married", "Divorced"].map((status) => (
          <label key={status} className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="maritalStatus"
              value={status}
              checked={formData.maritalStatus === status}
              onChange={handleInputChange}
              className="mr-2"
            />
            {status}
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-bold rounded"
      >
        Calculate
      </button>
    </form>
  );
};

export default Form;
