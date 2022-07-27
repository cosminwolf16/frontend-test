import { Person } from 'models/models';

export type PeopleActions = LoadPeopleData | SetCurrentPerson | UpdatePerson;

export enum PeopleActionsType {
  LoadPeopleData,
  SetCurrentPerson,
  UpdatePerson,
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

export interface UpdatePerson {
  type: PeopleActionsType.UpdatePerson;
  payload: Person;
}

export const updatePerson = (person: Person) => ({
  type: PeopleActionsType.UpdatePerson,
  payload: person,
});
