import React, { useState } from "react";
import UserCard from "../components/userCard";
import "./Dashboard.css"; // Import CSS

const Dashboard = () => {
  const [users] = useState([
    {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      description: "Frontend Developer",
      email: "john@example.com",
    },
    {
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      description: "UI/UX Designer",
      email: "jane@example.com",
    },
    {
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Mark Wilson",
      description: "Backend Engineer",
      email: "mark@example.com",
    },
    {
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Emily Johnson",
      description: "Full Stack Developer",
      email: "emily@example.com",
    },
    {
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Michael Brown",
      description: "Data Scientist",
      email: "michael@example.com",
    },
  ]);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">User Dashboard</h1>
      <div className="user-grid">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;