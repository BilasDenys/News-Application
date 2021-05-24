import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsState} from '../../state';
import {Store} from '@ngrx/store';
import {SetCategory} from '../../state/Category/actions';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {SetCountry} from "../../state/Country/actions";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sub: Subscription;

  constructor(private store$: Store<NewsState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      address: new FormGroup({
        country: new FormControl('us')
      })
    });

    this.sub = this.form.get('address').valueChanges.subscribe(({country}) => {
      this.store$.dispatch(new SetCountry(country));
    });
  }

  setDefaultCategory(): void {
    this.store$.dispatch(new SetCategory('general'));
  }

  submit(): void {
    console.log('work submit form');
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
