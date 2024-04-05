import "./styles.css";
import React, { useState } from "react";

const dictionaryData = [

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleSearch = () => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionaryData.find(
      (entry) => entry.word.toLowerCase() === lowercaseSearchTerm
    );
    if (foundWord) {
      setMeaning(foundWord.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      <p>{meaning}</p>
    </div>
  );
}
