import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Custom Design Consultation",
    description:
      "Collaborate with our experts to craft a website design that reflects your unique vision and brand identity.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Client-Centric Feedback Integration",
    description:
      "We value your input at every step, ensuring the end product aligns with your expectations.",
    icon: LockClosedIcon,
  },
  {
    name: "Affordable Pricing",
    description: "Get high-quality web design and development services at competitive prices.",
    icon: ArrowPathIcon,
  },
  {
    name: "Tailored Functionalities",
    description:
      "Discuss and implement features that perfectly suit your business requirements and goals.",
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-balance">
            Your Vision, Our Expertise
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            We provide tailored web design services that align perfectly with your business goals.
            From initial consultation to final delivery, we ensure every detail meets your
            expectations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-customBlue dark:bg-customBlue">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
