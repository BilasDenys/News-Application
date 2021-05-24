import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsState} from '../../state';
import {select, Store} from '@ngrx/store';
import {LoadCategoriesNews} from '../../state/News/actions';
import {Observable, Subscription} from 'rxjs';
import {TopHeadlinesArticlesInterface} from '../../interfaces/TopHeadlinesInterface.interface';
import {selectCategoriesNewsData, selectLoadingStatus, selectNewsError,} from '../../state/News/selectors';
import {selectCategory} from '../../state/Category/selectors';
import {ActivatedRoute} from '@angular/router';
import {SetCategory} from '../../state/Category/actions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  categoriesData$: Observable<TopHeadlinesArticlesInterface[]>;
  error$: Observable<string>;
  category$: Observable<string>;
  sub: Subscription;

  constructor(private store$: Store<NewsState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(({category}) => {
      this.store$.dispatch(new SetCategory(category));
      this.store$.dispatch(new LoadCategoriesNews());
    });
    this.category$ = this.store$.pipe(select(selectCategory));
    // this.store$.dispatch(new LoadCategoriesNews());
    this.categoriesData$ = this.store$.pipe(select(selectCategoriesNewsData));
    this.isLoading$ = this.store$.pipe(select(selectLoadingStatus));
    this.error$ = this.store$.pipe(select(selectNewsError));
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
