import React, { useState } from "react";
import TeamCard from "./TeamCard";
import JinImage from "../../assets/JinImage.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "HY Kim",
    role: "Owner",
    image:
      "https://files.oaiusercontent.com/file-BcWZer7zqnTpVJaot7sLVz?se=2025-01-23T07%3A44%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd6e627f9-3240-4f39-9421-fd27575d5376.webp&sig=qBm2cjxd%2BdAX5oAGGb9VPhOtrH7sSMkiwwWZUkA0Bag%3D",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socialLinks: {
      reddit: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Jin Lee",
    role: "Lead Developer",
    image: JinImage,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socialLinks: {
      reddit: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Hayley Kim",
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
    name: "Elodie Kim",
    role: "Full Stack Developer",
    image:
      "https://files.oaiusercontent.com/file-1aNNK82XM1hz1YbhDUxifA?se=2025-01-23T07%3A45%3A45Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D767c220b-a201-40a3-8bda-2bc67aabe523.webp&sig=nrkjbK5HUB/t4qyrjDU20sFHeSP8aoEo4kVfqzs3tB8%3D",
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
