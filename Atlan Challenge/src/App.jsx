import { useMemo } from "react";
import PastSessions from "./components/PastSession/PastSessions";
import Result from "./components/Result/Result";
import useSessions from "./hooks/useSesstion";
import "./index.css";
import { ResultMap } from "./util/data";

function App() {
  const {
    sessions,
    addSession,
    removeSession,
    updateSession,
    currentSessionIndex,
    setCurrentSessionIndex,
  } = useSessions();

  const onQueryChange = (e) => {
    const id = sessions[currentSessionIndex].id;
    if (!id) {
      console.error("no current session");
      return;
    }
    updateSession(id, { query: e.target.value });
  };

  const selectedSession = useMemo(() => {
    return sessions[currentSessionIndex];
  }, [sessions, currentSessionIndex]);

  const runQuery = () => {
    if (selectedSession.resultId) {
      return;
    }

    const keys = Object.keys(ResultMap);
    const resultId = Math.floor(Math.random() * keys.length) + 1;
    console.log(resultId);
    updateSession(selectedSession.id, { resultId });
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
            setCurrentSessionIndex={setCurrentSessionIndex}
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
              <button onClick={runQuery} className="default-button">
                Run Queries
              </button>
            </div>
            <textarea
              onChange={onQueryChange}
              value={selectedSession?.query ?? ""}
              className="um"
              placeholder="Click a session to display or start typing queries to create a session..."
            ></textarea>
          </div>
          <div className="editor2">
            {selectedSession &&
            selectedSession.resultId &&
            ResultMap[selectedSession.resultId] ? (
              <Result data={ResultMap[selectedSession.resultId]} />
            ) : (
              <div> No data</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
