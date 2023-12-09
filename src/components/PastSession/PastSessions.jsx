import DeleteIcon from "./DeleteIcon";
import "./index.css";

export default function PastSessions({
  sessions,
  addSession,
  removeSession,
  updateSession,
  setCurrentSessionIndex,
}) {
  return (
    <div
      className="session-list"
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      {sessions.map((session, i) => (
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
            value={session.name}
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
