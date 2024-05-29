import React, { useEffect, useState } from 'react';
import { fetchProductsSuccess, fetchCategoriesSuccess, fetchProductsFailure, fetchCategoriesFailure } from '../actions';
import { useDispatch } from 'react-redux';
import { API_URL } from '../constants';

const DataFetchingComponent = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/products/all`);
        if (response.ok) {
          const data = await response.json();
          dispatch(fetchProductsSuccess(data));
          setAllProducts(data);
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products', error);
        dispatch(fetchProductsFailure(error.message));
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/categories/all`);
        if (response.ok) {
          const data = await response.json();
          dispatch(fetchCategoriesSuccess(data));
          setAllCategories(data);
        } else {
          throw new Error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories', error);
        dispatch(fetchCategoriesFailure(error.message));
      }
    };
    
    fetchProducts();
    fetchCategories();
  }, [dispatch]);

 
  return null; // Компонент не отображает ничего на UI
};

export default DataFetchingComponent;
