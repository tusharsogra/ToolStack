import React, { useState } from "react";
import Papa from "papaparse";
import { ArrowUp, ArrowDown, Search } from "lucide-react";

export default function CSVViewer() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filterText, setFilterText] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // Handle CSV Upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setData(results.data);
        setFilteredData(results.data);
        setHeaders(results.meta.fields);
        // Initialize filters
        const initialFilters = {};
        results.meta.fields.forEach((h) => (initialFilters[h] = ""));
        setFilterText(initialFilters);
      },
    });
  };

  // Handle Filter
  const handleFilter = (header, value) => {
    const newFilterText = { ...filterText, [header]: value };
    setFilterText(newFilterText);

    const filtered = data.filter((row) =>
      headers.every((h) =>
        row[h]
          ?.toString()
          .toLowerCase()
          .includes(newFilterText[h].toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  // Handle Sort
  const handleSort = (header) => {
    let direction = "ascending";
    if (sortConfig.key === header && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sorted = [...filteredData].sort((a, b) => {
      const aVal = a[header] ?? "";
      const bVal = b[header] ?? "";
      if (!isNaN(aVal) && !isNaN(bVal)) {
        return direction === "ascending"
          ? aVal - bVal
          : bVal - aVal;
      } else {
        return direction === "ascending"
          ? aVal.toString().localeCompare(bVal.toString())
          : bVal.toString().localeCompare(aVal.toString());
      }
    });

    setFilteredData(sorted);
    setSortConfig({ key: header, direction });
  };

  return (
    <div className="min-h-screen py-25 bg-slate-950 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">CSV Viewer</h1>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4 text-black border bg-white rounded-2xl cursor-pointer p-2 "
      />

      {headers.length > 0 && (
        <div className="overflow-x-auto border border-slate-700 rounded-lg">
          <table className="w-full table-auto text-sm">
            <thead className="bg-slate-800/50 border-b border-slate-700">
              <tr>
                {headers.map((header) => (
                  <th key={header} className="px-4 py-2 text-left">
                    <div className="flex items-center gap-1">
                      <span>{header}</span>
                      <button onClick={() => handleSort(header)}>
                        {sortConfig.key === header ? (
                          sortConfig.direction === "ascending" ? (
                            <ArrowUp size={14} />
                          ) : (
                            <ArrowDown size={14} />
                          )
                        ) : (
                          <ArrowUp size={14} className="opacity-30" />
                        )}
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Filter"
                      value={filterText[header]}
                      onChange={(e) => handleFilter(header, e.target.value)}
                      className="mt-1 w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-white text-xs"
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-slate-900/50" : "bg-slate-900/30"}
                >
                  {headers.map((header) => (
                    <td key={header} className="px-4 py-2 text-gray-200">
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {headers.length === 0 && <p className="text-gray-400 mt-4">Upload a CSV file to view</p>}
    </div>
  );
}
