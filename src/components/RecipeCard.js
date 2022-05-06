import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/components/RecipeCard.css';

function RecipeCard({ id, mealOrDrink, title, thumbnail, index, titleTestId }) {
  const history = useHistory();
  const route = mealOrDrink === 'Meal' ? '/foods' : '/drinks';

  return (
    <button
      data-testid={ `${index}-recipe-card` }
      type="button"
      className="RecipeCard"
      onClick={ () => history.push(`${route}/${id}`) }
    >
      <img data-testid={ `${index}-card-img` } src={ thumbnail } alt={ title } />
      <h3 data-testid={ titleTestId }>{title}</h3>
    </button>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  mealOrDrink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  titleTestId: PropTypes.string.isRequired,
};

export default RecipeCard;
