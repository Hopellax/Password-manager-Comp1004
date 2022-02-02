import './styles.css';
import { Routes, Route } from "react-router-dom";
import Password from "./pages/password";
import Landing from "./pages/landing";
import PasswordGen from "./pages/PasswordGen";
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
            <Route path="/" element={<Landing />} />
            <Route path="/password" element={<Password />} />
            <Route path="password-gen" element={ <PasswordGen /> } />
            <Route path="FAQs" element={ <FAQs /> } />
            <Route path="Contact" element={ <Contact /> } />
          </Routes>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
