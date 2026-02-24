import React from "react";

const TableRow = ({ item, onDelete }) => {
  return (
    <tr className="text-center hover:bg-gray-100 transition duration-200">
      <td className="p-3 border">{item.id}</td>
      <td className="p-3 border">{item.name}</td>
      <td className="p-3 border">{item.email}</td>
      <td className="p-3 border">{item.role}</td>
      <td className="p-3 border">
        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;