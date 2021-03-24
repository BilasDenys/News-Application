import {CategoryActions, CategoryActionTypes} from './actions';


export interface State {
  category: string;
}

const initialState: State = {
  category: 'general'
};

export const reducer = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case CategoryActionTypes.SET_CATEGORY:
      return {...state, category: action.payload}
    default:
      return state;
  }
};
