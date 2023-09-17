import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import RentContextProvider from "./Context/RentContext"
import SearchResult from "./Pages/SearchResult"
import Overview from "./Pages/Overview"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function App() {
  return (
    <RentContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </RentContextProvider>
  )
}

export default App
