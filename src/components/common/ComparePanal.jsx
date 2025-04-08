// components/ComparePanel.jsx
import { useCompare } from "../common/CompareContext";
import { useState } from "react";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";



const ComparePanel = () => {
  const { compareList, removeFromCompare } = useCompare();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-3 rounded-l-full shadow"
      >
        <CompareArrowsOutlinedIcon style={{color:"white"}}/> ({compareList.length}/4)
      </button>

      {isOpen && (
        <div className="w-72 bg-white rounded-lg shadow-lg mt-4 p-4">
          <h4 className="font-semibold mb-2">Compare Properties</h4>
          <ul className="space-y-3">
            {compareList.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img src={item.image} alt={item.title} className="w-10 h-10 rounded" />
                  <span className="text-sm">{item.title}</span>
                </div>
                <button onClick={() => removeFromCompare(item.title)} className="text-red-500">
                  ✖
                </button>
              </li>
            ))}
          </ul>

          {compareList.length >= 2 && (
            <button className="w-full bg-blue-500 text-white py-2 rounded mt-4">
              Go to Compare
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ComparePanel;
