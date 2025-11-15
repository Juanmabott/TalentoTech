import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext/useAuthContext";

export default function Login() {
  const [userForm, setUserForm] = useState({ name: "", password: "" });
  const { user, login } = useAuthContext();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(userForm.name, userForm.password);
    if (success) {
      navigate("/admin");
    } else {
      alert("Credenciales incorrectas");
      setUserForm({ name: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "1rem auto" }}>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: "block", marginBottom: 4 }}>Nombre</label>
        <input name="name" value={userForm.name} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block", marginBottom: 4 }}>Password</label>
        <input
          name="password"
          type="password"
          value={userForm.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
