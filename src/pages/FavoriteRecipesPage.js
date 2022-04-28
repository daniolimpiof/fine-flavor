import React from 'react';
import CategoryButton from '../components/CategoryButton';
import FavoriteRecipecard from '../components/FavoriteRecipeCard';
import Header from '../components/Header';

function FavoriteRecipesPage() {
  return (
    <div>
      <Header />
      <main>
        <FavoriteRecipecard />
        <CategoryButton />
      </main>
    </div>
  );
}

export default FavoriteRecipesPage;
