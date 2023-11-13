import { createRoot } from "react-dom/client";
import { Counter } from "./Counter";
import "./index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className='app'>
    <Counter />
  </div>
);
