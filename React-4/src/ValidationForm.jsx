import React, { useState } from 'react';

const ValidationForm = () => {


  const [form, setForm] = useState(
    {
      name: '',
      email: ''
    }
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrores = {};

    if (!form.name.trim()) newErrores.name = "name is required";
    if (!form.email.trim()) newErrores.email = "Email is required";


    if (Object.keys(newErrores).length > 0) {
      setErrors(newErrores);
    } else {
      alert('Form submitted successfully')
      setForm({ name: '', email: '' })
    }
  }

  return (
    <div
      className='min-h-screen min-w-screen bg-gradient-to-br from-blue-100 to-white px-4 
      flex justify-center items-center'
    >
      <form
        className='bg-white shadow-md rounded-lg w-full space-y-6'
        onSubmit={handleSubmit}
      >
        <h2
          className='text-2xl font-bold text-center text-gray-700'
        >Contact Form</h2>

        {/* name field  */}

        <div>
          <label htmlFor="name"
            className='black text-gray-700 font-medium mb-1'
          >Name: </label>

          <input type="text"
            name='name'
            id='name'
            value={form.name}
            onChange={handleChange}
            className={`px-4 py-2 border rounded-md focus:outline-none 
            ${errors.name ? 'border-red-500'
                : 'border-gray-300'
              }
            `}
          />
          {
            errors.name && <p
              className='text-red-500 text-sm mt-1'
            >
              {errors.name}
            </p>
          }
        </div>
        {/* email field  */}
        <div>
          <label htmlFor="email"
            className=' text-gray-700 font-medium mb-1'
          >
            Email:
          </label>
          <input type="email" name="email" id="email"
            value={form.email}
            onChange={handleChange}
            className={`px-4 py-2 border rounded-sm focus:outline-none
            ${errors.email ? 'border-red-500' : 'border-gray-300'}
            `}
          />
          {
            errors.email && <p
              className='text-red-500 text-sm mt-1'
            >
              {errors.email}
            </p>
          }
        </div>
        {/* submit  button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Submit
        </button>


      </form>
    </div>
  );
};

export default ValidationForm;