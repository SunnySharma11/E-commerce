import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contextApi/AuthContext";
import { toast } from "react-toastify";
import Navbar from '../components/Navbar'

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/login", user);
    
      toast.success("Login successful!");
      storeTokenInLS(data.token);
      setUser({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.extraDetails || "Login failed");
      console.error("Login error:", error);
    }
    
  };

  return (
    <div className="tw:h-screen tw:overflow-hidden tw:flex tw:flex-col">
      <div className="tw:ml-43 tw:mr-45">
        <Navbar />
      </div>
      <div className="d-flex justify-content-center align-items-center bg-light tw:flex-grow">
        <div className="card shadow p-4 w-50" style={{ maxWidth: "450px" }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={user.email}
                onChange={inputHandler}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-control"
                  value={user.password}
                  onChange={inputHandler}
                  required
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <button
              className="btn btn-link p-0"
              onClick={() => navigate("/register")}
            >
              New user? Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
