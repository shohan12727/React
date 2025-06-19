import React from 'react';
import img from '../../assets/shohanieee.jpg';

const Body = () => {
  return (
    <div>
      <main className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-gray-300 min-h-screen">
        
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hello, I'm Ashraful Islam Shohan
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            I am a dedicated <strong>Electrical and Electronics Engineer</strong> with a strong foundation in circuit design,
            embedded systems, and smart technology solutions. My focus lies in bridging hardware innovation with software
            intelligence to create impactful and efficient systems.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            With a passion for problem-solving and continuous learning, I strive to develop practical, scalable
            technologies that enhance everyday life and drive sustainable innovation.
          </p>
        </div>

        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <img
            src={img}
            alt="Ashraful Islam Shohan"
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default Body;
