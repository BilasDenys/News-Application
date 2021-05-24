import { Component, Input, OnInit } from '@angular/core';
import { SourcesNewsInterface } from '../../interfaces/SourcesNewsResponse.interface';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  @Input() sourceProps: SourcesNewsInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
