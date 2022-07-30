import { Person } from 'models/models';

export type PeopleActions = LoadPeopleData | SetFormData;

export enum PeopleActionsType {
  LoadPeopleData,
  SetFormData,
}

export interface LoadPeopleData {
  type: PeopleActionsType.LoadPeopleData;
  payload: Person[];
}

export const loadPeopleData = (peopleData: Person[]) => ({
  type: PeopleActionsType.LoadPeopleData,
  payload: peopleData,
});

export interface SetFormData {
  type: PeopleActionsType.SetFormData;
  payload: Person;
}

export const setFormData = (formData: Person) => ({
  type: PeopleActionsType.SetFormData,
  payload: formData,
});
