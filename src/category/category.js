import React from 'react';
import './category.css'
const Category = ({match}) => {
    return ( 
    <h1>{match.params.category_name} Category</h1>
     );
}
 
export default Category;