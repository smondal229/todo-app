import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getUserId } from "./api/auth";
import { Login } from "./Components/Login";
import TaskList from "./Components/TaskList";

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

  return (
    <Box m={2}>
      {isLoggedIn ? <TaskList /> : <Login setLoggedIn={setLoggedIn} />}
    </Box>
  );
}

export default App;
