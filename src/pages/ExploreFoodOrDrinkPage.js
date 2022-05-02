import React from 'react';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function ExploreFoodOrDrinkPage() {
  return (
    <div>
      <Header
        title={
          pathname === '/explore/foods' ? 'Explore Foods' : 'Explore Drinks'
        }
      />
      <main>
        <ExploreOption />
        {/* tem que renderizar mais de um ExploreOption */}
      </main>
      <NavBar />
    </div>
  );
}

export default ExploreFoodOrDrinkPage;
