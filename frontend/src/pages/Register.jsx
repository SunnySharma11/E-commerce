import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contextApi/AuthContext';
import { toast } from "react-toastify";
import Navbar from '../components/Navbar';
import axios from "axios";

const Register = () => {
  const { storeTokenInLS } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/register", user, {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("Response Data:", data);
  
      toast.success("Registration successful! 🎉");
      storeTokenInLS(data.token);
      setUser({ name: "", email: "", password: "" });
  
      navigate("/");
    } catch (error) {
      console.error("Error during fetch", error);
      toast.error(error.response?.data?.extraDetails || "Something went wrong! ❌");
    }
  };
  
  return (
    <>
      <div className="tw:ml-43 tw:mr-45">
        <Navbar />
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4 w-50" style={{ maxWidth: "450px" }}>
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
                value={user.name}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
                value={user.email}
                onChange={inputHandler}
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
                  required
                  value={user.password}
                  onChange={inputHandler}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                  ></i>
                </button>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
          <button
            className="btn btn-link p-0"
            onClick={() => navigate("/login")}
          >
            Already register? Login
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Register
