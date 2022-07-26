import { Person } from 'models/models';

export type PeopleActions = LoadPeopleData;

export enum PeopleActionsType {
  LoadPeopleData,
}

export interface LoadPeopleData {
  type: PeopleActionsType.LoadPeopleData;
  payload: Person[];
}

export const loadPeopleData = (peopleData: Person[]) => ({
  type: PeopleActionsType.LoadPeopleData,
  payload: peopleData,
});
