import React from "react";

const teamMembers = [
  {
    name: "Prabhat Kumar",
    role: "Founder & Co-Founder",
    image: "/team/prabhat.jpg",
    bio: "Full-stack engineer — leads both frontend and backend development, building robust, scalable systems.",
  },
  {
    name: "Yogesh Jaiswal",
    role: "Founder & Co-Founder",
    image: "/team/yogesh.jpg",
    bio: "Full-stack developer — crafts seamless UI and manages core system logic for a better form experience.",
  },
  {
    name: "Angshuman Jana",
    role: "Founder & Co-Founder",
    image: "/team/angshuman.jpg",
    bio: "Tech-savvy user expert — supports customer success, manages onboarding, and bridges product with people.",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">👥 Meet Our Team</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          A founding team of technologists — combining full-stack expertise with real user empathy to build the future of smart forms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
