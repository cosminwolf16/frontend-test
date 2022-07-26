import { Person } from 'models/models';

export type PeopleActions = LoadPeopleData | SetCurrentPerson;

export enum PeopleActionsType {
  LoadPeopleData,
  SetCurrentPerson,
}

export interface LoadPeopleData {
  type: PeopleActionsType.LoadPeopleData;
  payload: Person[];
}

export const loadPeopleData = (peopleData: Person[]) => ({
  type: PeopleActionsType.LoadPeopleData,
  payload: peopleData,
});

export interface SetCurrentPerson {
  type: PeopleActionsType.SetCurrentPerson;
  payload: Person;
}

export const setCurrentPerson = (currentPerson: Person) => ({
  type: PeopleActionsType.SetCurrentPerson,
  payload: currentPerson,
});
