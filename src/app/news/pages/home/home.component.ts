import { Component, OnInit } from '@angular/core';
import { NewsState } from '../../state';
import { select, Store } from '@ngrx/store';
import { LoadTopHeadlines } from '../../state/News/actions';
import { FetchNewsService } from '../../services/fetch-news.service';
import { TopHeadlinesArticlesInterface } from '../../interfaces/TopHeadlinesInterface.interface';
import { Observable } from 'rxjs';
import {
  selectLoadingStatus,
  selectNewsError,
  selectTopHeadlinesNewsData,
} from '../../state/News/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topHeadlines$: Observable<TopHeadlinesArticlesInterface[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  constructor(
    private store$: Store<NewsState>,
    private fetchNewsService: FetchNewsService
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(new LoadTopHeadlines());

    this.topHeadlines$ = this.store$.pipe(select(selectTopHeadlinesNewsData));
    this.error$ = this.store$.pipe(select(selectNewsError));
    this.isLoading$ = this.store$.pipe(select(selectLoadingStatus));
  }
}
