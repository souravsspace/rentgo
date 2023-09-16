import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import RentContextProvider from "./Context/RentContext";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <RentContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
      <Footer />
    </RentContextProvider>
  );
}

export default App;
