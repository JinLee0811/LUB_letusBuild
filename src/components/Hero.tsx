import mainJpg from "../assets/main.jpg";

export default function Hero() {
  return (
    <header className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Container */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          {/* Hero Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            <span className="block">Let Us Build</span>
            <span className="block">Your Perfect Website,</span>
            <span className="block">Just the Way You Want It.</span>
          </h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 dark:text-gray-400 sm:text-xl md:mb-6 lg:mb-8">
            <span className="block">Need a website for your café, online store,</span>
            <span className="block">blog, or portfolio?</span>
            <span className="block">
              We create tailored designs that bring your vision to life.
            </span>
            <span className="block">Contact us to get started!</span>
          </p>
          {/* Hero Button */}
          <div className="flex items-stretch justify-center">
            <a
              href="#"
              className="mr-5 inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white dark:bg-white dark:text-black md:mr-6 lg:mr-8">
              Get a Free Consultation
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold text-black dark:border-white dark:text-white">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg"
                alt=""
                className="mr-2 inline-block max-h-4 w-5"
              />
              <p className="text-sm text-black dark:text-white sm:text-base">View Samples</p>
            </a>
          </div>
        </div>
        {/* Hero Image */}
        <img
          src={mainJpg}
          alt=""
          className="inline-block max-h-[512px] w-full object-cover dark:brightness-75"
        />
      </div>
    </header>
  );
}
