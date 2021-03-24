import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {NewsState} from '../../state';
import {LoadEverythingNews, LoadTopHeadlines} from '../../state/News/actions';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit {
  constructor(private store$: Store<NewsState>) { }

  ngOnInit(): void {
    this.store$.dispatch(new LoadEverythingNews('apple'));
    // this.store$.pipe(select(selectTopHeadlinesData)).subscribe(selector => {
    //   console.log('select item from state', selector);
    // });
  }

}
