import { useState } from "react";

export default function QueryBuilder({ updateSession, selectedSession }) {
  const [queryData, setQueryData] = useState({
    select: "",
    from: "",
    where: "",
    "group by": "",
    having: "",
  });

  const onQueryDataChange = (e) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
  };
  const assignMainQuery = () => {
    const id = selectedSession.id;
    if (!id) {
      console.error("no current session");
      return;
    }

    let outputstring =
      selectedSession.query +
      "\n" +
      Object.keys(queryData)
        .map((key) => {
          if (queryData[key] === "") return "";
          return `${key} ${queryData[key]}`;
        })
        .filter((data) => {
          return data !== "";
        })
        .join(" ");
    if (outputstring) {
      outputstring += ";";
      updateSession(id, { query: outputstring });
    }
    setQueryData({ select: "", from: "", where: "", group_by: "", having: "" });
  };

  return (
    <div
      className="qbparent"
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      <center
        style={{
          margin: "10px",
          fontSize: "18px",
          color: "black",
        }}>
        QueryBuilder:
      </center>
      <div className="queryBuilder">
        <div>
          Select:
          <input
            className="queryInput"
            type="text"
            name="select"
            placeholder="Column Name"
            onChange={onQueryDataChange}
            value={queryData.select}
          />
        </div>
        <div>
          from:
          <input
            className="queryInput"
            type="text"
            name="from"
            placeholder="Table Name"
            onChange={onQueryDataChange}
            value={queryData.from}
          />
        </div>
        <div>
          where:
          <input
            className="queryInput"
            type="text"
            name="where"
            placeholder="Condition"
            onChange={onQueryDataChange}
            value={queryData.where}
          />
        </div>
        <div>
          group by:
          <input
            className="queryInput"
            type="text"
            name="group by"
            placeholder="Column Name"
            onChange={onQueryDataChange}
            value={queryData.group_by}
          />
        </div>
        <div>
          having:
          <input
            className="queryInput"
            type="text"
            name="having"
            placeholder="Column Name"
            onChange={onQueryDataChange}
            value={queryData.having}
          />
        </div>
      </div>
      <button
        className="default-button"
        style={{ marginTop: "10px" }}
        onClick={() => {
          assignMainQuery();
        }}>
        ok!
      </button>
    </div>
  );
}
