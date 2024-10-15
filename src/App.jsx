import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./assets/components/Footer/Footer";
import Header from "./assets/components/Header/Header";
import OneSec from "./assets/components/Main/OneSec";
import Login from "./assets/pages/Login/Login"
import Signup from "./assets/pages/SignUp/Signup";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<OneSec />} /> {/* Anasayfa */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
