import { useState } from "react";
import { FaSearch, FaPlus, FaFilter } from "react-icons/fa";

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded-md font-medium ${className}`} {...props}>
    {children}
  </button>
);

export default function TopBar() {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "All Locations",
    status: "Any Status",
    type: "Any Type",
  });

  return (
    <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row items-center gap-4 shadow-md border border-gray-300">
      <input
        type="text"
        placeholder="Enter keyword..."
        className="p-3 border rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={filters.keyword}
        onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
      />
      <select className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>All Locations</option>
      </select>
      <select className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Any Status</option>
      </select>
      <select className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Any Type</option>
      </select>
      <Button className="bg-blue-500 text-white flex items-center gap-2 px-5 py-3 rounded-md">
        <FaFilter /> Filters
      </Button>
      <div className="flex items-center gap-2">
        <Button className="bg-gray-200 border px-5 py-3 rounded-md flex items-center gap-2">
          <FaSearch /> Advanced Search
        </Button>
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-md">Search</Button>
      </div>
    </div>
  );
}
