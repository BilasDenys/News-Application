import { Component, OnInit } from '@angular/core';
import {NewsState} from '../../state';
import {Store} from '@ngrx/store';
import {LoadSourcesNews} from '../../state/News/actions';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private store$: Store<NewsState>) { }

  ngOnInit(): void {

    this.store$.dispatch(new LoadSourcesNews());
  }


}
