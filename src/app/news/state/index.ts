import {ActionReducerMap} from '@ngrx/store';

import * as fromNews from './News/reducers';
import * as fromCountry from './Country/reducers';
import * as fromCategory from './Category/reducers';

import {NewsEffects} from './News/effects';

export interface NewsState {
  newsData: fromNews.State;
  country: fromCountry.State;
  category: fromCategory.State;
}

export const  reducer: ActionReducerMap<NewsState> = {
  newsData: fromNews.reducer,
  country: fromCountry.reducer,
  category: fromCategory.reducer
};

export const effects: any = [NewsEffects];
