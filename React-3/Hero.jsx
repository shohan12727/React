const Hero = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white to-gray-100 font-sans">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Empower Your Vision with Clean Code & Modern Tools
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start building impactful digital experiences using modern
            technologies. Whether you're a beginner or pro, take the next step
            with us.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:brightness-110 active:scale-95 transition-all duration-300 ease-in-out">
              Get Started
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 hover:shadow-md active:scale-95 transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
