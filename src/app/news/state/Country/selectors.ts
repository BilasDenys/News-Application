import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NewsState} from '../index';

export const featureCountrySelector = createFeatureSelector<NewsState>('news');


export const selectCountry = createSelector(
  featureCountrySelector,
  (state: NewsState) => state.country.countryValue
);
