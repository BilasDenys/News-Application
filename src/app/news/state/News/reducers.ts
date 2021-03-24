import {TopHeadlinesArticlesInterface} from '../../interfaces/TopHeadlinesInterface.interface';
import {NewsActions, NewsActionTypes} from './actions';
import {SourcesNewsInterface} from '../../interfaces/SourcesNewsResponse.interface';

export interface State {
  everythingNewsData: TopHeadlinesArticlesInterface[];
  categoriesNewsData: TopHeadlinesArticlesInterface[];
  sourcesNewsData: SourcesNewsInterface[];
  topHeadlinesNewsData: TopHeadlinesArticlesInterface[];
  sourcesError: any;
  error: any;
  spinner: boolean;
}

const initialState: State = {
  everythingNewsData: [],
  categoriesNewsData: [],
  sourcesNewsData: [],
  topHeadlinesNewsData: [],
  sourcesError: null,
  error: null,
  spinner: false
};

export const reducer = (state = initialState, action: NewsActions) => {
  switch (action.type) {
    case NewsActionTypes.LOAD_TOP_HEADLINES:
      return {
        ...state, spinner: true
      };
    case NewsActionTypes.LOAD_TOP_HEADLINES_SUCCESS:
      return {
        ...state, topHeadlinesNewsData: action.payload, spinner: false
      };
    case NewsActionTypes.LOAD_TOP_HEADLINES_FAIL:
      return {
        ...state, error: action.payload, spinner: false
      };
    case NewsActionTypes.LOAD_CATEGORIES_NEWS:
      return {
        ...state, spinner: true
      };
    case NewsActionTypes.LOAD_CATEGORIES_NEWS_SUCCESS:
      return {
        ...state, categoriesNewsData: action.payload, spinner: false
      };
    case NewsActionTypes.LOAD_CATEGORIES_NEWS_FAIL:
      return {
        ...state, error: action.payload, spinner: false
      };


    case NewsActionTypes.LOAD_EVERYTHING_NEWS:
      return {
        ...state, spinner: true
      };
    case NewsActionTypes.LOAD_EVERYTHING_NEWS_SUCCESS:
      return {
        ...state, spinner: false, everythingNewsData: action.payload
      };
    case NewsActionTypes.LOAD_EVERYTHING_NEWS_FAIL:
      return {
        ...state, error: action.payload, spinner: false
      };


    case NewsActionTypes.LOAD_SOURCES_NEWS:
      return {
        ...state, spinner: true
      };
    case NewsActionTypes.LOAD_SOURCES_NEWS_SUCCESS:
      return {
        ...state, sourcesNewsData: action.payload, spinner: false
      };
    case NewsActionTypes.LOAD_SOURCES_NEWS_FAIL:
      return {
        ...state, sourcesError: action.payload, spinner: false
      };
    default:
      return state;
  }
};
