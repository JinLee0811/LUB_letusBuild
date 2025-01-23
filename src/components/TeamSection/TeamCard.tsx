import React from "react";

interface TeamCardProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
    socialLinks: {
      reddit: string;
      facebook: string;
      github: string;
    };
  };
  onClick: (id: number) => void;
  isSelected: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, onClick, isSelected }) => {
  return (
    <div
      className={`relative flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl group hover:bg-gray-500 dark:border-gray-700 dark:hover:border-transparent ${
        isSelected ? "bg-gray-500 text-white" : "bg-gray"
      }`}
      onClick={() => onClick(member.id)}>
      <div className="flex flex-col items-center h-full w-full">
        {isSelected ? (
          <>
            <h1 className="text-3xl font-semibold">{member.name}</h1>
            <p className="mt-2 text-lg">{member.role}</p>
            <p className="mt-4 text-sm text-center">{member.description}</p>
            <div className="flex mt-12 mb-2 space-x-3">
              <a href={member.socialLinks.reddit} className="text-white hover:text-gray-300">
                Reddit
              </a>
              <a href={member.socialLinks.facebook} className="text-white hover:text-gray-300">
                Facebook
              </a>
              <a href={member.socialLinks.github} className="text-white hover:text-gray-300">
                GitHub
              </a>
            </div>
          </>
        ) : (
          <>
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={member.image}
              alt={member.name}
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              {member.name}
            </h1>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              {member.role}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
