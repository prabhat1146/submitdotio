import React from "react";
import { CheckCircle, Rocket, Building2 } from "lucide-react";
import { Link } from "react-router-dom"; // or use <a> href="/pricing" if not using React Router

const plans = [
  {
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    name: "Free Plan",
    description: "Perfect for individuals getting started.",
    features: [
      "Basic Form Builder",
      "100 Submissions/month",
      "Email Notifications",
    ],
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    name: "Pro Plan",
    description: "For professionals and growing teams.",
    features: [
      "Unlimited Forms",
      "5,000 Submissions/month",
      "Advanced Analytics",
      "Custom Branding",
    ],
  },
  {
    icon: <Building2 className="w-8 h-8 text-purple-600" />,
    name: "Enterprise",
    description: "Best for organizations & large teams.",
    features: [
      "Team Access & Permissions",
      "Priority Support",
      "API + Webhooks",
      "Custom SLA & Onboarding",
    ],
  },
];

const PricingPreview = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">💸 Simple & Transparent Pricing</h2>
        <p className="text-gray-500 mb-12">
          Explore a plan that fits your scale — upgrade anytime.
        </p>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 text-left">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="mb-4">{plan.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="flex-1 space-y-2 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="pages/pricing/form-pricing"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Compare Full Plans →
        </Link>
      </div>
    </section>
  );
};

export default PricingPreview;
