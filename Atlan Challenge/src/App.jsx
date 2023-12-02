import "./index.css";

function App() {
  return (
    <>
      <div className="vscode-container">
        <div className="sidebar">
          <h2>SQL Editor</h2>
          <div className="um">Past Sessions</div>
          {/* <PastSessions/>  */}
          {/* array display and when start typing new obj in array inserted and displayed with date, time maybe? today yesterday 3rd dec , 5pm */}
        </div>
        <div className="parent">
          <div className="editor">
            <div className="run-query">
              <button>Run Queries</button>
            </div>
            <textarea
              className="um"
              placeholder="Click a session to display or start typing queries to create a session..."></textarea>
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
