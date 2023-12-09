import { useMemo } from "react";
import "./index.css";

export default function Result({ data }) {
  const randomIndex = Math.floor(Math.random() * 3);
  const rowHeaders = useMemo(() => {
    return Object.keys(data[randomIndex]);
  });

  const downloadFile = (blob) => {
    const aElement = document.createElement("a");
    const url = URL.createObjectURL(blob);
    aElement.href = url;
    aElement.download = "download";
    aElement.click();
    URL.revokeObjectURL(url);
  };

  const downloadAsJSON = () => {
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    downloadFile(blob);
  };

  const downloadAsCSV = () => {
    const header = rowHeaders.join(",");
    const tableData = data
      .map((item) =>
        Object.keys(item)
          .map((cellKey) => `${item[cellKey]}`)
          .join(",")
      )
      .join("\n");
    const content = `${header}\n${tableData}`;
    console.log("content", content);
    const blob = new Blob([content], { type: "text/csv" });
    downloadFile(blob);
  };
  return (
    <div>
      <button
        className="default-button"
        onClick={downloadAsCSV}
        style={{ margin: "5px" }}>
        Download as CSV
      </button>
      <button className="default-button" onClick={downloadAsJSON}>
        Download as JSON
      </button>
      <table className="result-table">
        <thead className="tableHead">
          <tr>
            {rowHeaders.map((row) => (
              <th key={row}>{row}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              {Object.keys(item).map((cellKey, i) => (
                <td key={`${i}-${cellKey}`}> {item[cellKey]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
