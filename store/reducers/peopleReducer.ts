import { Person } from 'models/models';
import { PeopleActions, PeopleActionsType } from 'store/actions/peopleActions';

interface PeopleState {
  people: Person[];
}

export const initialState: PeopleState = {
  people: [],
};

export const peopleReducer = (
  state: PeopleState = initialState,
  action: PeopleActions
) => {
  switch (action.type) {
    case PeopleActionsType.LoadPeopleData:
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
};
