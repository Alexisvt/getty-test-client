import * as fromActions from '../actions/pets.types';

export interface IPetsState {
  loaded: boolean;
  loading: boolean;
  pets: fromActions.IPet[];
}

const initialState: IPetsState = {
  loaded: false,
  loading: false,
  pets: [],
};

function reducer(state = initialState, action: fromActions.PetsTypes): IPetsState {
  switch (action.type) {
    case fromActions.LOADING: {
      return { ...state, loading: true, loaded: false };
    }
    case fromActions.DELETE_PET_FAIL:
    case fromActions.ADD_PET_FAIL:
    case fromActions.LOAD_PETS_FAIL: {
      console.error(action.payload);

      return { ...state, loading: false, loaded: true };
    }
    case fromActions.LOAD_PETS_SUCCESS: {
      const pets = action.payload;
      return { ...state, pets, loading: false, loaded: true };
    }
    case fromActions.DELETE_PET_SUCCESS: {
      const pet = action.payload as fromActions.IPet;
      const pets = state.pets.filter(p => p._id !== pet._id);
      return { ...state, pets, loading: false, loaded: true };
    }
    case fromActions.UPDATE_PET_SUCCESS:
    case fromActions.ADD_PET_SUCCESS: {
      const pet: fromActions.IPet = action.payload;
      const pets = [...state.pets, pet];
      return { ...state, loading: false, loaded: true, pets };
    }
    default:
      return state;
  }
}

export default reducer;
