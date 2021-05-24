import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {NewsState} from '../../state';
import {Observable, Subscription} from 'rxjs';
import {TopHeadlinesArticlesInterface} from '../../interfaces/TopHeadlinesInterface.interface';
import {selectEverythingNewsData, selectLoadingStatus, selectNewsError} from '../../state/News/selectors';
import {ActivatedRoute, Params} from '@angular/router';
import {LoadEverythingNews} from '../../state/News/actions';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  everythingData$: Observable<TopHeadlinesArticlesInterface[]>;
  error$: Observable<string>;
  sub: Subscription;

  constructor(private store$: Store<NewsState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(({query}: Params) => {
      this.store$.dispatch(new LoadEverythingNews(query));
    });

    this.everythingData$ = this.store$.pipe(select(selectEverythingNewsData));
    this.error$ = this.store$.pipe(select(selectNewsError));
    this.isLoading$ = this.store$.pipe(select(selectLoadingStatus));
  }

  ngOnDestroy(): void {
    if (this.sub) {
    }
    this.sub.unsubscribe();
  }

}
