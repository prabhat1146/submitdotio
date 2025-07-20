import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // or use <a href="/signup"> if not using React Router

const CallToAction = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Start collecting smarter today with <span className="underline underline-offset-4">Submit.io</span>
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Build beautiful forms, get powerful insights, and never miss a submission again.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition"
        >
          Get Started for Free
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
