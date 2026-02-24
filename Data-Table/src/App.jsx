import React, { useState } from "react";
import DataTable from "./components/DataTable";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Hasti Savani", email: "hasti@gmail.com", role: "Admin" },
    { id: 2, name: "Rahul Patel", email: "rahul@gmail.com", role: "User" },
    { id: 3, name: "Priya Shah", email: "priya@gmail.com", role: "Editor" },
    { id: 4, name: "Amit Joshi", email: "amit@gmail.com", role: "User" },
  ]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <DataTable data={users} onDelete={handleDelete} />
    </div>
  );
}

export default App;