import React, { useState } from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: { monthly: "$0", yearly: "$0" },
    description: "For individuals getting started with simple forms.",
    features: {
      "Form Builder": true,
      "100 Submissions/month": true,
      "Email Notifications": true,
      "Custom Branding": false,
      "Team Access": false,
      "Advanced Analytics": false,
    },
  },
  {
    name: "Pro",
    price: { monthly: "$19", yearly: "$190" },
    description: "For professionals needing more control and insights.",
    features: {
      "Form Builder": true,
      "100 Submissions/month": true,
      "Email Notifications": true,
      "Custom Branding": true,
      "Team Access": true,
      "Advanced Analytics": true,
    },
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "For organizations with custom needs and scaling.",
    features: {
      "Form Builder": true,
      "100 Submissions/month": true,
      "Email Notifications": true,
      "Custom Branding": true,
      "Team Access": true,
      "Advanced Analytics": true,
    },
  },
];

const featuresList = Object.keys(plans[0].features);

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing Plans</h1>
        <p className="text-gray-500 mb-6">
          Simple pricing for every stage of your growth.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center border rounded-full p-1 mb-10">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              billingCycle === "monthly"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              billingCycle === "yearly"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Annual (Save 20%)
          </button>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 font-medium text-gray-700">Features</th>
              {plans.map((plan, idx) => (
                <th
                  key={idx}
                  className="p-4 font-medium text-gray-700 text-center"
                >
                  <div className="text-lg font-semibold">{plan.name}</div>
                  <div className="text-sm text-gray-500">
                    {plan.price[billingCycle]}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featuresList.map((feature, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-4 text-gray-700">{feature}</td>
                {plans.map((plan, planIdx) => (
                  <td key={planIdx} className="text-center p-4">
                    {plan.features[feature] ? (
                      <Check className="text-green-600 w-5 h-5 inline-block" />
                    ) : (
                      <X className="text-red-400 w-5 h-5 inline-block" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
            {/* CTA Row */}
            <tr className="bg-white">
              <td className="p-4"></td>
              {plans.map((plan, idx) => (
                <td key={idx} className="p-4 text-center">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
                  >
                    {plan.name === "Free" ? "Get Started" : "Choose Plan"}
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingPage;
