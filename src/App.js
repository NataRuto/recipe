import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import icons from './icons8.png';
import RecipeComponent from './RecipeComponent';

function App() {
  const MY_ID = "d3399177";
  const MY_KEY = "22d8c5d230c1282dbc83e744356b77b0";

  const [mySearch, setMySearch] = useState("");

  const [myRecipes, setMyRecipes] = useState([]);

  const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect(() => {
    const dataRecipe = async() => { 
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
  } 
  dataRecipe()
}, [wordSubmitted]);
  

  const MyRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }
  return (
    <div className="App">
       <div className="container">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <h1>Find a Recipe</h1>
      </div>
       <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...'onChange={MyRecipeSearch} value={mySearch}>
          </input>
        </form>
        </div>
        <div className='container'>
          <button onClick={finalSearch}>
            <img src={icons} alt="icon" className="icons"/> 
          </button>
        </div>
      <div>
        {myRecipes.map((element, index) => (
          <RecipeComponent label={element.recipe.label}  
          image={element.recipe.image} 
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
          key={index}/>
          ))}
      </div>
    </div>
  );
}

export default App;
