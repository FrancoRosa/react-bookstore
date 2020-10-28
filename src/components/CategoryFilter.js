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
    <div className="filter">
      <h2>CATEGORY</h2>
      <div>
        <select id="filter" onChange={clickHandler}>
          {filter.map(category => <option key={category.objectID}>{category}</option>)}
        </select>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
