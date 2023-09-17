import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./css/tailwind/tailwind.css"
import "./css/style.css"
import { BrowserRouter as Router } from "react-router-dom"
import ScrollToTop from "./Components/ScrollToTop.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
)
