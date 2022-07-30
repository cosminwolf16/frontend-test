import { RootState } from 'store/store';

const getPeopleState = (state: RootState) => {
  return state.people;
};

export const getAllPeople = (state: RootState) => {
  return getPeopleState(state).people;
};

export const getPerson = (state: RootState) => {
  return getPeopleState(state).formData;
};
