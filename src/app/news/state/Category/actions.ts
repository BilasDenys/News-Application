import {Action} from '@ngrx/store';

export enum CategoryActionTypes {
  SET_CATEGORY = '[CATEGORY] Set Category'
}

export class SetCategory implements Action {
  readonly type = CategoryActionTypes.SET_CATEGORY;
  constructor(public payload: string) {
  }
}

export type CategoryActions = SetCategory;
