import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  user: null,
  isAuthenticated: false,
  logout: () => {},
  loading: false,
});

// Custom hook to use the context
export const useAuth = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useAuth must be used within a GeneralContextProvider");
  }
  return context;
};

export const GeneralContextProvider = (props) => {
  const navigate = useNavigate();
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellStockUID, setSelectedSellStockUID] = useState("");
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}`,
          {},
          { withCredentials: true }
        );
        
        if (data.status) {
          setUser(data.user);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setUser(null);
          // Redirect to frontend login page
          window.location.href =`${process.env.REACT_APP_API_URL_F}/login`;
        }
      } catch (error) {
        console.error("Auth verification error:", error);
        setIsAuthenticated(false);
        setUser(null);
        // Redirect to frontend login page
        window.location.href = `${process.env.REACT_APP_API_URL_F}/login`;
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [navigate]);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedSellStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellStockUID("");
  };

  const logout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, { withCredentials: true });
      setUser(null);
      setIsAuthenticated(false);
      // Redirect to frontend application
      window.location.href =`${process.env.REACT_APP_API_URL_F}`;
    } catch (error) {
      console.error("Logout error:", error);
      // Still redirect to frontend even if logout fails
      window.location.href = `${process.env.REACT_APP_API_URL_F}`;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        user,
        isAuthenticated,
        logout,
        loading,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedSellStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;