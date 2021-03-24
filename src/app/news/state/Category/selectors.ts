import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NewsState} from '../index';


export const featureCategorySelector = createFeatureSelector<NewsState>('news');

export const selectCategory = createSelector(
  featureCategorySelector,
  (state: NewsState) => state.category.category
);
