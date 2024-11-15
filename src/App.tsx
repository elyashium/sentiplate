import Hero from "./components/Hero";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoodPage from "./components/MoodPage";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/MoodBasedRecommendation" element={<MoodPage />} />
    </Routes>
  </Router>
  )
}
