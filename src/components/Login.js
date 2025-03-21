import React, { useState } from "react";
import "../login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Basit bir kullanıcı adı ve şifre kontrolü
    if (username === "admin" && password === "1234") {
      onLogin();  // Başarılı giriş
    } else {
      setError("Geçersiz kullanıcı adı veya şifre!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Giriş Yap</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleLogin}>
          <div>
            <label>Kullanıcı Adı:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Şifre:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
