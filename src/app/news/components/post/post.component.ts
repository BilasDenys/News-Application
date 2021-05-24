import { Component, Input, OnInit } from '@angular/core';
import { TopHeadlinesArticlesInterface } from '../../interfaces/TopHeadlinesInterface.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() postProps: TopHeadlinesArticlesInterface;
  constructor() {}

  ngOnInit(): void {}
}
