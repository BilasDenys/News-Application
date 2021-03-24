import {Action} from '@ngrx/store';

export enum CountryActionTypes {
  SET_COUNTRY = '[COUNTRY] Set Country',
}

export class SetCountry implements Action {
  readonly type = CountryActionTypes.SET_COUNTRY;
  constructor(public  payload: string) {
  }
}

export type CountryActions = SetCountry;
