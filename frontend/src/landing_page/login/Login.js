import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage = error.response?.data?.message || "Login failed. Try again.";
      handleError(errorMessage);
    }

    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        {/* Left Side Info */}
        <div className="col-md-6 mb-4">
          <h2 className="mb-3 fw-bold">Welcome back to Zerodha</h2>
          <p className="text-muted">Login to access your investments, track your portfolio, and make new trades.</p>
          <ul className="list-unstyled mt-4">
            <li className="mb-2">
              <strong>Simple platform:</strong> Clean, modern UI for all your needs
            </li>
            <li className="mb-2">
              <strong>Secure login:</strong> Your data is protected with top-level security
            </li>
            <li className="mb-2">
              <strong>Brokerage-free investing:</strong> ₹0 on delivery trades and direct mutual funds
            </li>
          </ul>
          <p className="text-muted small mt-3">
            Don’t have an account yet? <Link to="/signup">Sign up for free</Link>
          </p>
        </div>

        {/* Right Side Form */}
        <div className="col-md-5">
          <div className="card shadow-lg p-4">
            <h3 className="text-center mb-4">Login to Your Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div className="text-center mt-3">
              <span>New user? <Link to="/signup">Create an account</Link></span>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
