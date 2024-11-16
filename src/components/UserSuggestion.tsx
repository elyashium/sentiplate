import  { useState } from 'react';

const SuggestionBox = () => {
  // State to store the user's input
  const [suggestion, setSuggestion] = useState('');
  
  // State to store a list of suggestions
  const [suggestionsList, setSuggestionsList] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    setSuggestion(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {

    event.preventDefault();
    if (suggestion.trim() !== '') {
      setSuggestionsList([...suggestionsList, suggestion]); // Add the suggestion to the list
      setSuggestion(''); // Clear the input field
    }
  };

  return (

    <div className="suggestion-box">
      <h2>Suggestion Box</h2>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={suggestion}
          onChange={handleInputChange}
          placeholder="Enter your suggestion here..."
          rows={4}  
          cols={50}  
        />

        <br />
        <button type="submit">Submit Suggestion</button>
      </form>

      <h3>Submitted Suggestions:</h3>
      <ul>
        {suggestionsList.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionBox;
