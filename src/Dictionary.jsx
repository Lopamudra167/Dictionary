import { useState } from 'react';
import './Dictionary.css';

const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

function Dictionary() {
    const [dictionary] = useState(initialDictionary);
    const [searchTerm, setSearchTerm] = useState('');
    const [definition, setDefinition] = useState('');

    const handleSearch = () => {
        const entry = dictionary.find(
            (e) => e.word.toLowerCase() === searchTerm.toLowerCase()
        );
        setDefinition(entry ? entry.meaning : "Word not found in the dictionary.");
    };

    return (
        <div className="container">
            <h1>Dictionary App</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for a word..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="result">
                <h3>Definition:</h3>
                <p>{definition}</p>
            </div>
        </div>
    );
}

export default Dictionary;