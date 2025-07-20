import React from "react";
import {
  BookOpenCheck,
  Briefcase,
  Stethoscope,
  ShoppingBag,
} from "lucide-react";

const useCases = [
  {
    icon: <BookOpenCheck className="w-10 h-10 text-indigo-600" />,
    title: "Educators",
    description:
      "Collect assignments, quizzes, registration details, or feedback from students—seamlessly and securely.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    title: "HR Teams",
    description:
      "Streamline employee onboarding, job applications, performance reviews, and internal surveys.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-rose-600" />,
    title: "Clinics & Healthcare",
    description:
      "Simplify patient intake, consent forms, appointment requests, and medical history collection.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-green-600" />,
    title: "E-Commerce",
    description:
      "Gather product reviews, process return requests, or run post-purchase satisfaction surveys with ease.",
  },
];

const UseCases = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 Use Cases</h2>
        <p className="text-gray-500 mb-12">
          Submit.io is flexible enough to serve any industry. Here are some of the most common use cases:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{useCase.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
