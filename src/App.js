import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components";
import About from "./components/about";
import WebAppsFullPage from "./components/WebAppsFullPage";
import WordPressFullPage from "./components/WordPressFullPage";
import AndroidAppsFullPage from "./components/AndroidAppsFullPage";
import OthersFullPage from "./components/OthersFullPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/webapps" element={<WebAppsFullPage />} />
          <Route path="/wordpress" element={<WordPressFullPage />} />
          <Route path="/android" element={<AndroidAppsFullPage />} />
          <Route path="/others" element={<OthersFullPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
