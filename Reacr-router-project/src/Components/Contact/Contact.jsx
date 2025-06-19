import React from 'react';

const Contact = () => {
  return (
    <div>
       <section className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md my-10">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
      
      <p className="mb-8 text-gray-600">
        Feel free to reach out for project inquiries, collaborations, or just a friendly hello.
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <form className="flex-1 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
            <input 
              id="name"
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
            <input 
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea 
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="flex-1 bg-gray-50 rounded-md p-6 text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
          <p className="mb-3">
            <strong>Email:</strong> <a href="mailto:aishohan001@gamil.com" className="text-blue-600 hover:underline">aishohan001@gamil.com</a>
          </p>
          <p className="mb-3">
            <strong>Phone:</strong> <a href="mob:01887104758" className="text-blue-600 hover:underline">01887104758</a>
          </p>
          <p className="mb-3">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ashraful-islam-shohan-094b6530b/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin</a>
          </p>
          <p>
            <strong>Location:</strong> Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;