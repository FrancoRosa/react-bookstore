import React from 'react';

const CategoryFilter = () => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div>
      <h2>CategoryFilter</h2>
      <label htmlFor="categories">
        Filter:
        <select id="filter">
          {categories.map(category => <option key={category.objectID}>{category}</option>)}
        </select>
      </label>
    </div>
  );
};

export default CategoryFilter;
