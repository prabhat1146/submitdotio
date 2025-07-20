import React from "react";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Who We Are
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-3xl mx-auto">
          Submit.io was built with a single mission: to simplify data collection and make form creation accessible to everyone — from startups to enterprises. We're a small, dedicated team of builders, designers, and problem solvers who believe that smart tools empower people to do their best work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">💡 Our Vision</h3>
            <p className="text-gray-600">
              A world where anyone can collect structured data in seconds — no dev required.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🛠️ Our Craft</h3>
            <p className="text-gray-600">
              We obsess over simplicity, performance, and seamless integrations for everyday use.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🤝 Our Promise</h3>
            <p className="text-gray-600">
              We listen, ship fast, and grow with your feedback. You build forms — we build trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
