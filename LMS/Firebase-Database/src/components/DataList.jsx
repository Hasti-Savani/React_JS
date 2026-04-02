import DataCard from "./DataCard";
import { db } from "../firebase/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

const DataList = ({ users, fetchUsers, setSelectedUser }) => {

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
    fetchUsers();
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      {users.map((user) => (
        <DataCard
          key={user.id}
          user={user}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default DataList;