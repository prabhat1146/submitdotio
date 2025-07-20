import React from "react";
import { FilePlus, Send, ActivitySquare } from "lucide-react";

const steps = [
  {
    icon: <FilePlus className="w-10 h-10 text-blue-600" />,
    title: "1. Create Your Form",
    description:
      "Use our intuitive drag-and-drop builder to design forms that suit your needs—no coding required.",
  },
  {
    icon: <Send className="w-10 h-10 text-green-600" />,
    title: "2. Share the Link",
    description:
      "Get a public or private link, embed the form on your website, or send it via email or social platforms.",
  },
  {
    icon: <ActivitySquare className="w-10 h-10 text-purple-600" />,
    title: "3. Track Responses in Real-Time",
    description:
      "Monitor submissions instantly with visual dashboards and export detailed reports when needed.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">✨ How It Works</h2>
        <p className="text-gray-500 mb-12">Three simple steps to collect and analyze data effortlessly.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 p-4 bg-gray-100 rounded-full shadow-md">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
