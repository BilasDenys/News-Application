import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewsState} from '../../state';
import {Store} from '@ngrx/store';
import {LoadEverythingNews} from '../../state/News/actions';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  query: string;

  tagsArray = [
    {title: '#apple', query: 'apple'},
    {title: '#facebook', query: 'facebook'},
    {title: '#twitter', query: 'twitter'},
    {title: '#amazon', query: 'amazon'},
    {title: '#google', query: 'google'},
    {title: '#samsung', query: 'samsung'}
  ];

  constructor(private route$: Router, private store$: Store<NewsState>) {
  }

  ngOnInit(): void {
  }


  setEverythingQuery(query: string): void {
    if (query) {
      this.route$.navigate(['/everything', query]);
    }
  }

}
