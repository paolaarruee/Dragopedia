import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import { initializeDatabase } from "./utils/fakeDatabase.ts";

initializeDatabase();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
