import './styles.css';
import { Routes, Route } from "react-router-dom";
import Password from "./pages/password";
import Landing from "./pages/landing";
import PasswordGen from "./pages/PasswordGen";
import Securitychecker from "./pages/Securitychecker";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#ffd803',
    },
    secondary: {
      main: '#3cc4e6',
    }
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/password" element={<Password />} />
            <Route path="/password-generator" element={ <PasswordGen /> } />
            <Route path="/faqs" element={ <FAQs /> } />
            <Route path="/contact-us" element={ <Contact /> } />
            <Route path="/password-security-checker" element={ <Securitychecker />} />
          </Routes>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
