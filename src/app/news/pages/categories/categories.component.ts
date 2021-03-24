import { Component, OnInit } from '@angular/core';
import {NewsState} from '../../state';
import {Store} from '@ngrx/store';
import {LoadCategoriesNews} from '../../state/News/actions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private  store$: Store<NewsState>) { }

  ngOnInit(): void {
    this.store$.dispatch(new LoadCategoriesNews());
  }

}
