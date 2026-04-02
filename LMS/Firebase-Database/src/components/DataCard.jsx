const DataCard = ({ user, handleDelete, handleEdit }) => {
    return (
      <div className="bg-white p-4 shadow rounded flex justify-between mb-3">
        <div>
          <p className="font-bold">{user.name}</p>
          <p>{user.email}</p>
        </div>
  
        <div className="space-x-2">
          <button
            onClick={() => handleEdit(user)}
            className="bg-yellow-400 px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(user.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default DataCard;