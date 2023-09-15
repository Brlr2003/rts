import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hi There!</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(<App />);
