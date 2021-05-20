import { useEffect, useState } from "react";
import { getUserId } from "./api/auth";
import { Login } from "./Components/Login";
import Layout from "./containers/Layout";

function App() {
  const token = localStorage.getItem("accessToken");
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      getUserId()
        .then((data) => {
          localStorage.setItem("currentUser", JSON.stringify(data?.results));
          setLoggedIn(true);
        })
        .catch((error) => {
          setLoggedIn(false);
        });
    }
  }, [token]);

  return isLoggedIn ? <Layout /> : <Login setLoggedIn={setLoggedIn} />;
}

export default App;
