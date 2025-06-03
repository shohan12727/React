import React from "react";

const UserList = () => {
  const usersName = [
    { name: "Hasan Mahmud", gender: "male", email: "hasan.mahmud@example.com" },
    {
      name: "Rakib Hossain",
      gender: "male",
      email: "rakib.hossain@example.com",
    },

    // Female Users

    {
      name: "Tania Sultana",
      gender: "female",
      email: "tania.sultana@example.com",
    },

    { name: "Mitu Akter", gender: "female", email: "mitu.akter@example.com" },
    {
      name: "Nadia Hossain",
      gender: "female",
      email: "nadia.hossain@example.com",
    },
    { name: "Rima Khatun", gender: "female", email: "rima.khatun@example.com" },
    {
      name: "Ayesha Siddika",
      gender: "female",
      email: "ayesha.siddika@example.com",
    },

    {
      name: "Nargis Akter",
      gender: "female",
      email: "nargis.akter@example.com",
    },
    { name: "Munni Akter", gender: "female", email: "munni.akter@example.com" },
    {
      name: "Reshma Khatun",
      gender: "female",
      email: "reshma.khatun@example.com",
    },
    { name: "Priya Das", gender: "female", email: "priya.das@example.com" },
    {
      name: "Shamima Nasrin",
      gender: "female",
      email: "shamima.nasrin@example.com",
    },
    { name: "Afia Rahman", gender: "female", email: "afia.rahman@example.com" },
    {
      name: "Rokeya Begum",
      gender: "female",
      email: "rokeya.begum@example.com",
    },
    {
      name: "Sultana Jahan",
      gender: "female",
      email: "sultana.jahan@example.com",
    },

    {
      name: "Roksana Begum",
      gender: "female",
      email: "roksana.begum@example.com",
    },
  ];

  return (
    <div className="min-h-screen min-w-screen mx-auto bg-sky-200">
      <h2 className="text-4xl font-bold mb-10"> List of User Informations</h2>
      <ul className="list-disc list-inside space-y-2">
        {usersName.map((user, index) => (
          <div className="border-2 rounded-2xl  border-sky-500">
            <li className="text-gray-700 text-2xl font-semibold" key={index}>
              Name: {user.name}
            </li>
            <li className="text-gray-700 text-2xl font-semibold" key={index}>
              Gender: {user.gender}
            </li>
            <li className="text-gray-700 text-2xl font-semibold" key={index}>
              Email: {user.email}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
