import React, { useState } from 'react';
import Lottie from 'lottie-react';
import happyAnimation from '../images/happyLottie.json';
import stressedAnimation from '../images/stressedLottie.json';
import relaxedAnimation from '../images/relaxedLottie.json';
import energeticAnimation from '../images/energeticLottie.json';

export default function MoodSelect() {
  const [recipes, setRecipes] = useState([]);
  
  const fetchRecipes = async () => {
    try {
      const recipeApi = await fetch("https://cosylab.iiitd.edu.in/recipe-search/processes?searchText=whisk&pageSize=100");
      const response = await recipeApi.json();
      const ingredients = response.payload?.data || [];
      return ingredients;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };

  const handleHappyClick = async () => {
    const ingredients = await fetchRecipes();
    if (ingredients.length > 0) {
      const filteredRecipes = ingredients.filter(item => {
        const energy = Number(item["Energy (kcal)"]);
        return energy > 500 && energy < 700;
      });
      setRecipes(filteredRecipes);
      console.log("Happy Recipes Full Data:", filteredRecipes);
    }
  };

  const handleStressedClick = async () => {
    const ingredients = await fetchRecipes();
    if (ingredients.length > 0) {
      const filteredRecipes = ingredients.filter(item => {
        const energy = Number(item["Energy (kcal)"]);
        return energy > 300 && energy < 2000;
      });
      setRecipes(filteredRecipes);
      console.log("Stressed Recipes Full Data:", filteredRecipes);
    }
  };

  const handleEnergeticClick = async () => {
    const ingredients = await fetchRecipes();
    if (ingredients.length > 0) {
      const filteredRecipes = ingredients.filter(item => {
        const energy = Number(item["Energy (kcal)"]);
        return energy > 300 && energy < 500;
      });
      setRecipes(filteredRecipes);
      console.log("Energetic Recipes Full Data:", filteredRecipes);
    }
  };

  const handleRelaxedClick = async () => {
    const ingredients = await fetchRecipes();
    if (ingredients.length > 0) {
      const filteredRecipes = ingredients.filter(item => {
        const energy = Number(item["Energy (kcal)"]);
        return energy > 300 && energy < 500;
      });
      setRecipes(filteredRecipes);
      console.log("Relaxed Recipes Full Data:", filteredRecipes);
    }
  };

  return (
    <div className="moodContainer">
      <div className="HappySelection" onClick={handleHappyClick}>
        <div className="lottieContainer">
          <Lottie animationData={happyAnimation} loop={true} />
        </div>
        <div className="moodTitle">Happy</div>
        <div className="moodDescription">
          Feeling joyful, content, and lighthearted. Able to easily enjoy activities and be present. Experiencing positive emotions like contentment, joy, and enthusiasm.
        </div>
      </div>

      <div className="StressedSelection" onClick={handleStressedClick}>
        <div className="lottieContainer">
          <Lottie animationData={stressedAnimation} />
        </div>
        <div className="moodTitle">Stressed</div>
        <div className="moodDescription">
          Feeling tense, anxious, or overwhelmed. Difficulty focusing or relaxing. Experiencing physical symptoms like headaches, muscle tension, or fatigue.
        </div>
      </div>

      <div className="RelaxedSelection" onClick={handleRelaxedClick}>
        <div className="lottieContainer">
          <Lottie animationData={relaxedAnimation} />
        </div>
        <div className="moodTitle">Relaxed</div>
        <div className="moodDescription">
          Feeling calm, peaceful, and at ease. Low levels of stress or worry. Able to rest and recharge.
        </div>
      </div>

      <div className="EnergeticSelection" onClick={handleEnergeticClick}>
        <div className="lottieContainer">
          <Lottie animationData={energeticAnimation} />
        </div>
        <div className="moodTitle">Energetic</div>
        <div className="moodDescription">
          Feeling alert, motivated, and ready for action. High levels of physical and mental energy. Enthusiasm for tasks and activities.
        </div>
      </div>

     
     


    </div>
  );
}