// import React, { useState, useEffect } from 'react';

// const MoodRecipeSearch = () => {
//   const [happyRecipes, setHappyRecipes] = useState([]);
//   const [sadRecipes, setSadRecipes] = useState([]);
//   const [energeticRecipes, setEnergeticRecipes] = useState([]);
//   const [relaxedRecipes, setRelaxedRecipes] = useState([]);

//   useEffect(() => {
//     async function fetchRecipes() {
//       try {
//         const response = await fetch('https://cosylab.iiitd.edu.in/recipe-search/processes?searchText=whisk&pageSize=100');
//         const data = await response.json();
//         const recipes = data.payload?.data || [];

//         setHappyRecipes(recipes.filter(item => Number(item["Energy (kcal)"]) > 500 && Number(item["Energy (kcal)"]) < 700));
//         setSadRecipes(recipes.filter(item => Number(item["Energy (kcal)"]) > 300 && Number(item["Energy (kcal)"]) < 2000));
//         setEnergeticRecipes(recipes.filter(item => Number(item["Energy (kcal)"]) > 300 && Number(item["Energy (kcal)"]) < 500));
//         setRelaxedRecipes(recipes.filter(item => Number(item["Energy (kcal)"]) > 500 && Number(item["Energy (kcal)"]) < 700));
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }

//     fetchRecipes();
//   }, []);

//   return (
//     <div>
//       <h2>Mood-Based Recipe Search</h2>
//       <div>
//         <h3>Happy Mood</h3>
//         {happyRecipes.map((recipe, index) => (
//           <p key={index}>{recipe["Recipe_title"]}</p>
//         ))}
//       </div>
//       <div>
//         <h3>Sad Mood</h3>
//         {sadRecipes.map((recipe, index) => (
//           <p key={index}>{recipe["Recipe_title"]}</p>
//         ))}
//       </div>
//       <div>
//         <h3>Energetic Mood</h3>
//         {energeticRecipes.map((recipe, index) => (
//           <p key={index}>{recipe["Recipe_title"]}</p>
//         ))}
//       </div>
//       <div>
//         <h3>Relaxed Mood</h3>
//         {relaxedRecipes.map((recipe, index) => (
//           <p key={index}>{recipe["Recipe_title"]}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MoodRecipeSearch;