import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
       `${process.env.REACT_APP_API_URL}/signup`,
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/login"), 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("Signup failed. Try again.");
    }

    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-center">
        {/* Left Text Section */}
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold mb-3">Open a free demat and trading account</h2>
          <p className="text-muted">Join over 1.6+ crore investors and start your journey today.</p>
          <ul className="list-unstyled mt-4">
            <li className="mb-2"><strong>Stocks:</strong> Invest in all exchange-listed securities</li>
            <li className="mb-2"><strong>Mutual Funds:</strong> Zero commission direct mutual funds</li>
            <li className="mb-2"><strong>IPO:</strong> Apply to the latest IPOs via UPI</li>
            <li className="mb-2"><strong>Futures & Options:</strong> Trade with flat ₹20/order</li>
          </ul>
          <p className="small text-muted mt-3">
            By signing up, you agree to our <a href="#">Terms</a> & <a href="#">Privacy Policy</a>.
          </p>
        </div>

        {/* Right Signup Form Section */}
        <div className="col-md-5">
          <div className="card shadow-lg p-4">
            <h3 className="text-center mb-4">Create Your Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={username}
                  placeholder="Enter your mobile number"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">Sign Up</button>
            </form>
            <div className="text-center mt-3">
              <span>Already have an account? <Link to="/login">Login</Link></span>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
