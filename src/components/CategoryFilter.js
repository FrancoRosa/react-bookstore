import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ clickHandler }) => {
  const filter = [
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
      <label htmlFor="filter">
        Filter:
        <select id="filter" onChange={clickHandler}>
          {filter.map(category => <option key={category.objectID}>{category}</option>)}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
