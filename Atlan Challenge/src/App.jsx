import { useEffect, useMemo, useState } from "react";
import PastSessions from "./components/PastSession/PastSessions";
import Result from "./components/Result/Result";
import useSessions from "./hooks/useSesstion";
import "./index.css";
import { ResultMap } from "./util/data";

function App() {
  // const [fli, setFli] = useState(false);
  const [count, setCount] = useState(0);
  const [queryBuilder, setQueryBuilder] = useState("");
  const [flip, setFlip] = useState(false);
  const {
    sessions,
    addSession,
    removeSession,
    updateSession,
    currentSessionIndex,
    setCurrentSessionIndex,
  } = useSessions();

  // useEffect(() => {
  //   // Update count when the query changes
  //   const c = queryBuilder.split(";").length - 1;
  //   setCount(c > 0 ? c : 0);
  // }, [flip2]);

  const onQueryBuilderChange = (e) => {
    setQueryBuilder(e.target.value);
    // setQueryBuilder(queryBuilder);
  };
  const onQueryChange = (e) => {
    const id = sessions[currentSessionIndex].id;
    if (!id) {
      console.error("no current session");
      return;
    }
    // let c = 0;
    // console.log("HI");
    // for (let i = 0; i < e.target.value.length; i++) {
    //   if (e.target.value[i] == ";") c++;
    // }
    // console.log(c);
    // setCount(c);
    const c = e.target.value.split(";").length - 1;
    setCount(c > 0 ? c : 0);
    updateSession(id, { query: e.target.value });
  };

  const selectedSession = useMemo(() => {
    return sessions[currentSessionIndex];
  }, [sessions, currentSessionIndex]);

  const runQuery = () => {
    // setFli((e) => !e);
    if (selectedSession.resultId) {
      return;
    }

    const keys = Object.keys(ResultMap);
    const resultId = Math.floor(Math.random() * keys.length) + 1;
    console.log(resultId);
    updateSession(selectedSession.id, { resultId });
  };

  const assignMainQuery = () => {
    const id = sessions[currentSessionIndex].id;
    if (!id) {
      console.error("no current session");
      return;
    }

    //logic to check Select from where group by having only space btw or chars if chars then append
    const KEYWORDS = ["Select", "from", "where", "group", "by", "having"];
    const words = queryBuilder.split(/\s+/);
    let outputstring = "";
    // console.log(words);
    for (let i = 0; i < words.length - 1; i++) {
      // if (words[i]=="having" && i<words.length)
      if (KEYWORDS.includes(words[i]) && !KEYWORDS.includes(words[i + 1])) {
        if (words[i] == "by") outputstring = outputstring + " group";
        outputstring = outputstring + " " + words[i];
        for (let j = i + 1; j < words.length; j++) {
          if (KEYWORDS.includes(words[j])) break;
          else outputstring = outputstring + " " + words[j];
          // console.log(outputstring);
        }
      }
      // else if (!KEYWORDS.includes(words[i]) && !KEYWORDS.includes(words[i + 1])) {
      //   outputstring = outputstring + " " + words[i] + " " + words[i + 1];
      //   console.log(outputstring);
      // }

      //   console.log(words[i]);
      //   outputstring = outputstring;
      // } else {
      //   outputstring = outputstring + " " + words[i];
      //   console.log(outputstring);
    }
    outputstring = outputstring.trim();
    outputstring += ";\n";
    // console.log(outputstring);

    const qtext = sessions[currentSessionIndex].query;
    // console.log(qtext);
    if (outputstring !== "") {
      if (qtext != "") updateSession(id, { query: qtext + outputstring });
      else updateSession(id, { query: outputstring });
    }
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
          {/* array display and when start typing new obj in array inserted and displayed with date, time maybe? today yesterday 3rd dec , 5pm */}
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
              <div
                className="qbparent"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <center
                  style={{
                    margin: "10px",
                    color: "black",
                  }}>
                  QueryBuilder:
                </center>
                <textarea
                  // style={{
                  //   // display: "flex",
                  //   // flexWrap: "wrap",
                  //   // textOverflow: "clip",
                  //   // overflowWrap: "break-word",

                  //   overflowY: "hidden",
                  //   // scr
                  //   // textAlign: "justify",
                  //   wordWrap: "break-word",
                  //   // wordBreak: "break-all",
                  //   // inlineSize: "100px",
                  //   // overflowWrap: "breako-word",
                  //   width: "100%",
                  //   // flexDirection: "column",
                  // }}
                  className="queryBuilder"
                  onChange={onQueryBuilderChange}
                  onClick={() => {
                    if (!flip) {
                      setQueryBuilder("Select from where group by having");
                      setFlip(true);
                    }
                  }}
                  value={queryBuilder ?? ""}
                  placeholder="Select --columnName-- from --tablename-- where --condition-- group by --colName-- having --colName--"></textarea>
                <button
                  className="default-button"
                  style={{ marginTop: "10px" }}
                  onClick={() => {
                    // setQueryBuilder(queryBuilder);
                    // onQueryChange()
                    assignMainQuery();
                  }}>
                  ok!
                </button>
              </div>
            </div>
          </div>
          <div className="editor2">
            {selectedSession &&
            selectedSession.resultId &&
            ResultMap[selectedSession.resultId] ? (
              // for (let i = 0; i < count; i++) {
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
