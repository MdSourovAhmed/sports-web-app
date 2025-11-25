import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
const AuthContext = ({ children }) => {
  //   const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  //   const [cartItems, setCartItems] = useState({});
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [search, setSearch] = useState("");
  //   const [showSearch, setShowSearch] = useState(false);

  // ✅ Load current user if token exists
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setLoading(false);

      try {
        const res = await api.get("/auth/admin");
        setUser(res.data.user);
      } catch {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // ✅ Authentication
  const login = async (credentials) => {
    const res = await api.post("/login", credentials);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const signup = async (info) => {
    const res = await api.post("/signup", info);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
