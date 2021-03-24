import {Action} from '@ngrx/store';
import {TopHeadlinesArticlesInterface} from '../../interfaces/TopHeadlinesInterface.interface';
import {SourcesNewsInterface} from '../../interfaces/SourcesNewsResponse.interface';

export enum NewsActionTypes {
  LOAD_EVERYTHING_NEWS = '[NEWS_EVERYTHING] Load Everything News ',
  LOAD_EVERYTHING_NEWS_SUCCESS = '[NEWS_EVERYTHING] Load Everything News Success',
  LOAD_EVERYTHING_NEWS_FAIL = '[NEWS_EVERYTHING] Load Everything News Fail',

  LOAD_CATEGORIES_NEWS = '[NEWS_CATEGORIES] Load Categories News',
  LOAD_CATEGORIES_NEWS_SUCCESS = '[NEWS_CATEGORIES] Load Categories News SUCCESS',
  LOAD_CATEGORIES_NEWS_FAIL = '[NEWS_CATEGORIES] Load Categories News FAIL',

  LOAD_SOURCES_NEWS = '[NEWS_SOURCES] Load Sources News',
  LOAD_SOURCES_NEWS_SUCCESS = '[NEWS_SOURCES] Load Sources News Success',
  LOAD_SOURCES_NEWS_FAIL = '[NEWS_SOURCES] Load Sources News Fail',

  LOAD_TOP_HEADLINES = '[NEWS_TOP_HEADLINES] Load Top Headlines News',
  LOAD_TOP_HEADLINES_SUCCESS = '[NEWS_TOP_HEADLINES] Load Top Headlines News SUCCESS',
  LOAD_TOP_HEADLINES_FAIL = '[NEWS_TOP_HEADLINES] Load Top Headlines News FAIL'
}


export class LoadTopHeadlines implements Action {
  readonly type = NewsActionTypes.LOAD_TOP_HEADLINES;
}

export class LoadTopHeadlinesSuccess implements Action {
  readonly type = NewsActionTypes.LOAD_TOP_HEADLINES_SUCCESS;

  constructor(public payload: TopHeadlinesArticlesInterface[]) {
  }
}

export class LoadTopHeadlinesFail implements Action {
  readonly type = NewsActionTypes.LOAD_TOP_HEADLINES_FAIL;
  constructor(public payload: any) {
  }
}


export class LoadCategoriesNews implements Action {
  readonly type = NewsActionTypes.LOAD_CATEGORIES_NEWS;
}

export class LoadCategoriesNewsSuccess implements Action {
  readonly type = NewsActionTypes.LOAD_CATEGORIES_NEWS_SUCCESS;

  constructor(public payload: TopHeadlinesArticlesInterface[]) {
  }
}

export class LoadCategoriesNewsFail implements Action {
  readonly type = NewsActionTypes.LOAD_CATEGORIES_NEWS_FAIL;
  constructor(public payload: any) {
  }

}


export class LoadEverythingNews implements Action {
  readonly type = NewsActionTypes.LOAD_EVERYTHING_NEWS;
  constructor(public payload: string) {
  }
}

export class LoadEverythingNewsSuccess implements Action {
  readonly type = NewsActionTypes.LOAD_EVERYTHING_NEWS_SUCCESS;

  constructor(public payload: TopHeadlinesArticlesInterface[]) {
  }
}

export class LoadEverythingNewsFail implements Action {
  readonly type = NewsActionTypes.LOAD_EVERYTHING_NEWS_FAIL;
  constructor(public payload: any) {
  }
}

export class LoadSourcesNews implements Action {
  readonly type = NewsActionTypes.LOAD_SOURCES_NEWS;
}

export class LoadSourcesNewsSuccess implements Action {
  readonly type = NewsActionTypes.LOAD_SOURCES_NEWS_SUCCESS;

  constructor(public payload: SourcesNewsInterface[]) {
  }
}

export class LoadSourcesNewsFail implements Action {
  readonly type = NewsActionTypes.LOAD_SOURCES_NEWS_FAIL;
  constructor(public payload: any) {
  }
}

export type NewsActions =
  LoadTopHeadlines
  | LoadTopHeadlinesSuccess
  | LoadTopHeadlinesFail
  | LoadSourcesNews
  | LoadSourcesNewsSuccess
  | LoadSourcesNewsFail
  | LoadEverythingNews
  | LoadEverythingNewsSuccess
  | LoadEverythingNewsFail
  | LoadCategoriesNews
  | LoadCategoriesNewsSuccess
  | LoadCategoriesNewsFail;
