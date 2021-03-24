import {Component, OnInit} from '@angular/core';
import {NewsState} from '../../state';
import {Store} from '@ngrx/store';
import {LoadTopHeadlines} from '../../state/News/actions';
import {FetchNewsService} from '../../services/fetch-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store$: Store<NewsState>, private fetchNewsService: FetchNewsService) {
  }

  ngOnInit(): void {
    this.store$.dispatch(new LoadTopHeadlines());
    // this.store$.pipe(select(selectTopHeadlinesData)).subscribe(selector => {
    //   console.log('select item from state', selector);
    // });

    // this.fetchNewsService.fetchEverythingNews('apple').subscribe(response => {
    //   console.log('[Home Component] --> ', response);
    // });
  }

}
