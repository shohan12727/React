import React from "react";

const People = () => {
  const peopleData = {
    people: [
      { id: 1, name: "Alice", age: 25, profession: "Engineer" },
      { id: 2, name: "Bob", age: 30, profession: "Designer" },
      { id: 3, name: "Charlie", age: 22, profession: "Developer" },
      { id: 4, name: "Diana", age: 28, profession: "Doctor" },
      { id: 5, name: "Ethan", age: 26, profession: "Teacher" },
    ],
  };
  return (
    <div className="m-20">
      <h4 className="text-4xl font-bold text-center mb-4">People List</h4>
      <ul className="flex flex-col justify-center items-center gap-4 ">
       {
        peopleData.people.map((person) => (
          <li
          className="w-64 bg-white shadow-md rounded-xl p-4 text-left "
          key={person.id}>
              <p>Name:{person.name}</p>
              <p>Age:{person.age}</p>
              <p>Profession:{person.profession}</p>
          </li>
        ))
       }
      </ul>
    </div>
  );
};

export default People;
