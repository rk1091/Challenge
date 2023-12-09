import { useMemo } from "react";
import PastSessions from "./components/PastSession/PastSessions";
import Result from "./components/Result/Result";
import useSessions from "./hooks/useSesstion";
import QueryBuilder from "./components/QueryBuilder/QueryBuilder";
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
    const queries = selectedSession.query.split(";");
    let resultToFetch = queries.length - selectedSession.resultIds.length;
    if (queries[queries.length - 1].trim() === "") {
      resultToFetch--;
    }
    let resultIds = [...selectedSession.resultIds];
    if (resultToFetch < 0) {
      resultIds = resultIds.slice(0, resultIds.length + resultToFetch);
    } else
      while (resultToFetch--) {
        const keys = Object.keys(ResultMap);
        const resultId = Math.floor(Math.random() * keys.length) + 1;
        resultIds.push(resultId);
      }

    // console.log(resultId);
    updateSession(selectedSession.id, { resultIds });
  };

  return (
    <>
      <div className="vscode-container">
        <div
          className="sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <h2
            style={{
              alignSelf: "center",
            }}>
            SQL Editor
          </h2>
          <PastSessions
            setCurrentSessionIndex={setCurrentSessionIndex}
            sessions={sessions}
            addSession={addSession}
            removeSession={removeSession}
            updateSession={updateSession}
          />
        </div>
        <div className="parent">
          <div className="editor">
            <div className="run-query">
              <button onClick={runQuery} className="default-button">
                Run Queries
              </button>
            </div>
            <div className="mainArea">
              <textarea
                onChange={onQueryChange}
                value={selectedSession?.query ?? ""}
                className="mainQuery"
                placeholder="Click a session to display or start typing queries to create a session..."></textarea>

              <QueryBuilder
                selectedSession={selectedSession}
                updateSession={updateSession}
              />
            </div>
          </div>
          <div className="editor2">
            {selectedSession && selectedSession.resultIds.length ? (
              selectedSession.resultIds.map((id) => (
                <Result key={id} data={ResultMap[id]} />
              ))
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
