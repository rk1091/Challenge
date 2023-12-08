import { useMemo } from "react";
import "./index.css";

export default function Result({ data }) {
  const randomIndex = Math.floor(Math.random() * 3);
  const rows = useMemo(() => {
    return Object.keys(data[randomIndex]);
  });

  return (
    <div>
      <table className="table">
        <thead className="tableHead">
          <tr>
            {rows.map((row) => (
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
