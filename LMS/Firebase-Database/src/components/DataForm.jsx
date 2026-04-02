import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const DataForm = ({ selectedUser, setSelectedUser, fetchUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const usersRef = collection(db, "users");

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedUser) {
      // UPDATE
      const userDoc = doc(db, "users", selectedUser.id);
      await updateDoc(userDoc, { name, email });
      setSelectedUser(null);
    } else {
      // CREATE
      await addDoc(usersRef, { name, email });
    }

    setName("");
    setEmail("");
    fetchUsers();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow rounded-lg mb-6"
    >
      <input
        className="border p-2 w-full mb-3"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {selectedUser ? "Update" : "Add"} User
      </button>
    </form>
  );
};

export default DataForm;