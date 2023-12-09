export const LOCAL_STORAGE_SESSION_KEY = "session";
export const DEFAULT_SESSION_STATE = [
  {
    id: 1,
    name: "Session 1 ",
    query: "Select * from customers;",
    time: null,
    resultIds: [1],
  },
  {
    id: 2,
    name: "Session 2 ",
    query: "Select * from products;\nSelect * from products group by shipCity;",
    time: null,
    resultIds: [2],
  },
  {
    id: 2,
    name: "Session 3 ",
    query: "Query 3",
    time: null,
    resultIds: [2],
  },
];
