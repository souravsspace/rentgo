import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import RentContextProvider from "./Context/RentContext";
import SearchResult from "./pages/SearchResult";
import OverviewCar from "./pages/OverviewCar";

function App() {
  return (
    <RentContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/overview-cars" element={<OverviewCar />} />
      </Routes>
      <Footer />
    </RentContextProvider>
  );
}

export default App;
