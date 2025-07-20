import React from "react";
import {
  ClipboardList,
  ShieldCheck,
  BarChart3,
  Share2,
  Users,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: <ClipboardList className="h-8 w-8 text-blue-600" />,
    title: "Form Builder",
    description: "Create professional forms with drag-and-drop ease.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
    title: "Secure Submissions",
    description: "End-to-end encrypted data, GDPR compliant.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
    title: "Analytics & Reports",
    description: "Get instant insights from submissions.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-yellow-500" />,
    title: "Multi-Channel Embed",
    description: "Share via link, email, or embed into websites.",
  },
  {
    icon: <Users className="h-8 w-8 text-pink-500" />,
    title: "Team Collaboration",
    description: "Assign roles, share forms, and track responses together.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-sky-600" />,
    title: "Cloud Sync",
    description: "All your submissions backed up automatically.",
  },
];

const CoreFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🚀 Core Features</h2>
        <p className="text-gray-500 mb-12">Everything you need to build, share, and manage powerful forms.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
