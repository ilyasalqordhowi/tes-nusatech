import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

function Onboarding() {
  const [step, setStep] = useState(0);
  const nav = useNavigate();

  const steps = [
    {
      title: "Atur manajemen kampanyemu",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Nikmati pengalaman terbaik",
      description:
        "Dive into a world of blissful massage services tailored to your preferences.",
    },
    {
      title: "Mulai sekarang juga",
      description:
        "Buat kampanye dan nikmati fitur-fitur unggulan dengan mudah.",
    },
  ];

  function handleNext() {
    if (step < steps.length - 1) setStep(step + 1);
    else nav("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      {/* Logo */}
      <Logo />

      {/* Konten */}
      <div className="text-center bg-white rounded-3xl shadow p-6 w-full max-w-md mt-6">
        <h2 className="text-xl font-bold text-teal-700">{steps[step].title}</h2>
        <p className="mt-2 text-gray-600 text-base">
          {steps[step].description}
        </p>

        {/* Indikator Progres */}
        <div className="flex items-center justify-center mt-6 space-x-2">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-6 rounded-full transition-all ${
                index === step ? "bg-teal-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Tombol */}
      <div className="flex flex-col gap-4 w-full max-w-md mt-6">
        <button
          className="w-full px-6 py-3 text-white bg-teal-500 rounded-full shadow-md hover:bg-teal-600 transition-all"
          onClick={handleNext}
        >
          {step < steps.length - 1 ? "Next" : "Finish"}
        </button>
        <Link to="/login">
          <button className="w-full px-6 py-3 text-teal-500 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-all">
            Skip
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
