import Hero from "./components/Hero";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoodPage from "./components/MoodPage";
import {Auth} from "./components/Auth";
import LearnMore from "./components/LearnMore";
import SuggestionBox from "./components/UserSuggestion";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path ="/" element ={<Auth />} />
        <Route path="/MoodBasedRecommendation" element={<MoodPage />} />
        <Route path ="/LearnMore" element={<LearnMore/>} />
        <Route path ="/UserSuggestion" element={<SuggestionBox/>} />
      </Routes>
    </Router>
  )
}
