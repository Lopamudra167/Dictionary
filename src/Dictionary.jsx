import {useState} from 'react';

const initialDictionary=  
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];
const styles = {
    
container:{
   marginLeft:'10px',
    fontFamily:'serif'
  
},
heading:{
    fontSize:'70px'
},
input:{
    padding:'10px',
    width:'300px',
    fontSize:'20px'
},
button:{
    padding:'10px',
    width:'90px',
    fontSize:'20px'
},
h3:{
    fontSize:'30px',
   
},
p:{fontSize:'20px'}
};

function Dictionary(){
const [dictionary, setDictionary] = useState(initialDictionary);
const [searchTerm, setSearchTerm] = useState('');
const [definition, setDefinition] = useState('');
const handleSearch = () =>{
    const entry = dictionary.find((e) =>{e.word.toLowerCase === searchTerm.toLowerCase});
    if(entry){
        setDefinition(entry.meaning)
    }else{
        setDefinition("Word not found in the dictionary.")
    }
};
    return(
     
        <div className="container" style={styles.container}>
             <h1 className="heading" style={styles.heading}>
            Dictionary App
             </h1>
             <div >
                <input type="text" placeholder="Search for a word..." style={styles.input} value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)}/>
                <button className="searchButton"style={styles.button} onClick={handleSearch}>Search</button>
             </div>
             <h3 className="h3" style={styles.h3}>Definition:</h3>
             <p className='p' style={styles.p}>{definition}</p>
        </div>

    );
}
export default Dictionary;