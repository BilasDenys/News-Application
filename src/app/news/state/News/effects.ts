import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {FetchNewsService} from '../../services/fetch-news.service';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {NewsState} from '../index';
import {selectCountry} from '../Country/selectors';
import {selectCategory} from '../Category/selectors';
import {
  LoadCategoriesNewsFail,
  LoadCategoriesNewsSuccess,
  LoadEverythingNews,
  LoadEverythingNewsFail,
  LoadEverythingNewsSuccess,
  LoadSourcesNewsFail,
  LoadSourcesNewsSuccess,
  LoadTopHeadlinesFail,
  LoadTopHeadlinesSuccess,
  NewsActionTypes
} from './actions';

@Injectable()

export class NewsEffects {
  constructor(
    private actions$: Actions,
    private fetchNewsService: FetchNewsService,
    private store$: Store<NewsState>
  ) {
  }


  fetchTopHeadlinesNews = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActionTypes.LOAD_TOP_HEADLINES),
      withLatestFrom(this.store$.select(selectCountry), this.store$.select(selectCategory)),
      switchMap(([action, country, category]) => {
        return this.fetchNewsService.fetchTopHeadlinesCategoryNews(country, category).pipe(
          map(response => {
            return new LoadTopHeadlinesSuccess(response);
          }),
          catchError(error => of(new LoadTopHeadlinesFail(error)))
        );
      })
    );
  });

  fetchCategoriesNews = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActionTypes.LOAD_CATEGORIES_NEWS),
      withLatestFrom(this.store$.select(selectCountry), this.store$.select(selectCategory)),
      switchMap(([action, country, category]) => {
        return this.fetchNewsService.fetchTopHeadlinesCategoryNews(country, category).pipe(
          map(response => {
            return new LoadCategoriesNewsSuccess(response);
          }),
          catchError(error => of(new LoadCategoriesNewsFail(error)))
        );
      })
    );
  });

  fetchSourcesNews = createEffect(() => {
      return this.actions$.pipe(
        ofType(NewsActionTypes.LOAD_SOURCES_NEWS),
        withLatestFrom(this.store$.select(selectCountry), this.store$.select(selectCategory)),
        switchMap(([action, country, category]) => {
          return this.fetchNewsService.fetchSourcesNews(country, category).pipe(
            map(response => {
              return new LoadSourcesNewsSuccess(response);
            }),
            catchError(error => of(new LoadSourcesNewsFail(error)))
          );
        })
      );
    }
  );

  fetchEverythingNews = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActionTypes.LOAD_EVERYTHING_NEWS),
      switchMap((action: LoadEverythingNews) => {
        return this.fetchNewsService.fetchEverythingNews(action.payload).pipe(
          map(response => {
            console.log('response everything', response);
            return new LoadEverythingNewsSuccess(response);
          }),
          catchError(error => of(new LoadEverythingNewsFail(error)))
        );
      })
    );
  });


}
