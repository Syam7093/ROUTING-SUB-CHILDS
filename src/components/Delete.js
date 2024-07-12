import React from 'react';
import "../App.css"

const Delete = () => {
  const employees = [
    { id: 1, name: 'John Doe', email: 'john@example.com', profile: 'Developer', gender: 'Male', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', profile: 'Designer', gender: 'Female', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', profile: 'Manager', gender: 'Male', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Emily Brown', email: 'emily@example.com', profile: 'QA', gender: 'Female', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Chris White', email: 'chris@example.com', profile: 'Support', gender: 'Male', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, name: 'Sara Black', email: 'sara@example.com', profile: 'HR', gender: 'Female', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 7, name: 'David Green', email: 'david@example.com', profile: 'Analyst', gender: 'Male', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 8, name: 'Laura Blue', email: 'laura@example.com', profile: 'Developer', gender: 'Female', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 9, name: 'James Grey', email: 'james@example.com', profile: 'Designer', gender: 'Male', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 10, name: 'Alice Pink', email: 'alice@example.com', profile: 'Manager', gender: 'Female', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
  ];

  return (
    <div className="table-container">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.profile}</td>
              <td>{employee.gender}</td>
              <td><img src={employee.image} alt={employee.name} className="profile-image" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Delete;
