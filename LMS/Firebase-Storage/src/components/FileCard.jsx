const FileCard = ({ url, handleDelete }) => {
    return (
      <div className="bg-white p-4 rounded shadow">
        <img
          src={url}
          alt="file"
          className="w-full h-40 object-cover mb-3 rounded"
        />
  
        <button
          onClick={() => handleDelete(url)}
          className="bg-red-500 text-white px-3 py-1 rounded w-full"
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default FileCard;