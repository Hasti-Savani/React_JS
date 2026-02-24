import React, { useState } from "react";
import TableRow from "./TableRow";

const DataTable = ({ data, onDelete }) => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="justify-center items-center mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        React Data Table
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        className=" p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={item.id} item={item} onDelete={onDelete} />
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-4 text-gray-500"
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;