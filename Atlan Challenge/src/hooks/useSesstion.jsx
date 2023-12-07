import { useEffect, useState } from "react";
import {
  DEFAULT_SESSION_STATE,
  LOCAL_STORAGE_SESSION_KEY,
} from "../util/constants";

export default function useSessions() {
  const [sessions, setSessions] = useState([]);
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

  useEffect(() => {
    const sessions = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_SESSION_KEY)
    );
    if (sessions?.length) {
      setSessions(sessions);
      setCurrentSessionIndex(sessions.length - 1);
    } else {
      setCurrentSessionIndex(DEFAULT_SESSION_STATE.length - 1);
      updateState(DEFAULT_SESSION_STATE);
    }
  }, []);

  //TODO: add callback ?
  const updateState = (value) => {
    localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(value));
    setSessions(value);
  };

  const addSession = (query, name = "Untitiled") => {
    //TODO: create uuid?
    const id = sessions[sessions.length - 1].id + 1;
    const newSession = { name, query, id, time: Date.now() };
    // const newSessions = [...state, ];
    updateState([...sessions, newSession]);
    setCurrentSessionIndex(sessions.length);
    return newSession;
  };

  const removeSession = (id) => {
    const newState = [...sessions.filter((s) => s.id !== id)];
    updateState(newState);
  };

  const updateSession = (id, newSession) => {
    const newState = [...sessions];
    const index = newState.findIndex((s) => s.id === id);
    newState[index] = { ...newState[index], ...newSession };
    updateState(newState);
  };

  return {
    sessions: sessions,
    addSession,
    updateSession,
    removeSession,
    currentSessionIndex,
    setCurrentSessionIndex,
  };
}
