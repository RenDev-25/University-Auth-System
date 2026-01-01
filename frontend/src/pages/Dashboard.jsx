import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl">Dashboard</h1>
      <p>You are logged in.</p>
    </div>
  );
}

export default Dashboard;
