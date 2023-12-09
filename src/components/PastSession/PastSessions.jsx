import { useState } from "react";
import DeleteIcon from "./DeleteIcon";
import "./index.css";

export default function PastSessions({
  sessions,
  addSession,
  removeSession,
  updateSession,
  setCurrentSessionIndex,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div
      className="session-list"
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      <input
        value={searchQuery}
        onChange={(e) => {
          //Not debounced beacuse no network calls
          setSearchQuery(e.target.value);
        }}
        style={{
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "black",
          padding: 8,
        }}
        placeholder="search"
      />
      {sessions
        .filter(
          (session) =>
            !searchQuery ||
            (session.name &&
              session.name
                .toLowerCase()
                .includes(searchQuery.toLocaleLowerCase())) ||
            (session.query &&
              session.query
                .toLowerCase()
                .includes(searchQuery.toLocaleLowerCase()))
        )
        .map((session, i) => (
          <div
            key={session.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            className="session-list-item"
            onClick={() => setCurrentSessionIndex(i)}
          >
            <input
              style={{
                width: "80%",
              }}
              onChange={(e) => {
                console.log("session id", session.id);
                updateSession(session.id, { name: e.target.value });
              }}
              value={session.name ?? session.time}
            />
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => removeSession(session.id)}
            >
              <DeleteIcon />
            </div>
          </div>
        ))}

      <button
        onClick={() => {
          addSession(null);
        }}
        style={{
          cursor: "pointer",
        }}
        className="session-list-item"
      >
        Add new Session
      </button>
    </div>
  );
}
