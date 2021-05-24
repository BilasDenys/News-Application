import { Component, OnInit } from '@angular/core';
import { NewsState } from '../../state';
import { select, Store } from '@ngrx/store';
import { LoadSourcesNews } from '../../state/News/actions';
import { Observable } from 'rxjs';
import { TopHeadlinesSourceInterface } from '../../interfaces/TopHeadlinesInterface.interface';
import {
  selectLoadingStatus,
  selectSourcesNewsData,
  selectSourcesNewsError,
  selectTopHeadlinesNewsData,
} from '../../state/News/selectors';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  isLoading$: Observable<boolean>;
  sources$: Observable<TopHeadlinesSourceInterface[]>;
  error$: Observable<string>;

  constructor(private store$: Store<NewsState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store$.dispatch(new LoadSourcesNews());
    this.isLoading$ = this.store$.pipe(select(selectLoadingStatus));
    this.error$ = this.store$.pipe(select(selectSourcesNewsError));
    this.sources$ = this.store$.pipe(select(selectSourcesNewsData));
    
  }
}
