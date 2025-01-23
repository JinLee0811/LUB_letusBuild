import React, { useState } from "react";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    id: 1,
    name: "Arthur Melo",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socialLinks: {
      reddit: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Amelia Anderson",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socialLinks: {
      reddit: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Olivia Wathan",
    role: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socialLinks: {
      reddit: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "John Doe",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socialLinks: {
      reddit: "#",
      facebook: "#",
      github: "#",
    },
  },
];

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedMember((prevSelected) => (prevSelected === id ? null : id));
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Executive Team
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onClick={handleCardClick}
              isSelected={selectedMember === member.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
