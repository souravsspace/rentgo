import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Navigation } from "./components/Navigation";
import RentContextProvider from "./Context/RentContext";

function App() {
  return (
    <RentContextProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </RentContextProvider>
  );
}

export default App;
