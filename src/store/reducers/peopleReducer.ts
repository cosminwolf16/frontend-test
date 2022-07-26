import { Person } from 'models/models';
import { PeopleActions, PeopleActionsType } from 'store/actions/peopleActions';

interface PeopleState {
  people: Person[];
  formData: Person;
}

export const initialState: PeopleState = {
  people: [],
  formData: {
    first_name: '',
    last_name: '',
    email: '',
    salary: 0,
    years_of_experience: 0,
    id: 0,
    date_of_birth: '',
    industry: '',
  },
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
    case PeopleActionsType.SetFormData:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};
