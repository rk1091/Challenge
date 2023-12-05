import PastSessions from "./components/PastSession/PastSessions";
import useSessions from "./hooks/useSesstion";
import "./index.css";

function App() {
  const {
    sessions,
    addSession,
    removeSession,
    updateSession,
    currentSession,
    setCurrentSession,
  } = useSessions();

  const onQueryChange = (e) => {
    const id = sessions[currentSession].id;
    if (!id) {
      console.error("no current session");
      return;
    }
    updateSession(id, { query: e.target.value });
  };

  return (
    <>
      <div className="vscode-container">
        <div
          className="sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              alignSelf: "center",
            }}
          >
            SQL Editor
          </h2>
          <PastSessions
            setCurrentSession={setCurrentSession}
            sessions={sessions}
            addSession={addSession}
            removeSession={removeSession}
            updateSession={updateSession}
          />
          {/* array display and when start typing new obj in array inserted and displayed with date, time maybe? today yesterday 3rd dec , 5pm */}
        </div>
        <div className="parent">
          <div className="editor">
            <div className="run-query">
              <button className="default-button">Run Queries</button>
            </div>
            <textarea
              onChange={onQueryChange}
              value={sessions[currentSession]?.query ?? ""}
              className="um"
              placeholder="Click a session to display or start typing queries to create a session..."
            ></textarea>
          </div>
          <div className="editor2">
            <h1>hi</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
