import { StrictMode, startTransition } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("index.html is missing #root");
// A transition render is time-sliced, so the first paint of the whole sheet does not block input for one long task.
startTransition(() => {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
