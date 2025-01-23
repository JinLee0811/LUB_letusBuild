import React from "react";
import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";

const projects = [
  {
    id: 1,
    name: "Project name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    tags: ["WEB DESIGN", "UI / UX", "WEBFLOW"],
    image: sample1,
    websiteLink: "#",
    projectLink: "#",
  },
  {
    id: 2,
    name: "Project name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    tags: ["WEB DESIGN", "UI / UX", "WEBFLOW"],
    image: sample2,
    websiteLink: "#",
    projectLink: "#",
  },
  {
    id: 3,
    name: "Project name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    tags: ["WEB DESIGN", "UI / UX", "WEBFLOW"],
    image: sample3,
    websiteLink: "#",
    projectLink: "#",
  },
  {
    id: 4,
    name: "Project name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    tags: ["WEB DESIGN", "UI / UX", "WEBFLOW"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPLaceholder%20Image%20Secondary.svg?alt=media&token=b8276192-19ff-4dd9-8750-80bc5f7d6844",
    websiteLink: "#",
    projectLink: "#",
  },
];

const SamplePage: React.FC = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-stretch">
          <h2 className="mb-5 text-center text-3xl font-bold md:text-5xl">Look around our Work!</h2>
          <p className="mb-20 text-center text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className="gap-x-8 [column-count:1] md:grid-cols-2 md:gap-x-4 md:[column-count:2]">
            {projects.map((project) => (
              <div
                key={project.id}
                className="mb-12 inline-block border border-solid border-gray-300 md:mb-8 lg:mb-10">
                <div className="relative w-full h-64 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute top-0 left-0 h-full w-full object-cover"
                  />
                </div>
                <div className="px-5 py-8 sm:px-6">
                  <h5 className="mb-3 text-xl font-bold">{project.name}</h5>
                  <p className="flex-col text-gray-500">{project.description}</p>
                  <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                    {project.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-gray-700">
                        <p>{tag}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <a
                      href={project.websiteLink}
                      className="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black">
                      <p>VISIT WEBSITE</p>
                      <img
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                        alt=""
                        className="inline-block"
                      />
                    </a>
                    <a
                      href={project.projectLink}
                      className="inline-block rounded-md bg-black px-6 py-3 text-center font-semibold text-white">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SamplePage;
