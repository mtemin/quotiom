import { createReducer, on } from '@ngrx/store';
import { setCurrentCategory } from './currentCategory.actions';

export const initialState = ""; 

export const currentCategoryReducer = createReducer(
  initialState,
  on(setCurrentCategory, (state:string, { category }) => category)
);
