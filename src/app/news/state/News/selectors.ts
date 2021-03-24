import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NewsState} from '../index';

export const featureNewsSelector = createFeatureSelector<NewsState>('news');

export const selectLoadingStatus = createSelector(
  featureNewsSelector,
  (state: NewsState) => state.newsData.spinner
);

export const selectTopHeadlinesNewsData = createSelector(
  featureNewsSelector,
  (state: NewsState) => state.newsData.topHeadlinesNewsData
);
export const selectCategoriesNewsData = createSelector(
  featureNewsSelector,
  (state: NewsState) => state.newsData.categoriesNewsData
);

export const selectEverythingNewsData = createSelector(
  featureNewsSelector,
  (state: NewsState) => state.newsData.everythingNewsData
);

export const selectSourcesNewsData = createSelector(
  featureNewsSelector,
  (state: NewsState) => state.newsData.sourcesNewsData
);

export const selectNewsError = createSelector(
  featureNewsSelector,
  (state: NewsState) => state.newsData.error
);

export const selectSourcesNewsError = createSelector(
  featureNewsSelector,
  (state: NewsState) => state.newsData.sourcesError
);


