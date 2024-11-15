import Hero from "./components/Hero";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoodPage from "./components/MoodPage";
import Auth from "./components/Auth";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/MoodBasedRecommendation" element={<MoodPage />} />
      </Routes>
    </Router>
  )
}
