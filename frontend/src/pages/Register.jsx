import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // University email validation
    if (!email.endsWith("@g.batstateu.edu.ph")) {
      setError("Use your university email");
      return;
    }

    try {
      await api.post("/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      console.error(err.response?.data);
      setError("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="p-6 border rounded w-96">
        <h2 className="text-xl mb-4">Register</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="University Email"
          className="border p-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-green-600 text-white w-full py-2">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
