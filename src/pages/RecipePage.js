import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import LikeOrShare from '../components/LikeOrShare';
import RecipeInfo from '../components/RecipeInfo';
import RecommendationsCarousel from '../components/RecommendationsCarousel';
import { actionGetRecipeById, actionDefaultSearch } from '../redux/actions';
import RecipePageButton from '../components/RecipePageButton';
import useGenerateRecipeObject from '../hooks/useGenerateRecipeObject';

function RecipePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pathname } = useLocation();

  const { mealsToken, cocktailsToken, selectedRecipe } = useSelector(
    (state) => state,
  );

  const doneRecipes = useSelector((state) => state.doneRecipes);
  const isRecipeDone = doneRecipes.map((recipe) => recipe.id).includes(id);

  const [ingredients, setIngredients] = useState([]);

  const isMeal = pathname.includes('food');
  const inProgress = pathname.includes('in-progress');

  useEffect(() => {
    const token = isMeal ? mealsToken : cocktailsToken;
    dispatch(actionGetRecipeById(id, pathname, token));
    dispatch(actionDefaultSearch(token, 'foods'));
    dispatch(actionDefaultSearch(token, 'drinks'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const generateIngredientArray = () => Object.entries(selectedRecipe)
      .filter(([key, value]) => key.includes('strIngredient') && value)
      .map(([, value], index) => [
        value,
        selectedRecipe[`strMeasure${index + 1}`],
      ]); // filtra todos os ingredientes e quantidades para formar um array de arrays no formato [ingrediente, quantidade]
    setIngredients(generateIngredientArray());
  }, [selectedRecipe]);

  const { recipeBasicInfo } = useGenerateRecipeObject();

  return (
    <main>
      <section>
        <img
          src={ recipeBasicInfo.thumbnail }
          alt={ recipeBasicInfo.title }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{recipeBasicInfo.title}</h1>
        <h4 data-testid="recipe-category">{recipeBasicInfo.category}</h4>
      </section>
      <LikeOrShare />
      <Ingredients
        ingredientsData={ ingredients }
        inProgress={ inProgress }
        id={ id }
        isMeal={ isMeal }
      />
      <RecipeInfo />
      <RecommendationsCarousel type={ isMeal ? 'drinks' : 'foods' } />
      { !isRecipeDone && (
        <RecipePageButton inProgress={ inProgress } ingredientsData={ ingredients } />
      ) }
    </main>
  );
}

export default RecipePage;
