import { combineReducers } from 'redux';
import { FETCH_PRODUCTS_SUCCESS, FETCH_CATEGORIES_SUCCESS } from './actions';

const initialProductsState = {
  products: []
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};

const initialCategoriesState = {
  categories: []
};

const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};


const initialCartState = {
  items: [], 
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'UPDATE_CART_ITEM_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.itemId 
            ? { ...item, quantity: action.payload.newQuantity } 
            : item
        )
      };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload)
        };
    // Другие actions для корзины (удаление, изменение количества)
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer, 
});

export default rootReducer;













// import { combineReducers } from 'redux';
// import { FETCH_PRODUCTS_SUCCESS, FETCH_CATEGORIES_SUCCESS } from './actions';

// const initialProductsState = {
//   products: []
// };

// const productsReducer = (state = initialProductsState, action) => {
//   switch (action.type) {
//     case FETCH_PRODUCTS_SUCCESS:
//       return {
//         ...state,
//         products: action.payload
//       };
//     default:
//       return state;
//   }
// };

// const initialCategoriesState = {
//   categories: []
// };

// const categoriesReducer = (state = initialCategoriesState, action) => {
//   switch (action.type) {
//     case FETCH_CATEGORIES_SUCCESS:
//       return {
//         ...state,
//         categories: action.payload
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   products: productsReducer,
//   categories: categoriesReducer
// });

// export default rootReducer;


