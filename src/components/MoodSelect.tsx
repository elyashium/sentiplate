import React, { useState } from 'react';
import Lottie from 'lottie-react';
import happyAnimation from '../images/happyLottie.json';
import stressedAnimation from '../images/stressedLottie.json';
import relaxedAnimation from '../images/relaxedLottie.json';
import energeticAnimation from '../images/energeticLottie.json';

export default function MoodSelect() {
    const [recipes, setRecipes] = useState([]);
    const [showMoodSelect, setShowMoodSelect] = useState(true);
    const [selectedMood, setSelectedMood] = useState('');

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
            setSelectedMood('Happy');
            setShowMoodSelect(false);
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
            setSelectedMood('Stressed');
            setShowMoodSelect(false);
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
            setSelectedMood('Energetic');
            setShowMoodSelect(false);
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
            setSelectedMood('Relaxed');
            setShowMoodSelect(false);
        }
    };

    const handleBackClick = () => {
        setShowMoodSelect(true);
        setRecipes([]);
        setSelectedMood('');
    };

    return (
        <div className="container">
            {showMoodSelect ? (
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
            ) : (
                <div className="recipesContainer">
                    <div className="header">
                        <button onClick={handleBackClick} className="backButton">
                            ← Back to Mood Selection
                        </button>
                        <h1>Recipes for {selectedMood} Mood</h1>
                    </div>
                    <div className="recipeGrid">


                        {recipes.map((recipe, index) => (

                            <div key={index} className="recipeCard">

                                <img className='cardImage' src="{recipe.img_url}" alt="Recipe-Image" />

                                <h2 className="recipeTitle">{recipe.Recipe_title}</h2>
                                <div className="recipeDetails">
                                    <div className="nutritionInfo">
                                        <p className="energyValue">Energy: {recipe["Energy (kcal)"]} kcal</p>
                                        <div className="nutritionGrid">
                                            <div className="nutritionItem">
                                                <span className="label">Protein</span>
                                                <span className="value">{recipe["Protein (g)"]}g</span>
                                            </div>
                                            <div className="nutritionItem">
                                                <span className="label">Carbs</span>
                                                <span className="value">{recipe["Carbohydrate (g)"]}g</span>
                                            </div>
                                            <div className="nutritionItem">
                                                <span className="label">Fat</span>
                                                <span className="value">{recipe["Fat (g)"]}g</span>
                                            </div>
                                            <div className="nutritionItem">
                                                <span className="label">Fiber</span>
                                                <span className="value">{recipe["Fiber (g)"]}g</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <style jsx>{`
        .container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          gap: 20px;
        }

        .backButton {
          padding: 10px 20px;
          background-color: #f0f0f0;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }

        .backButton:hover {
          background-color: #e0e0e0;
        }

        .recipeGrid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .recipeCard {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .recipeCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .recipeTitle {
          font-size: 1.25rem;
          margin-bottom: 15px;
          color: #333;
        }

        .energyValue {
          font-size: 1.1rem;
          color: #2c5282;
          margin-bottom: 15px;
        }

        .nutritionGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .nutritionItem {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px;
          background-color: #f7fafc;
          border-radius: 5px;
        }

        .label {
          font-size: 0.875rem;
          color: #4a5568;
        }

        .value {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
        }
      `}</style>
        </div>
    );
}