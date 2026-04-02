import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import DataForm from "../components/DataForm";
import DataList from "../components/DataList";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const usersRef = collection(db, "users");

  const fetchUsers = async () => {
    const data = await getDocs(usersRef);
    setUsers(data.docs.map((d) => ({ ...d.data(), id: d.id })));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <DataForm
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        fetchUsers={fetchUsers}
      />
      <DataList
        users={users}
        fetchUsers={fetchUsers}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};

export default Home;