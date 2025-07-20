import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Submit.io saved us hours each week and made our onboarding process seamless!",
    name: "John",
    role: "HR Manager, OrionCorp",
  },
  {
    quote: "Intuitive interface, powerful analytics — it's the form solution we've been waiting for.",
    name: "Anita",
    role: "Operations Head, MedEase Clinics",
  },
  {
    quote: "We cut down form-building time by 70% and improved our data quality drastically.",
    name: "Karan",
    role: "Founder, ReturnKart",
  },
];

const logos = [
  "/logos/orioncorp.svg",
  "/logos/medease.svg",
  "/logos/returnkart.svg",
  // Replace with your actual logo paths
];

const stats = [
  { value: "200+", label: "Forms Submitted" },
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "100+", label: "Active Users" },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">💬 What Our Users Say</h2>
        <p className="text-gray-500 mb-12">
          Trusted by teams of all sizes across industries.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <Quote className="text-blue-500 w-6 h-6 mb-4" />
              <p className="text-gray-700 mb-4 italic">"{item.quote}"</p>
              <div className="font-semibold text-gray-800">{item.name}</div>
              <div className="text-sm text-gray-500">{item.role}</div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-10 opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
