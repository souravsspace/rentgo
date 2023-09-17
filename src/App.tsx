import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import RentContextProvider from "./Context/RentContext";
import SearchResult from "./Pages/SearchResult";
import Overview from "./Pages/Overview";

function App() {
  return (
    <RentContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
      <Footer />
    </RentContextProvider>
  );
}

export default App;
