import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryComponent.css';


const CategoryComponent = ({ count }) => {  // Принимаем count в качестве аргумента
    const allCategories = useSelector(state => state.categories.categories);
    const categories = count === 0 ? allCategories : allCategories.slice(0, count);

  return (

    <div className="category-grid">
      {categories.map((category) => (
        // <CategoryCard key={category.id} category={category} />
        <Link key={category.id} to={`/category/${category.id}`}> 
          <CategoryCard category={category} />
        </Link>
      ))}
    </div>
  );
};

export default CategoryComponent;







// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const CategoryComponent = () => {
//   const categories = useSelector((state) => state.categories.categories); // Предполагаем, что категории хранятся в state.categories.categories

//   return (
//     <div>
//       <h2>Категории</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category.id}>
//              {/* <Link to={`/category/${category.id}`}>{category.name}</Link> */
//              category.title
//              }
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryComponent;

