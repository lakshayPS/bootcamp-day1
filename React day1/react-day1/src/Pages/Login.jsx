import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin, isAuthenticated }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    onLogin();
    navigate("/dashboard");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="div">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
