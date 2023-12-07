import { useMemo } from "react";

export default function Result({ data }) {
  const rows = useMemo(() => {
    return Object.keys(data[0]);
  });

  return (
    <div>
      <table>
        <thead>
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
