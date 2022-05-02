import './styles.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/landing";
import Passwords from "./pages/Passwords";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#800085',
    },
    secondary: {
      main: '#3cc4e6',
    }
  },
})

function App() {
  const [loggedInUser, setLogedInUser] = React.useState();

  const updateUser = (user) => setLogedInUser(user);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loggedInUser) {
      navigate("/home");
    }
  }, [window.location.href])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar user={loggedInUser} setUser={updateUser} />
        <main>
          <Routes>
            <Route path="/home" element={<Landing user={loggedInUser} updateUser={updateUser} />} />
            <Route path="/Dashboard" element={<Dashboard user={loggedInUser} user={loggedInUser || {}} />} />
            <Route path="/passwords" element={<Passwords />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
