import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const DashboardLogin = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }
      
      try {
        const { data } = await axios.post(
           `${process.env.REACT_APP_API_URL}`,
          {},
          { withCredentials: true }
        );
        
        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Welcome ${user}`, {
            position: "top-right",
          });
          // Redirect to the actual dashboard app
          setTimeout(() => {
            window.location.href =`${process.env.REACT_APP_API_URL_FRONT}`; // Dashboard app URL
          }, 1500);
        } else {
          removeCookie("token");
          // navigate("/login");
        }
      } catch (error) {
        console.error("Auth verification error:", error);
        removeCookie("token");
        // navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px" }}>
          <div className="text-center">
            <h4>Welcome <span className="text-primary">{username}</span></h4>
            <p className="text-muted">Redirecting to dashboard...</p>
            <button onClick={Logout} className="btn btn-outline-danger">Logout</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default DashboardLogin;
