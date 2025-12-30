import { useEffect } from "react";
import "./index.css"; // make sure Tailwind CSS is imported
import { api } from "./services/api";

function App() {
  useEffect(() => {
    console.log("Axios is ready:", api);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold text-green-700">
        Axios Installed Successfully ✅
      </h1>
    </div>
  );
}

export default App;
