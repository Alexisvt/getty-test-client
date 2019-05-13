import petService from '../../services/pets.service';
import {
  DeletePetFail,
  DeletePetSuccess,
  IPet,
  Loading,
  LoadPetsFail,
  LoadPetsSuccess,
  UpdatePetFail,
  UpdatePetSuccess,
} from './pets.types';

export const getAllPets = () => async (dispatch: any) => {
  try {
    dispatch(new Loading());
    const pets = await petService.getPets();
    dispatch(new LoadPetsSuccess(pets));
  } catch (error) {
    dispatch(new LoadPetsFail(error));
  }
};

export const deletePet = (id: string) => async (dispatch: any) => {
  try {
    dispatch(new Loading());
    const pet = await petService.getPet(id);
    dispatch(new DeletePetSuccess(pet));
  } catch (error) {
    dispatch(new DeletePetFail(error));
  }
};

export const updatePet = (pet: IPet) => async (dispatch: any) => {
  try {
    dispatch(new Loading());
    const updatedPet = await petService.updatePet(pet);
    dispatch(new UpdatePetSuccess(updatedPet));
  } catch (error) {
    dispatch(new UpdatePetFail(error));
  }
};
