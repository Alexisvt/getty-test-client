// tslint:disable: max-classes-per-file
import { Action } from 'redux';

export interface IPet {
  _id?: string;
  name: string;
  age: number;
}

// LOADING
export const LOADING = 'LOADING';
export class Loading implements Action {
  public type = LOADING;
  constructor(public payload?: any) {}
}

// LOAD PETS
export const LOAD_PETS_SUCCESS = 'LOAD_PETS_SUCCESS';
export const LOAD_PETS_FAIL = 'LOAD_PETS_FAIL';

export class LoadPetsSuccess implements Action {
  public type = LOAD_PETS_SUCCESS;
  constructor(public payload: IPet[]) {}
}

export class LoadPetsFail implements Action {
  public type = LOAD_PETS_FAIL;
  constructor(public payload: any) {}
}

// CREATE PETS
export const ADD_PET_SUCCESS = 'ADD_PET_SUCCESS';
export const ADD_PET_FAIL = 'ADD_PET_FAIL';

export class AddPetSuccess implements Action {
  public type = ADD_PET_SUCCESS;
  constructor(public payload: IPet) {}
}

export class AddPetFail implements Action {
  public type = ADD_PET_FAIL;
  constructor(public payload: any) {}
}

// DELETE PETS

export const DELETE_PET_SUCCESS = 'DELETE_PET_SUCCESS';
export const DELETE_PET_FAIL = 'DELETE_PET_FAIL';

export class DeletePetSuccess implements Action {
  public type = DELETE_PET_SUCCESS;

  constructor(public payload: IPet) {}
}
export class DeletePetFail implements Action {
  public type = DELETE_PET_FAIL;

  constructor(public payload: any) {}
}

// UPDATE PET
export const UPDATE_PET_SUCCESS = 'UPDATE_PET_SUCCESS';
export const UPDATE_PET_FAIL = 'UPDATE_PET_FAIL';

export class UpdatePetSuccess implements Action {
  public type = UPDATE_PET_SUCCESS;

  constructor(public payload: IPet) {}
}
export class UpdatePetFail implements Action {
  public type = UPDATE_PET_FAIL;

  constructor(public payload: any) {}
}

export type PetsTypes =
  | LoadPetsSuccess
  | LoadPetsFail
  | Loading
  | AddPetSuccess
  | AddPetFail
  | DeletePetFail
  | DeletePetSuccess
  | UpdatePetFail
  | UpdatePetSuccess;
