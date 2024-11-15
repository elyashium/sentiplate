import { useState, useEffect } from 'react';



export default function EnergeticSearch() {

    const [energeticRecipes, setEnergeticRecipes] = useState([]);

    useEffect(() => {

        async function fetchRecipes() {
            try {
                const response = await fetch('https://cosylab.iiitd.edu.in/recipe-search/processes?searchText=whisk&pageSize=100');
                const data = await response.json();
                const recipes = data.payload?.data || [];

                setEnergeticRecipes(energeticRecipes.filter(item => Number(item["Energy (kcal)"]) > 300 && Number(item["Energy (kcal)"]) < 500));
            } catch (error) {
                console.error('Error:', error);
                fetchRecipes();
            }
        }
    },[])
            




    return (
        <div>EnergeticSearch</div>
    )
}
