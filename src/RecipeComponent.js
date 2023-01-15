import icons8 from './icons8-галочка.png';
function RecipeComponent({label, image, calories, ingredients}) {
    return(
        <div>
        <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container">
            <img src={image} className="tasty" width="300px" alt="recipe"/>
        </div>
        <div className="container">
            <p className='calories'>{calories.toFixed()} calories</p>
        </div>
        <ul className="list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <img src={icons8} className="icon" alt="icon"/>
                    {ingredient}
                </li>
            ))}

        </ul>
        </div>
    )
}

export default RecipeComponent;