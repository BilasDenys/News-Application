import {CountryActions, CountryActionTypes} from './actions';

export interface State {
  countryValue: string;
}

const initialState: State = {
  countryValue: 'us'
};

export const reducer = (state = initialState, action: CountryActions) => {
  switch (action.type) {
    case CountryActionTypes.SET_COUNTRY:
      return {
        ...state, countryValue: action.payload
      };
    default:
      return state;
  }
};
