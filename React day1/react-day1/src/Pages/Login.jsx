import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin, isAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    onLogin();
    navigate("/dashboard");
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;
