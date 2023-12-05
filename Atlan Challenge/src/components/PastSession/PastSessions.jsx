import useSessions from "../../hooks/useSesstion";
import "./index.css";

export default function PastSessions({
  sessions,
  addSession,
  removeSession,
  updateSession,
  setCurrentSession,
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
          onClick={() => setCurrentSession(i)}
        >
          <input
            onChange={(e) => {
              console.log("session id", session.id);
              updateSession(session.id, { name: e.target.value });
            }}
            value={session.name}
          />
          <button onClick={() => removeSession(session.id)}>cl</button>
        </div>
      ))}

      <button
        onClick={() => {
          addSession(null);
        }}
        className="session-list-item"
      >
        Add new Session
      </button>
    </div>
  );
}
